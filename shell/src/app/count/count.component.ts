import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../store/count/count.action';
import { selectCounter } from '../store/count/counter.selector';

@Component({
  selector: 'app-count',
  template: `
    <p>
      count works!
    </p>
<div class="container p-5 text-center">

    <button class="btn btn-primary mb-3" (click)="increment()">Increment</button>
    <div class="mb-3">Current Count: <strong>{{ count$ | async }}</strong></div>
    <button class="btn btn-primary me-2" (click)="decrement()">Decrement</button>
    <button class="btn btn-primary" (click)="reset()">Reset Counter</button>
</div>
  `,
  styles: [
  ]
})
export class CountComponent {
  store = inject(Store)

  count$ = this.store.select(selectCounter)

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
