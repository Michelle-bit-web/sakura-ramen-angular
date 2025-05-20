import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-imprint',
  imports: [
    CommonModule,
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  resetConsent(event: Event): void {
  event.preventDefault();
  document.cookie = 'maps_consent=; path=/; max-age=0';
  alert('Your Google Maps consent has been withdrawn. The change will take effect the next time you visit the map.');
}
}
