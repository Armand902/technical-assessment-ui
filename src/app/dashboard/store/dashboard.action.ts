import { createAction, props } from "@ngrx/store";
import { TargetAsset } from "./target-asset";

//Grouped string declaration for easier reading.
export const SET_INVOKE_API_ACTION = "[API] Invoke target asset Fetch API";
export const SET_FETCH_API_ACTION = "[API] Fetch API Success";
export const SET_LOADING_ACTION = "[Loading State] Set loading";

export const invokeAPI = createAction(SET_INVOKE_API_ACTION);

export const FetchAPISuccess = createAction(
  SET_FETCH_API_ACTION,
  props<{ targetAssets: TargetAsset[] }>()
);

export const setLoading = createAction(
  SET_LOADING_ACTION,
  props<{ status: boolean }>()
);
