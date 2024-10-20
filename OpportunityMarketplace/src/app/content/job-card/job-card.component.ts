import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Job {
  organisationTitle: string;
  organisationIcon: string;
  opportunityTitle: string;
  tags: string[];
  date: string; // Can also use Date type
  salary: number;
  location: string;
  id: number; // Unique identifier
  isBookmarked: boolean; // Bookmark state
}

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JobCardComponent {
  @Input() jobInfo: Job[] = [];;

  isBookmarked: boolean = false; // Initial state for the icon
  toggleIcon(index: number): void {
    this.jobInfo[index].isBookmarked = !this.jobInfo[index].isBookmarked;
  }
}
