import { create } from "zustand";
import { TagsConfig } from "../types/TagsConfig";
import { TagInfo } from "../types/TagInfo";

interface ConfigState {
	config: TagsConfig;
	currentTags: TagInfo[];
	update: (config: ConfigState) => void;
}

export const useConfigStore = create<ConfigState>()(set => ({
	config: {
		page: 1,
		totalPages: 1,
		pageSize: 30,
		order: "desc",
		sort: "popular",
	},
	currentTags: [],
	update: state => {
		set(state);
	},
}));
