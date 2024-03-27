import { TextField } from "@mui/material";
import isInRange from "../helpers/isInRange";
import { ChangeEvent, useState } from "react";
import { useConfigStore } from "../stores/configStore";

interface ItemCountFieldProps {
	min: number;
	max: number;
}

function ItemCountField({ min, max }: ItemCountFieldProps): JSX.Element {
	const config = useConfigStore();
	const [error, setError] = useState("");

	function handleOnChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
		const parsed = parseInt(event.target.value);

		if (isNaN(parsed) || !isInRange(parsed, min, max)) {
			setError(`A number should be between ${min.toString()} and ${max.toString()}.`);
			config.update({
				...config.config,
				pageSize: parsed,
			});
			return;
		}

		config.update({
			...config.config,
			pageSize: parsed,
		});
		setError("");
	}

	return (
		<TextField
			variant="outlined"
			type="number"
			error={error !== ""}
			helperText={error}
			label="Number of items"
			onChange={handleOnChange}
			value={config.config.pageSize}
		/>
	);
}

export default ItemCountField;
