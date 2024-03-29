import { create } from "zustand";
import LRU from "../classes/LRU";
import { TagInfo } from "../types/TagInfo";

interface CacheState {
	pages: LRU<TagInfo[]>;
	update: (state: CacheState) => void;
}

export const useCacheStore = create<CacheState>()(set => ({
	pages: new LRU<TagInfo[]>(10),
	update: state => {
		set({ ...state });
	},
}));
