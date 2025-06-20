export interface IPagination {
  current_page: number;
  has_next_page: boolean;
  has_prev_page: boolean;
  next_page: number | null;
  per_page: number;
  prev_page: number | null;
  total_items: number;
  total_pages: number;
}

export interface IRequestFilter {
  categories: string[];
  providers: string[];
  search: string;
}
