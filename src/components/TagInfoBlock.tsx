import { Typography } from "@mui/material";

interface TagInfoBlockProps {
	prefix: string;
	text: string | number;
}

function TagInfoBlock({ prefix, text }: TagInfoBlockProps): JSX.Element {
	return (
		<>
			<Typography
				variant="body2"
				color="text.secondary"
			>
				{prefix}: {text}
			</Typography>
		</>
	);
}

export default TagInfoBlock;
