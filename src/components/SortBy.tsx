import { InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import { useConfigStore } from "../stores/configStore";
import { SortType } from "../types/Sort";
import { useCacheStore } from "../stores/cacheStore";

function SortBy(): JSX.Element {
	const state = useConfigStore();
	const cache = useCacheStore();

	function handleChange(event: SelectChangeEvent) {
		state.resetPages({
			...state,
			config: {
				...state.config,
				sort: event.target.value as SortType,
			},
		});
		cache.pagesInfo.clear();
	}

	return (
		<Stack>
			<InputLabel
				variant="filled"
				htmlFor="sort-by"
				shrink
			>
				Sort by
			</InputLabel>
			<Select
				value={state.config.sort}
				onChange={handleChange}
				id="sort-by"
				size="small"
			>
				<MenuItem value="popular">Popular</MenuItem>
				<MenuItem value="activity">Activity</MenuItem>
				<MenuItem value="name">Name</MenuItem>
			</Select>
		</Stack>
	);
}

export default SortBy;
