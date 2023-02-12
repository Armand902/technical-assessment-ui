import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TargetAssetComponent } from "./target-asset.component";
import { MaterialModule } from "../shared/material/material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [TargetAssetComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
})
export class TargetAssetModule {}
