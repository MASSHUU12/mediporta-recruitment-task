import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
	Card,
	CardActions,
	CardContent,
	Collapse,
	Divider,
	Stack,
	Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { TagInfo as Info } from "../types/TagInfo";
import TagInfoBlock from "./TagInfoBlock";
import CollectiveLink from "./CollectiveLink";

interface TagInfoProps {
	info: Info;
	expanded?: boolean;
}

function TagInfo({ info, expanded }: TagInfoProps): JSX.Element {
	const [isExpanded, setExpanded] = useState(expanded ?? false);

	const handleExpandClick = () => {
		setExpanded(!isExpanded);
	};

	useEffect(() => {
		setExpanded(expanded ?? false);
	}, [expanded]);

	return (
		<Card
			variant="outlined"
			sx={{ width: "100%", maxWidth: "48rem" }}
		>
			<CardContent>
				<CardActions
					onClick={handleExpandClick}
					sx={{ cursor: "pointer", userSelect: "none" }}
					aria-expanded={isExpanded}
					aria-label={isExpanded ? "show less" : "show more"}
				>
					<Stack
						direction="row"
						justifyContent="space-between"
						sx={{ width: "100%" }}
					>
						<Typography
							variant="body1"
							component="h3"
						>
							{info.name}
						</Typography>
						{isExpanded ? <ExpandLess /> : <ExpandMore />}
					</Stack>
				</CardActions>
				<Collapse
					in={isExpanded}
					timeout="auto"
					unmountOnExit
				>
					<Stack spacing={1}>
						<Divider />
						<TagInfoBlock
							prefix="Count"
							text={info.count}
						/>
						<TagInfoBlock
							prefix="Required"
							text={info.is_required ? "Yes" : "No"}
						/>
						<TagInfoBlock
							prefix="Moderator Only"
							text={info.is_moderator_only ? "Yes" : "No"}
						/>
						<TagInfoBlock
							prefix="Has Synonyms"
							text={info.has_synonyms ? "Yes" : "No"}
						/>
						{info.collectives && (
							<>
								<Divider />
								{info.collectives.map(collective => {
									return (
										<CollectiveLink
											key={collective.slug}
											link={collective.link}
											name={collective.name}
										/>
									);
								})}
							</>
						)}
					</Stack>
				</Collapse>
			</CardContent>
		</Card>
	);
}

export default TagInfo;
