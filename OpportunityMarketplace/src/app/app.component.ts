import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimeNGConfig } from 'primeng/api';
import { Aura } from 'primeng/themes/aura';
import { ContentComponent } from "./content/content.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ContentComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'OpportunityMarketplace';
  constructor(private config: PrimeNGConfig) {
    this.config.theme.set({ preset: Aura });
}
}
