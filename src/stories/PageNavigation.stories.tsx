import { Meta, StoryObj } from "@storybook/react";
import PageNavigation from "../components/PageNavigation";
import { useConfigStore } from "../stores/configStore";

const meta = {
	title: "Components/Menu/PageNavigation",
	component: PageNavigation,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {},
	decorators: [
		Story => (
			<div>
				<div>
					{/*
						It works funky, but yeah.
						Just remount the component when you make changes
					*/}
					<input
						type="number"
						placeholder="Page"
						value={useConfigStore.getState().config.page}
						onChange={event => {
							const state = useConfigStore.getState();
							useConfigStore.getState().update({
								...state,
								config: {
									...state.config,
									page: Number(event.target.value),
								},
							});

							event.target.value = useConfigStore.getState().config
								.page as unknown as string;
						}}
					/>
					<input
						type="number"
						placeholder="Total pages"
						value={useConfigStore.getState().config.totalPages}
						onChange={event => {
							const state = useConfigStore.getState();
							useConfigStore.getState().update({
								...state,
								config: {
									...state.config,
									totalPages: Number(event.target.value),
								},
							});
						}}
					/>
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
