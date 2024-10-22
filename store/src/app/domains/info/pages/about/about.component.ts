import { Component, signal } from '@angular/core';
import { CounterComponent } from "@shared/components/counter/counter.component";
import { HighlightDirective } from '@shared/directives/higlight.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CounterComponent,
    HighlightDirective
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  duration = signal(1000);
  message = signal('Hello World');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(Number(input.valueAsNumber));
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
