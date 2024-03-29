import { IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useConfigStore } from "../stores/configStore";
import { useCacheStore } from "../stores/cacheStore";

function PageNavigation(): JSX.Element {
	const state = useConfigStore();
	const cache = useCacheStore();

	function handlePrevious() {
		const previousPage = cache.pagesInfo.get((state.config.page - 1).toString());

		state.update({
			...state,
			config: {
				...state.config,
				page: state.config.page - 1,
			},
			currentPageInfo: previousPage ?? undefined,
		});
	}

	function handleNext() {
		const nextPage = cache.pagesInfo.get((state.config.page + 1).toString());

		state.update({
			...state,
			config: {
				...state.config,
				page: state.config.page + 1,
			},
			currentPageInfo: nextPage ?? undefined,
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
				{state.config.page}/{state.config.totalPages}
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
