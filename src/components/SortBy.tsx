import { InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import { useConfigStore } from "../stores/configStore";
import { SortType } from "../types/Sort";

function SortBy(): JSX.Element {
	const config = useConfigStore();

	function handleChange(event: SelectChangeEvent) {
		config.update({
			...config.config,
			sort: event.target.value as SortType,
		});
	}

	return (
		<Stack>
			<InputLabel
				variant="standard"
				htmlFor="sort-by"
			>
				Sort by
			</InputLabel>
			<Select
				value={config.config.sort}
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
