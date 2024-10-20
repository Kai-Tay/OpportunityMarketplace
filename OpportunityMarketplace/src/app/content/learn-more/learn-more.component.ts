import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-learn-more',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './learn-more.component.html',
  styleUrl: './learn-more.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class LearnMoreComponent {

}
