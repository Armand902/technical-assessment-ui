import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TargetAsset } from "./store/target-asset";
import { environment } from "../environments/environment";
import { ApiPaths } from "../enums/api-paths";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getTargetAssets() {
    return this.http.get<TargetAsset[]>(
      `${environment.baseUrl}${ApiPaths.TargetAsset}`
    );
  }
}
