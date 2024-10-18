import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';
  counter = signal(0);
  counterRef: any;
  
  constructor() {
    console.log('constructor');
    console.log('--'.repeat(20));
  }

  ngOnChanges(changes: SimpleChanges){
    // Before and during
    console.log('ngOnChanges');
    console.log('--'.repeat(20));
    console.log(changes);
    console.log('--'.repeat(10));
    const duration = changes['duration'];
    if (duration) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // After rendering
    console.log('ngOnInit');
    console.log('--'.repeat(5));
    this.counterRef = window.setInterval(() => {
      console.log('run interval');
      this.counter.update(statePrev => statePrev + 1);
    }, 1000);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    console.log('--'.repeat(15));
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    console.log('--'.repeat(3));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('--'.repeat(20));
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('dirationChanged');
    console.log('--'.repeat(10));
  }
}
