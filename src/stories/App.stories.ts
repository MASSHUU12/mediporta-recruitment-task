import { Meta, StoryObj } from "@storybook/react";
import App from "../App";

const meta = {
	title: "Pages/App",
	component: App,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	args: {},
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
