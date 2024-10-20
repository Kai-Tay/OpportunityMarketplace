import { Component } from '@angular/core';
import { LearnMoreComponent } from "./learn-more/learn-more.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [LearnMoreComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
