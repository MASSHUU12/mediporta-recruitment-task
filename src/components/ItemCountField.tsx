import { ChangeEvent } from "react";
import { useConfigStore } from "../stores/configStore";
import NumericField from "./NumericField";

function ItemCountField(): JSX.Element {
	const config = useConfigStore();

	function handleOnChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
		config.update({
			...config.config,
			pageSize: parseInt(event.target.value),
		});
	}

	return (
		<NumericField
			min={1}
			max={100}
			initialValue={config.config.pageSize}
			label="Items per page"
			onChange={handleOnChange}
		/>
	);
}

export default ItemCountField;
