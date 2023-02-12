import { createFeatureSelector } from "@ngrx/store";
import { TargetAsset } from "./target-asset";

export const selectDashboard =
  createFeatureSelector<TargetAsset[]>("targetAssets");
