import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./view/dashboard.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { _dashboardReducer, _loadingReducer } from "./store/dashboard.reducer";
import { DashboardEffect } from "./store/dashboard.effect";
import { MaterialModule } from "../shared/material/material.module";
import {
  DASHBOARD_STATE_NAME,
  LOADING_STATE_NAME,
} from "./store/dashboard.selector";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    StoreModule.forFeature(DASHBOARD_STATE_NAME, _dashboardReducer),
    StoreModule.forFeature(LOADING_STATE_NAME, _loadingReducer),
    EffectsModule.forFeature([DashboardEffect]),
    MaterialModule,
  ],
})
export class DashboardModule {}
