import { createAction, props } from "@ngrx/store";
import { TargetAsset } from "./target-asset";

export const invokeAPI = createAction("[API] Invoke target asset Fetch API");

export const FetchAPISuccess = createAction(
  "[API] Fetch API Success",
  props<{ targetAssets: TargetAsset[] }>()
);
