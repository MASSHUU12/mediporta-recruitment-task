import { IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useConfigStore } from "../stores/configStore";

interface PageNavigationProps {
	onPrevious: () => void;
	onNext: () => void;
}

function PageNavigation({ onPrevious, onNext }: PageNavigationProps): JSX.Element {
	const config = useConfigStore();

	function handlePrevious() {
		config.update({ ...config.config, page: config.config.page - 1 });
		onPrevious();
	}

	function handleNext() {
		config.update({ ...config.config, page: config.config.page + 1 });
		onNext();
	}

	return (
		<Stack
			direction="row"
			alignItems="center"
		>
			<IconButton
				disabled={config.config.page <= 1}
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
				{config.config.page}
			</Typography>
			<IconButton
				disabled={!config.config.hasMore}
				aria-label="next page"
				onClick={handleNext}
			>
				<ArrowForwardIosRoundedIcon />
			</IconButton>
		</Stack>
	);
}

export default PageNavigation;
