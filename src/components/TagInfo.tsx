import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
	Card,
	CardActions,
	CardContent,
	Collapse,
	Divider,
	Link,
	Stack,
	Typography,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { useEffect, useState } from "react";
import { TagInfo as Info } from "../types/TagInfo";
import TagInfoBlock from "./TagInfoBlock";

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
			sx={{ maxWidth: 360, minWidth: 360 }}
		>
			<CardContent>
				<CardActions
					onClick={handleExpandClick}
					sx={{ cursor: "pointer" }}
					aria-expanded={isExpanded}
					aria-label={isExpanded ? "show less" : "show more"}
				>
					<Stack
						direction="row"
						justifyItems="center"
						justifyContent="space-between"
						alignContent="center"
						sx={{ width: "100%" }}
					>
						<Typography
							variant="h5"
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
					<Stack spacing={2}>
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
										<Link
											key={collective.slug}
											href={"https://stackoverflow.com" + collective.link}
											target="_blank"
											rel="noreferrer"
											aria-label={`Visit ${collective.name} collective`}
										>
											Visit {collective.name} collective
											<LaunchIcon fontSize="small" />
										</Link>
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
