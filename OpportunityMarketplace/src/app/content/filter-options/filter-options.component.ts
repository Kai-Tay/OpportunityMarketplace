import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-options.component.html',
  styleUrl: './filter-options.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FilterOptionsComponent {
  schedule = [
    { id: 1, name: 'Full time', checked: false },
    { id: 2, name: 'Part time', checked: false },
    { id: 3, name: 'Internship', checked: false },
    { id: 4, name: 'Project work', checked: false },
    { id: 5, name: 'Volunteering', checked: false },
  ];

  type = [
    { id: 1, name: 'Full day', checked: false },
    { id: 2, name: 'Flexible schedule', checked: false },
    { id: 3, name: 'Shift work', checked: false },
    { id: 4, name: 'Distant work', checked: false },
    { id: 5, name: 'Shift method', checked: false },
  ];
}
