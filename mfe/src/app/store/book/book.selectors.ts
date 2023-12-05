import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IBookState } from './book.model';
import { bookFeatureKey } from './book.reducers';

export const selectBookState = createFeatureSelector<IBookState>(bookFeatureKey);
export const selectBooksList = createSelector(selectBookState, (state) => state.books);
export const selectBookIsLoading = createSelector(selectBookState, (state) => state.isLoading);