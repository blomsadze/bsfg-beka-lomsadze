import { IPagination, IRequestFilter } from "./RequestTypes";

export interface IGameResponse {
  data: IGame[];
  filters_applied: IRequestFilter;
  pagination: IPagination;
}

export interface IGame {
  categories: string[];
  demo: number;
  id: number;
  identifier: string;
  image: string;
  name: string;
  provider: string;
  type: number;
}
