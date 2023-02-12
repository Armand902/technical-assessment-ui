import { createReducer, on } from "@ngrx/store";
import { TargetAsset } from "./target-asset";
import { FetchAPISuccess } from "./dashboard.action";

export const initialState: ReadonlyArray<TargetAsset> = [];

export const dashboardReducer = createReducer(
  initialState,
  on(FetchAPISuccess, (state, { targetAssets }) => {
    return targetAssets;
  })
);
