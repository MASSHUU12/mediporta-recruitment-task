import { Meta, StoryObj } from "@storybook/react";
import PageNavigation from "../components/PageNavigation";
import { fn } from "@storybook/test";
import { useConfigStore } from "../stores/configStore";

const meta = {
	title: "Components/PageNavigation",
	component: PageNavigation,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { onPrevious: fn(), onNext: fn() },
	decorators: [
		Story => (
			<div>
				<div>
					<button
						onClick={() => {
							const config = useConfigStore.getState();
							useConfigStore
								.getState()
								.update({ ...config.config, page: config.config.page - 1 });
						}}
					>
						-
					</button>
					<button
						onClick={() => {
							const config = useConfigStore.getState();
							useConfigStore.getState().update({
								...config.config,
								page: config.config.page + 1,
							});
						}}
					>
						+
					</button>
					<button
						onClick={() => {
							const config = useConfigStore.getState();
							useConfigStore.getState().update({
								...config.config,
								hasMore: !config.config.hasMore,
							});
						}}
					>
						Has more?
					</button>
				</div>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof PageNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
