import { create } from "zustand";
import { TagsConfig } from "../types/TagsConfig";

interface ConfigState {
	config: TagsConfig;
	update: (config: TagsConfig) => void;
}

export const useConfigStore = create<ConfigState>()(set => ({
	config: {
		page: 1,
		pageSize: 30,
		order: "desc",
		sort: "popular",
		hasMore: false,
	},
	update: config => {
		set({ config });
	},
}));
