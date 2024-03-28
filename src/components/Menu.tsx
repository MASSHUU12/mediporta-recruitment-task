import { Stack } from "@mui/material";
import { SortOrder } from "../types/Sort";
import SortDirection from "./SortDirection";
import Submit from "./Submit";
import ItemCountField from "./ItemCountField";
import SortBy from "./SortBy";

interface MenuProps {
	submitDisabled: boolean;
	onDirectionChange: (direction: SortOrder) => unknown;
	onSubmit: () => unknown;
}

function Menu(props: MenuProps): JSX.Element {
	return (
		<Stack
			spacing={2}
			direction={{ xs: "column", sm: "row" }}
			alignItems={{ xs: "start", sm: "end" }}
			justifyContent="center"
			width="100%"
		>
			<SortBy />
			<ItemCountField
				min={1}
				max={100}
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
