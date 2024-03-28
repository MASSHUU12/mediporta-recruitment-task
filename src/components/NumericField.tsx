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
	const [value, setValue] = useState(props.initialValue);
	const [error, setError] = useState("");

	function handleOnChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
		const parsed = parseInt(event.target.value);

		if (isNaN(parsed) || !isInRange(parsed, props.min, props.max)) {
			setError(
				`A number should be between ${props.min.toString()} and ${props.max.toString()}.`,
			);

			setValue(parsed);
			return;
		}

		setValue(parsed);
		setError("");
		props.onChange(event);
	}

	return (
		<TextField
			variant="outlined"
			type="number"
			error={error !== ""}
			helperText={error}
			label={props.label}
			value={value}
			size="small"
			onChange={handleOnChange}
		/>
	);
}

export default NumericField;
