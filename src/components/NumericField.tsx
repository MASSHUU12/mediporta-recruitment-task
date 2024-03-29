import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import isInRange from "../helpers/isInRange";

interface NumericFieldProps {
	min: number;
	max: number;
	initialValue: number;
	label: string;
	onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function NumericField(props: NumericFieldProps): JSX.Element {
	const [value, setValue] = useState<string>(props.initialValue.toString());
	const [lastValidValue, setLastValidValue] = useState<string>(props.initialValue.toString());
	const [error, setError] = useState("");

	function handleOnChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
		setValue(event.target.value);

		if (!validateValue(event.target.value)) return;

		props.onChange(event);
		return;
	}

	function handleBlur(): void {
		if (validateValue(value)) {
			setLastValidValue(value);
			return;
		}

		setValue(lastValidValue);
		setError("");
	}

	function validateValue(value: string): boolean {
		const parsed = parseFloat(value);

		// if (isNaN(parsed) || (parsed | 0) !== parsed) {
		// 	setError("The input should be a number.");
		// 	return false;
		// }

		if (value.match(/^\d+$/) === null) {
			setError("The input should be a number.");
			return false;
		}

		if (!isInRange(parsed, props.min, props.max)) {
			setError(
				`A number should be between ${props.min.toString()} and ${props.max.toString()}.`,
			);

			return false;
		}

		setError("");

		return true;
	}

	return (
		<TextField
			variant="outlined"
			type="text"
			error={error !== ""}
			helperText={error}
			label={props.label}
			value={value}
			size="small"
			onChange={handleOnChange}
			onBlur={handleBlur}
		/>
	);
}

export default NumericField;
