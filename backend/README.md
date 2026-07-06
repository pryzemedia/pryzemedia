# PryzeMedia Backend

This directory contains the PHP backend for the PryzeMedia contact form.

## Setup

### Local Development

The contact form uses **Mailpit** for local email testing (no emails sent externally).

1. **Start Mailpit:**
   ```bash
   mailpit --smtp=1025 --http=8025
   ```

2. **Start Apache with XAMPP:**
   ```bash
   C:\xampp\apache_start.bat
   ```

3. **Configure PHP sendmail (already done in php.ini):**
   ```
   sendmail_program = "C:\xampp\sendmail\sendmail.exe -t -i"
   ```

4. **sendmail.ini is configured to use Mailpit:**
   ```
   smtp_server=127.0.0.1
   smtp_port=1025
   ```

5. **Access Mailpit UI:** http://127.0.0.1:8025

### Production Deployment

When deployed to `www.pryzemedia.com`:

- **contact.php** automatically detects the production environment
- Uses **Gmail SMTP** to send emails to jeffreykprice@pryzemedia.com
- Gmail app password is embedded in the code (consider moving to environment variables)

**To deploy:**

1. Copy `backend/contact.php` to your production server's web root (e.g., `/var/www/html/pryzemedia/contact.php`)
2. Ensure PHP can make outbound SMTP connections (port 587)
3. Emails will be sent via Gmail SMTP automatically

### Security Notes

⚠️ The Gmail app password is currently stored in the PHP file. For production, consider:

- Moving credentials to environment variables
- Using a `.env` file (with proper .gitignore)
- Using a secrets management service
- Revoking and regenerating the app password if exposed

### Email Flow

**Localhost:**
```
Angular Form → contact.php → sendmail → Mailpit (captured)
```

**Production:**
```
Angular Form → contact.php → Gmail SMTP → Gmail (forwarded to recipient)
```
