import { Stack } from "@mui/material";
import { SortOrder } from "../types/Sort";
import SortDirection from "./SortDirection";
import Submit from "./Submit";
import ItemCountField from "./ItemCountField";
import SortBy from "./SortBy";
import PageNavigation from "./PageNavigation";

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
			<ItemCountField />
			<SortDirection onClick={props.onDirectionChange} />
			<Stack
				direction="row"
				display="flex"
				flexWrap="wrap"
			>
				<PageNavigation />
				<Submit
					disabled={props.submitDisabled}
					onClick={props.onSubmit}
				/>
			</Stack>
		</Stack>
	);
}

export default Menu;
