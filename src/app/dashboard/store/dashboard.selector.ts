import { createFeatureSelector } from "@ngrx/store";
import { TargetAsset } from "./target-asset";

//Declared state names here so you only have to change at one place
export const DASHBOARD_STATE_NAME = "dashboard";
export const LOADING_STATE_NAME = "loading";

export const selectDashboard =
  createFeatureSelector<TargetAsset[]>(DASHBOARD_STATE_NAME);

export const selectLoading = createFeatureSelector<boolean>(LOADING_STATE_NAME);
