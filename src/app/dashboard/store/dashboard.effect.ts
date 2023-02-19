import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EMPTY, map, mergeMap, withLatestFrom } from "rxjs";
import { DashboardService } from "../dashboard.service";
import { FetchAPISuccess, invokeAPI, setLoading } from "./dashboard.action";
import { selectDashboard } from "./dashboard.selector";

@Injectable()
export class DashboardEffect {
  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService,
    private store: Store
  ) {}

  loadAllTargetAssets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeAPI),
      withLatestFrom(this.store.pipe(select(selectDashboard))),
      mergeMap(([, targetAsset]) => {
        if (targetAsset.length > 0) {
          return EMPTY;
        }
        return this.dashboardService.getTargetAssets().pipe(
          map((data) => {
            this.store.dispatch(setLoading({ status: false }));
            return FetchAPISuccess({ targetAssets: data });
          })
        );
      })
    )
  );
}
