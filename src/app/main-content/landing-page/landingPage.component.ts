import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: /* html */ `
    <section>
      <app-navbar></app-navbar>

      <h1 class="fontRaleway">Sakura Ramen</h1>
      <h2 class="fontRaleway">Best Ramen in Town</h2>
    </section>
  `,
  styleUrls: ['./landingPage.component.scss'],
})
export class LandingPageComponent {}
