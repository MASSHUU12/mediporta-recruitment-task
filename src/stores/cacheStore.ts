import { create } from "zustand";
import LRU from "../classes/LRU";
import { TagInfoResponse } from "../types/TagInfo";

interface CacheState {
	pagesInfo: LRU<TagInfoResponse>;
	update: (state: CacheState) => void;
}

export const useCacheStore = create<CacheState>()(set => ({
	pagesInfo: new LRU<TagInfoResponse>(10),
	update: state => {
		set({ ...state });
	},
}));
