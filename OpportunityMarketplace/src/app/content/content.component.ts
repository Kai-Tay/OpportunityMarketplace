import { Component } from '@angular/core';
import { LearnMoreComponent } from "./learn-more/learn-more.component";
import { FilterOptionsComponent } from "./filter-options/filter-options.component";
import { JobCardComponent } from "./job-card/job-card.component";
import { CircularIconComponent } from '../circular-icon/circular-icon.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [LearnMoreComponent, FilterOptionsComponent, JobCardComponent, CircularIconComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
