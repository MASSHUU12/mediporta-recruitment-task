import { getTags } from "./classes/SO";
import { Box, Stack, Typography } from "@mui/material";
import TagList from "./components/TagList";
import { useState } from "react";
import { TagInfoResponse } from "./types/TagInfo";
import Menu from "./components/Menu";
import { useConfigStore } from "./stores/configStore";

function App() {
	const config = useConfigStore();
	const [tags, setTags] = useState<TagInfoResponse | undefined>();
	const [loading, setLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	async function loadTags() {
		setLoading(true);

		await getTags(config.config)
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

	function changeOrder() {
		if (tags === undefined) return;

		setTags({
			...tags,
			items: tags.items.reverse(),
		});
	}

	return (
		<Box
			component="main"
			display="flex"
			justifyContent="center"
			alignItems="center"
			minHeight="100svh"
		>
			<Stack
				alignItems="center"
				justifyContent="center"
				sx={{ width: "90svw" }}
				spacing={2}
				marginY={5}
			>
				<Menu
					submitDisabled={loading}
					onDirectionChange={changeOrder}
					onSubmit={() => void loadTags()}
				/>
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
			</Stack>
		</Box>
	);
}

export default App;
