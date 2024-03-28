import SwapVertIcon from "@mui/icons-material/SwapVert";
import { Button } from "@mui/material";
import { SortOrder } from "../types/Sort";
import { useEffect, useState } from "react";

interface SortDirectionProps {
	order?: SortOrder;
	onClick?: (direction: SortOrder) => unknown;
}

function SortDirection(props: SortDirectionProps): JSX.Element {
	const [displayedOrder, setDisplayedOrder] = useState<SortOrder>(props.order ?? "desc");

	useEffect(() => {
		setDisplayedOrder(props.order ?? "desc");
	}, [props.order]);

	return (
		<Button
			sx={{ textTransform: "capitalize" }}
			component="label"
			variant="text"
			size="large"
			startIcon={<SwapVertIcon />}
			onClick={() => {
				if (props.onClick) props.onClick(displayedOrder);

				setDisplayedOrder(displayedOrder === "asc" ? "desc" : "asc");
			}}
		>
			{displayedOrder}
		</Button>
	);
}

export default SortDirection;
