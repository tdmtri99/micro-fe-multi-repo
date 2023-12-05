import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountComponent } from './count.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { counterFeatureKey, counterReducer } from '../store/count/counter.reducer';



@NgModule({
  declarations: [
    CountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CountComponent,
      }
    ]),
    StoreModule.forFeature(counterFeatureKey, counterReducer)
  ]
})
export class CountModule { }
