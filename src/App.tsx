import { getTags } from "./classes/SO";
import { Box, Stack, Typography } from "@mui/material";
import TagList from "./components/TagList";
import { useState } from "react";
import Menu from "./components/Menu";
import { useConfigStore } from "./stores/configStore";
import { useCacheStore } from "./stores/cacheStore";

function App() {
	const state = useConfigStore();
	const cache = useCacheStore();
	const [loading, setLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	async function loadTags() {
		setLoading(true);

		if (cache.pagesInfo.get(state.config.page.toString()) === undefined)
			await getTags(state.config)
				.then(response => {
					let newState = state;

					if (!response.successful) {
						setIsError(true);
						return;
					}

					if (response.value?.has_more && state.config.page === state.config.totalPages) {
						newState = {
							...state,
							config: {
								...state.config,
								totalPages: state.config.page + 1,
							},
						};
					}

					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					const value = response.value!;
					cache.pagesInfo.set(newState.config.page.toString(), value);
					state.update({
						...newState,
						currentPageInfo: response.value ?? undefined,
					});

					setIsError(false);
				})
				.catch(() => {
					setIsError(true);
				});

		setLoading(false);
	}

	function changeOrder() {
		if (state.currentPageInfo === undefined) return;

		state.update({
			...state,
			currentPageInfo: {
				...state.currentPageInfo,
				items: state.currentPageInfo.items.reverse(),
			},
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
					onSubmit={() => {
						void loadTags();
					}}
				/>
				{state.currentPageInfo === undefined && !loading && !isError && (
					<Typography
						variant="body2"
						color="text.secondary"
					>
						Here the tags will appear when they are downloaded.
					</Typography>
				)}
				{state.currentPageInfo === undefined && isError && (
					<Typography
						variant="body2"
						color="text.error"
					>
						There was a problem when loading the tags, make sure you have a network
						connection and try again.
					</Typography>
				)}
				{(loading || state.currentPageInfo !== undefined) && (
					<TagList
						isLoading={loading}
						data={state.currentPageInfo}
					/>
				)}
			</Stack>
		</Box>
	);
}

export default App;
