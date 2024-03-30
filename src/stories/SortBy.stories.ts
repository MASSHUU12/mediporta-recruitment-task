import { Meta, StoryObj } from "@storybook/react";
import SortBy from "../components/SortBy";

const meta = {
	title: "Components/Menu/SortBy",
	component: SortBy,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {},
} satisfies Meta<typeof SortBy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
