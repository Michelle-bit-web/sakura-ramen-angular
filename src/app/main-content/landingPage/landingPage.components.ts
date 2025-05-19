import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [
        CommonModule, 
        NavbarComponent],
    templateUrl: './landingPage.components.html',
    styleUrls: ['./landingPage.components.scss'],
})
export class LandingPageComponent {

}