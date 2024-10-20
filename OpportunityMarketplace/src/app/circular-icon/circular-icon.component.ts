import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circular-icon',
  standalone: true,
  imports: [],
  template: `
    <button class="bg-black rounded-full border-gray-600 border-2 h-10 w-10" style="font-size: 20px;">
    <i class="pi" [class]="iconClass"></i></button>
    `,
  styleUrl: './circular-icon.component.css'
})
export class CircularIconComponent {
  @Input() iconClass: string = ""; // To apply dynamic classes
}
