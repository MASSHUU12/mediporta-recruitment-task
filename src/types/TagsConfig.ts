import { SortOrder, SortType } from "./Sort";

export interface TagsConfig {
	page: number;
	pageSize: number;
	order: SortOrder;
	sort: SortType;
	hasMore: boolean;
}
