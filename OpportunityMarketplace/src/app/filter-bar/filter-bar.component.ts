import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CircularIconComponent } from '../circular-icon/circular-icon.component';
import { SliderModule } from 'primeng/slider';


@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CircularIconComponent, SliderModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FilterBarComponent {
  rangeValues: number[] = [20, 80];
}
