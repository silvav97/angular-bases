import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>

<button (click)="increasyBy(1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increasyBy(-1)">-1</button>

<hr>
  `
})

export class CounterComponent {
  counter:number = 10;

  constructor() { }

  increasyBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
