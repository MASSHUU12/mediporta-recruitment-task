import { IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useConfigStore } from "../stores/configStore";

function PageNavigation(): JSX.Element {
	const state = useConfigStore();

	function handlePrevious() {
		state.update({
			...state,
			config: {
				...state.config,
				page: state.config.page - 1,
			},
		});
	}

	function handleNext() {
		state.update({
			...state,
			config: {
				...state.config,
				page: state.config.page + 1,
			},
		});
	}

	return (
		<Stack
			direction="row"
			alignItems="center"
		>
			<IconButton
				disabled={state.config.page <= 1}
				aria-label="previous page"
				onClick={handlePrevious}
			>
				<ArrowBackIosNewRoundedIcon />
			</IconButton>
			<Typography
				variant="body2"
				color="text.secondary"
				sx={{ userSelect: "none" }}
			>
				{state.config.page}
			</Typography>
			<IconButton
				disabled={state.config.page >= state.config.totalPages}
				aria-label="next page"
				onClick={handleNext}
			>
				<ArrowForwardIosRoundedIcon />
			</IconButton>
		</Stack>
	);
}

export default PageNavigation;
