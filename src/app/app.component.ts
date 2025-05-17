import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landingPage/landingPage.components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, LandingPageComponent],
  standalone: true,  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sakura';
}
