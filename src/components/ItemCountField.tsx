import { TextField } from "@mui/material";
import isInRange from "../helpers/isInRange";
import { ChangeEvent, useState } from "react";

interface ItemCountFieldProps {
	min: number;
	max: number;
	defaultValue?: number;
}

function ItemCountField({ min, max, defaultValue }: ItemCountFieldProps): JSX.Element {
	const [value, setValue] = useState(defaultValue ?? min);
	const [error, setError] = useState("");

	function handleOnChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
		const parsed = parseInt(event.target.value);

		if (isNaN(parsed) || !isInRange(parsed, min, max)) {
			setError(`Please enter a number between ${min.toString()} and ${max.toString()}.`);
			setValue(min);
			return;
		}

		setError("");
		setValue(parsed);
	}

	return (
		<TextField
			variant="outlined"
			required
			defaultValue={defaultValue ?? min}
			type="number"
			error={error !== ""}
			helperText={error}
			label="Number of items"
			onChange={handleOnChange}
			value={value}
		/>
	);
}

export default ItemCountField;
