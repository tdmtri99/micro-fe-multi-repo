import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { BooksEffects, bookFeatureKey, bookReducer } from '../store/book';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(bookFeatureKey, bookReducer),
    EffectsModule.forFeature(BooksEffects),
    RouterModule.forChild([
      {
        path: '',
        component: BookComponent,
      },
    ]),
  ],
})
export class BookModule {}
