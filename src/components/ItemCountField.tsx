import { ChangeEvent } from "react";
import { useConfigStore } from "../stores/configStore";
import NumericField from "./NumericField";
import { useCacheStore } from "../stores/cacheStore";

function ItemCountField(): JSX.Element {
	const state = useConfigStore();
	const cache = useCacheStore();

	function handleOnChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
		state.resetPages({
			...state,
			config: {
				...state.config,
				pageSize: parseInt(event.target.value),
			},
		});
		cache.pagesInfo.clear();
	}

	return (
		<NumericField
			min={1}
			max={100}
			initialValue={state.config.pageSize}
			label="Items per page"
			onChange={handleOnChange}
		/>
	);
}

export default ItemCountField;
