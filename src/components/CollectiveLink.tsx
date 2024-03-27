import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

interface CollectiveLinkProps {
	link: string;
	name: string;
}

function CollectiveLink({ link, name }: CollectiveLinkProps): JSX.Element {
	return (
		<Link
			href={"https://stackoverflow.com" + link}
			target="_blank"
			rel="noreferrer"
			aria-label={`Visit ${name} collective`}
		>
			Visit {name} collective
			<LaunchIcon fontSize="small" />
		</Link>
	);
}

export default CollectiveLink;
