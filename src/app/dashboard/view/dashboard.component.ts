import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { TargetAssetModel } from "src/app/target-asset/target-asset.dto";
import { invokeAPI } from "../store/dashboard.action";
import { selectDashboard } from "../store/dashboard.selector";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store) {}

  searchTerm: string = "";
  targetAssets$ = this.store.pipe(select(selectDashboard));
  searchTargetAssets$: TargetAssetModel[] = [];
  orignalTargetAssets: TargetAssetModel[] = [];
  totalCPURunning$: number = 0;
  totalCPUDown$: number = 0;
  totalVMRunning$: number = 0;
  totalVMDown$: number = 0;

  calculateRam(ram: number) {
    return Math.round(ram * 0.000001);
  }

  ngOnInit(): void {
    this.store.dispatch(invokeAPI());
    this.targetAssets$.subscribe((value) => {
      if (value != null) {
        value.map((x) => {
          if (x != null) {
            if (x.status == "Running") {
              this.totalCPURunning$ += x.cpu;
              this.totalVMRunning$++;
            } else {
              this.totalCPUDown$ += x.cpu;
              this.totalVMDown$++;
            }

            this.searchTargetAssets$.push(
              new TargetAssetModel(
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
              )
            );
          }
        });
      }
    });
    this.orignalTargetAssets = this.searchTargetAssets$;
  }

  modelChanged(search: string) {
    this.searchTerm = "";
    this.searchTargetAssets$ = this.searchTargetAssets$.filter(
      (x) =>
        x.name.toLowerCase().includes(search.toLowerCase()) ||
        x.status.toLowerCase().includes(search.toLowerCase())
    );
  }

  resetFilter() {
    this.searchTargetAssets$ = this.orignalTargetAssets;
  }
}
