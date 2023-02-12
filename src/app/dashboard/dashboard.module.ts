import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./view/dashboard.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { dashboardReducer } from "./store/dashboard.reducer";
import { DashboardEffect } from "./store/dashboard.effect";
import { MaterialModule } from "../shared/material/material.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    StoreModule.forFeature("targetAssets", dashboardReducer),
    EffectsModule.forFeature([DashboardEffect]),
    MaterialModule,
  ],
})
export class DashboardModule {}
