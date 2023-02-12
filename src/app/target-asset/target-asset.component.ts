import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { selectDashboard } from "../dashboard/store/dashboard.selector";
import { ActivatedRoute } from "@angular/router";
import { TargetAssetModel } from "./target-asset.dto";

@Component({
  selector: "app-target-asset",
  templateUrl: "./target-asset.component.html",
  styleUrls: ["./target-asset.component.css"],
})
export class TargetAssetComponent implements OnInit {
  constructor(private store: Store, private route: ActivatedRoute) {}

  id: number = 0;
  targetAssets$ = this.store.pipe(select(selectDashboard));
  asset$?: TargetAssetModel;

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    this.targetAssets$.subscribe((value) => {
      if (value != null) {
        value.map((x) => {
          if (x != null && x.id == this.id) {
            this.asset$ = new TargetAssetModel(
              x.id,
              x.isStartable,
              x.location,
              x.owner,
              x.createdBy,
              x.name,
              x.status,
              x.tags,
              x.cpu,
              x.ram,
              x.createdAt,
              x.parentId
            );
          }
        });
      }
    });
  }
}
