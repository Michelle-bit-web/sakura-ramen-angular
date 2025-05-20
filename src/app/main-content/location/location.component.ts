import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-location',
  imports: [
    CommonModule,
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent implements OnInit {
  consentGiven = false;
  googleMapUrl: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.consentGiven = document.cookie.includes('maps_consent=true');
    if (this.consentGiven) {
      this.setMapUrl();
    }
    // if (window.location.hash === '#maps-consent-reset') {
    // this.resetConsent();
    // }
  }

  giveConsent(): void {
    document.cookie = 'maps_consent=true; path=/; max-age=31536000';
    this.consentGiven = true;
    this.setMapUrl();
  }

  private setMapUrl(): void {
    const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.2081517665038!2d11.561203299999999!3d48.125509099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf44d01affc5%3A0xe7a07e0710be63e8!2sKapuzinerstra%C3%9Fe%2031%2C%2080337%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1738671509994!5m2!1sde!2sde";
    this.googleMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

 
}
