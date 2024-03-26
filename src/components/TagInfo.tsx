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

interface TagInfoProps {
	name: string;
	count: number;
	isRequired: boolean;
	isModeratorOnly: boolean;
	hasSynonyms: boolean;
	expanded?: boolean;
}

function TagInfo({
	name,
	count,
	isRequired,
	isModeratorOnly,
	hasSynonyms,
	expanded,
}: TagInfoProps): JSX.Element {
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
							{name}
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
							Count: {count}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
						>
							Required: {isRequired ? "Yes" : "No"}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
						>
							Moderator Only: {isModeratorOnly ? "Yes" : "No"}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
						>
							Has synonyms: {hasSynonyms ? "Yes" : "No"}
						</Typography>
					</Stack>
				</Collapse>
			</CardContent>
		</Card>
	);
}

export default TagInfo;
