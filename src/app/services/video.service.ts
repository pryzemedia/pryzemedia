import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class VideoService {
  constructor(private sanitizer: DomSanitizer) {}

  toSafeYoutubeUrl(idOrUrl: string): SafeResourceUrl {
    if (!idOrUrl) {
      return '' as unknown as SafeResourceUrl;
    }

    let url = idOrUrl;
    // if value looks like an id (no slashes), convert to embed URL
    if (!idOrUrl.includes('http') && !idOrUrl.includes('/')) {
      url = `https://www.youtube.com/embed/${idOrUrl}`;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
