import Button from "@mui/material/Button";
import { getTags } from "./classes/SO";

function App() {
	function printTags() {
		console.log(getTags({ page: 1, order: "desc", sort: "popular" }));
	}

	return (
		<div>
			<p>The quick brown fox jumps over the lazy dog.</p>
			<Button
				variant="contained"
				onClick={printTags}
			>
				Sphinx of black quartz, judge my vow.
			</Button>
		</div>
	);
}

export default App;
