import Button from "@mui/material/Button";
import { getTags } from "./classes/SO";
import { Box, Typography } from "@mui/material";
import TagList from "./components/TagList";
import { useState } from "react";
import { TagInfoResponse } from "./types/TagInfo";

function App() {
	const [tags, setTags] = useState<TagInfoResponse | undefined>();
	const [loading, setLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	async function loadTags() {
		setLoading(true);

		await getTags({ page: 1, order: "desc", sort: "popular" })
			.then(response => {
				if (!response.successful) {
					setIsError(true);
					return;
				}

				setTags(response.value);
				setIsError(false);
			})
			.catch(() => {
				setIsError(true);
			});

		setLoading(false);
	}

	return (
		<main>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				minHeight="100svh"
			>
				<Button
					variant="contained"
					onClick={() => void loadTags()}
				>
					Sphinx of black quartz, judge my vow.
				</Button>
				{tags === undefined && !loading && !isError && (
					<Typography
						variant="body2"
						color="text.secondary"
					>
						Here the tags will appear when they are downloaded.
					</Typography>
				)}
				{isError && (
					<Typography
						variant="body2"
						color="text.error"
					>
						There was a problem when loading the tags, make sure you have a network
						connection and try again.
					</Typography>
				)}
				{(loading || tags !== undefined) && (
					<TagList
						isLoading={loading}
						data={tags}
					/>
				)}
			</Box>
		</main>
	);
}

export default App;
