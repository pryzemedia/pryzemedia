<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Content-Type: application/json');

// Detect environment
$isProduction = !in_array($_SERVER['HTTP_HOST'] ?? '', ['localhost', '127.0.0.1', 'localhost:4200', 'localhost:80']);
$isLocalhost = !$isProduction;

// Handle OPTIONS preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON payload.']);
    exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please complete all required fields.']);
    exit;
}

$siteName = 'PryzeMedia.com';
$to = 'jeffreykprice@pryzemedia.com';
$subject = "Email from $name via $siteName";
$date = date('m/d/Y H:i:s');

$body = "A visitor to $siteName has left the following information<br />";
$body .= "Sent By: $name<br />";
$body .= "Email: $email<br /><br />";
$body .= "Message:<br />";
$body .= nl2br(htmlspecialchars($message)) . "<br /><br />";
$body .= "Sent: $date";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
$headers .= "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

// Send email based on environment
$sent = false;

if ($isProduction) {
    // Production: Use Gmail SMTP
    $sent = sendViaGmailSMTP($to, $subject, $body, $headers, $name, $email);
} else {
    // Local development: Use Mailpit (sendmail)
    $sent = @mail($to, $subject, $body, $headers);
}

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your message was sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'The message could not be sent. Please try again later.']);
}

/**
 * Send email via Gmail SMTP
 */
function sendViaGmailSMTP($to, $subject, $body, $headers, $name, $email) {
    // Gmail SMTP configuration
    $smtpHost = 'smtp.gmail.com';
    $smtpPort = 587;
    $smtpUser = 'jeffreykprice@pryzemedia.com';
    $smtpPass = 'fbzx bcqg woua zagz';  // Gmail app password
    
    // Create socket connection to Gmail SMTP
    $socket = @fsockopen($smtpHost, $smtpPort, $errno, $errstr, 10);
    
    if (!$socket) {
        error_log("Failed to connect to Gmail SMTP: $errstr ($errno)");
        return false;
    }
    
    // Helper function to read SMTP response
    $readResponse = function() use ($socket) {
        $response = '';
        while ($line = fgets($socket, 515)) {
            $response .= $line;
            if (substr($line, 3, 1) === ' ') break;
        }
        return $response;
    };
    
    // Helper function to send SMTP command
    $sendCommand = function($command) use ($socket, $readResponse) {
        fputs($socket, $command . "\r\n");
        return $readResponse();
    };
    
    try {
        // Read initial response
        $readResponse();
        
        // EHLO command
        $sendCommand("EHLO pryzemedia.com");
        
        // Start TLS
        $sendCommand("STARTTLS");
        stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        $sendCommand("EHLO pryzemedia.com");
        
        // Authenticate
        $sendCommand("AUTH LOGIN");
        $sendCommand(base64_encode($smtpUser));
        $sendCommand(base64_encode($smtpPass));
        
        // Send email
        $sendCommand("MAIL FROM: <{$smtpUser}>");
        $sendCommand("RCPT TO: <{$to}>");
        $sendCommand("DATA");
        
        // Construct full email message
        $headers .= "Subject: $subject\r\n";
        $headers .= "To: $to\r\n";
        $message = $headers . "\r\n" . $body;
        
        fputs($socket, $message . "\r\n.\r\n");
        $readResponse();
        
        // Close connection
        $sendCommand("QUIT");
        fclose($socket);
        
        return true;
    } catch (Exception $e) {
        error_log("Gmail SMTP error: " . $e->getMessage());
        @fclose($socket);
        return false;
    }
}
?>
