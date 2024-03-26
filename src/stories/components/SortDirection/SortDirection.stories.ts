import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SortDirection from "../../../components/SortDirection";

const meta = {
	title: "Buttons/SortDirection",
	component: SortDirection,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { onClick: fn() },
} satisfies Meta<typeof SortDirection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ascending: Story = {
	args: {
		order: "asc",
	},
};

export const Descending: Story = {
	args: {
		order: "desc",
	},
};
