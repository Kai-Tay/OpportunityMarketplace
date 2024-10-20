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
  jobInfo = [
    {
      "id": 1,
      "organisationTitle": "RemoteTech Solutions",
      "organisationIcon": "https://via.placeholder.com/50",
      "opportunityTitle": "Software Engineer",
      "tags": ["Full time", "Full day"],
      "date": "20 October, 2024",
      "salary": 80,
      "location": "San Francisco, CA",
      "isBookmarked": false
    },
    {
      "id": 2,
      "organisationTitle": "Creative Studios Co.",
      "organisationIcon": "https://via.placeholder.com/50",
      "opportunityTitle": "Graphic Designer",
      "tags": ["Part time", "Flexible schedule","Project work", "Distant work"],
      "date": "18 October, 2024",
      "salary": 50,
      "location": "New York, NY",
      "isBookmarked": false
    },
    {
      "id": 3,
      "organisationTitle": "UX Design Collective",
      "organisationIcon": "https://via.placeholder.com/50",
      "opportunityTitle": "UX Designer",
      "tags": ["Project work", "Distant work"],
      "date": "15 October, 2024",
      "salary": 65,
      "location": "Austin, TX",
      "isBookmarked": false
    },
    {
      "id": 4,
      "organisationTitle": "Code Innovators",
      "organisationIcon": "https://via.placeholder.com/50",
      "opportunityTitle": "Software Engineer Intern",
      "tags": ["Internship", "Shift method"],
      "date": "12 October, 2024",
      "salary": 20,
      "location": "Seattle, WA",
      "isBookmarked": false
    },
    {
      "id": 5,
      "organisationTitle": "UX Designers Hub",
      "organisationIcon": "https://via.placeholder.com/50",
      "opportunityTitle": "Junior UX Designer",
      "tags": ["Volunteering", "Distant work"],
      "date": "08 October, 2024",
      "salary": 0,
      "location": "Los Angeles, CA",
      "isBookmarked": false
    },
    {
      "id": 6,
      "organisationTitle": "Digital Creatives Ltd.",
      "organisationIcon": "https://via.placeholder.com/50",
      "opportunityTitle": "Graphic Designer",
      "tags": ["Freelance", "Flexible schedule"],
      "date": "05 October, 2024",
      "salary": 45,
      "location": "Chicago, IL",
      "isBookmarked": false
    }
  ];
}
