import { Component } from '@angular/core';
import { LearnMoreComponent } from "./learn-more/learn-more.component";
import { FilterOptionsComponent } from "./filter-options/filter-options.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [LearnMoreComponent, FilterOptionsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
