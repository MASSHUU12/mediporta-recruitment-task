import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

interface SubmitProps {
	disabled?: boolean;
	onClick?: () => unknown;
}

function Submit({ disabled, onClick }: SubmitProps): JSX.Element {
	const [isDisabled, setIsDisabled] = useState(disabled ?? false);

	useEffect(() => {
		setIsDisabled(disabled ?? false);
	}, [disabled]);

	return (
		<Button
			startIcon={<SearchIcon />}
			variant="contained"
			disabled={isDisabled}
			onClick={onClick}
		>
			Search
		</Button>
	);
}

export default Submit;
