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
import { useEffect, useState } from "react";
import { TagInfo as Info } from "../types/TagInfo";

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
						<Typography
							variant="body2"
							color="text.secondary"
						>
							Count: {info.count}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
						>
							Required: {info.is_required ? "Yes" : "No"}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
						>
							Moderator Only: {info.is_moderator_only ? "Yes" : "No"}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
						>
							Has synonyms: {info.has_synonyms ? "Yes" : "No"}
						</Typography>
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
