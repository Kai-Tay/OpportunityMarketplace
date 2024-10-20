import { Component } from '@angular/core';
import { CircularIconComponent } from '../circular-icon/circular-icon.component';
import { PrimeNGConfig } from 'primeng/api';
import { Aura } from 'primeng/themes/aura';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CircularIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private config: PrimeNGConfig) {
    this.config.theme.set({ preset: Aura });
}

}
