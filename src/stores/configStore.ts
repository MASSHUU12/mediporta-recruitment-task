import { create } from "zustand";
import { TagsConfig } from "../types/TagsConfig";
import { TagInfoResponse } from "../types/TagInfo";

interface ConfigState {
	config: TagsConfig;
	currentPageInfo: TagInfoResponse | undefined;
	update: (state: ConfigState) => void;
	resetPages: (state: ConfigState) => void;
}

export const useConfigStore = create<ConfigState>()(set => ({
	config: {
		page: 1,
		totalPages: 1,
		pageSize: 30,
		order: "desc",
		sort: "popular",
	},
	currentPageInfo: undefined,
	update: state => {
		set(() => state);
	},
	resetPages: state => {
		set({
			...state,
			config: {
				...state.config,
				page: 1,
				totalPages: 1,
			},
			currentPageInfo: undefined,
		});
	},
}));
