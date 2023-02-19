import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { TargetAssetModel } from "src/app/target-asset/target-asset.dto";
import { invokeAPI } from "../store/dashboard.action";
import { selectDashboard, selectLoading } from "../store/dashboard.selector";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  //Added the app css to removed duplicate code.
  styleUrls: ["../../app.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store) {}

  isLoading$ = this.store.pipe(select(selectLoading));
  targetAssets$ = this.store.pipe(select(selectDashboard));

  searchTargetAssets$: TargetAssetModel[] = [];
  orignalTargetAssets: TargetAssetModel[] = [];

  showLoader: boolean | undefined;
  searchTerm: string = "";

  totalCPURunning$: number = 0;
  totalCPUDown$: number = 0;
  totalVMRunning$: number = 0;
  totalVMDown$: number = 0;

  ngOnInit(): void {
    this.store.dispatch(invokeAPI());
    this.isLoading$.subscribe((value) => (this.showLoader = value));
    this.targetAssets$.subscribe((value) => {
      if (value != null) {
        value.map((x) => {
          if (x != null) {
            this._calculateCPU(x.status, x.cpu);
            this._setTargetAssets(x);
          }
        });
      }
    });
    this.orignalTargetAssets = this.searchTargetAssets$;
  }

  calculateRam(ram: number) {
    return Math.round(ram * 0.000001);
  }

  modelChanged(search: string) {
    this.searchTargetAssets$ = this.searchTargetAssets$.filter(
      (x) =>
        x.name.toLowerCase().includes(search.toLowerCase()) ||
        x.status.toLowerCase().includes(search.toLowerCase())
    );
  }

  resetFilter() {
    this.searchTargetAssets$ = this.orignalTargetAssets;
  }

  //Moved to own function for better readability.
  _calculateCPU(status: string, cpuCount: number) {
    if (status == "Running") {
      this.totalCPURunning$ += cpuCount;
      this.totalVMRunning$++;
    } else {
      this.totalCPUDown$ += cpuCount;
      this.totalVMDown$++;
    }
  }

  //Moved to own function for better readability.
  _setTargetAssets(targetAsset: TargetAssetModel) {
    this.searchTargetAssets$.push(
      new TargetAssetModel(
        targetAsset.id,
        targetAsset.isStartable,
        targetAsset.location,
        targetAsset.owner,
        targetAsset.createdBy,
        targetAsset.name,
        targetAsset.status,
        targetAsset.tags,
        targetAsset.cpu,
        targetAsset.ram,
        targetAsset.createdAt,
        targetAsset.parentId
      )
    );
  }
}
