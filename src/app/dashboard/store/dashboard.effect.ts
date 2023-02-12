import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from "rxjs";
import { Appstate } from "src/app/shared/store/appstate";
import { DashboardService } from "../dashboard.service";
import { FetchAPISuccess, invokeAPI } from "./dashboard.action";
import { selectDashboard } from "./dashboard.selector";

@Injectable()
export class DashboardEffect {
  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService,
    private store: Store,
    private appStore: Store<Appstate>
  ) {}

  loadAllTargetAssets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeAPI),
      withLatestFrom(this.store.pipe(select(selectDashboard))),
      mergeMap(([, targetAsset]) => {
        if (targetAsset.length > 0) {
          return EMPTY;
        }
        return this.dashboardService
          .getTargetAssets()
          .pipe(map((data) => FetchAPISuccess({ targetAssets: data })));
      })
    )
  );
}
