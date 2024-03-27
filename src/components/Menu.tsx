import { Stack } from "@mui/material";
import { SortOrder } from "../types/Sort";
import SortDirection from "./SortDirection";
import Submit from "./Submit";
import ItemCountField from "./ItemCountField";

interface MenuProps {
	submitDisabled: boolean;
	onDirectionChange: (direction: SortOrder) => unknown;
	onSubmit: () => unknown;
}

function Menu(props: MenuProps): JSX.Element {
	return (
		<Stack
			spacing={2}
			direction="row"
			alignItems="center"
		>
			<ItemCountField
				min={0}
				max={100}
				defaultValue={30}
			/>
			<SortDirection onClick={props.onDirectionChange} />
			<Submit
				disabled={props.submitDisabled}
				onClick={props.onSubmit}
			/>
		</Stack>
	);
}

export default Menu;
