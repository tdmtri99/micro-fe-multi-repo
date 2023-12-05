import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterFeatureKey } from "./counter.reducer";

export const selectCounterFeature = createFeatureSelector<number>(counterFeatureKey);

export const selectCounter = createSelector(selectCounterFeature, (state: number) => state)
