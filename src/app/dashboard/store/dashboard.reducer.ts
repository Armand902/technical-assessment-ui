import { createReducer, on } from "@ngrx/store";
import { FetchAPISuccess, setLoading } from "./dashboard.action";
import { initialLoadingState, initialState } from "./dashboard.state";

export const _dashboardReducer = createReducer(
  initialState,
  on(FetchAPISuccess, (state, { targetAssets }) => {
    return targetAssets;
  })
);

export const _loadingReducer = createReducer(
  initialLoadingState,
  on(setLoading, (state, { status }) => {
    return status;
  })
);
