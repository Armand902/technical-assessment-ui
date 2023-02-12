import { TargetAsset } from "../dashboard/store/target-asset";

export class TargetAssetModel implements TargetAsset {
  public id: number;
  public isStartable: boolean;
  public location: string;
  public owner: string;
  public createdBy: string;
  public name: string;
  public status: string;
  public tags: string[];
  public cpu: number;
  public ram: number;
  public createdAt: Date;
  public parentId: number;

  constructor(
    id: number,
    isStartable: boolean,
    location: string,
    owner: string,
    createdBy: string,
    name: string,
    status: string,
    tags: string[],
    cpu: number,
    ram: number,
    createdAt: Date,
    parentId: number
  ) {
    this.id = id;
    this.isStartable = isStartable;
    this.location = location;
    this.owner = owner;
    this.createdBy = createdBy;
    this.name = name;
    this.status = status;
    this.tags = tags;
    this.cpu = cpu;
    this.ram = ram;
    this.createdAt = createdAt;
    this.parentId = parentId;
  }
}
