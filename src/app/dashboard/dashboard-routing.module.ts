import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TargetAssetComponent } from "../target-asset/target-asset.component";
import { DashboardComponent } from "./view/dashboard.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  {
    path: "assets",
    component: TargetAssetComponent,
    loadChildren: () =>
      import("../target-asset/target-asset.module").then(
        (module) => module.TargetAssetModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
