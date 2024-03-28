import { Skeleton, Stack } from "@mui/material";
import { TagInfoResponse } from "../types/TagInfo";
import TagInfo from "./TagInfo";

interface TagListProps {
	isLoading: boolean;
	data: TagInfoResponse | undefined;
}

function TagList({ isLoading: dataLoading, data }: TagListProps): JSX.Element {
	function generateSkeletons(count: number): JSX.Element[] {
		const skeletons = [];

		for (let i = 0; i < count; i++) {
			skeletons.push(
				<Skeleton
					key={i}
					variant="rounded"
					width="100%"
					height="4rem"
				/>,
			);
		}

		return skeletons;
	}

	return (
		<Stack
			spacing={2}
			width="100%"
			sx={{ maxWidth: "48rem" }}
		>
			{dataLoading && generateSkeletons(3)}
			{data !== undefined &&
				data.items.length !== 0 &&
				!dataLoading &&
				data.items.map(item => {
					return (
						<TagInfo
							key={item.name}
							info={item}
						/>
					);
				})}
		</Stack>
	);
}

export default TagList;
