import type { Meta, StoryObj } from "@storybook/react";
import TagList from "../../components/TagList";

const meta = {
	title: "Components/TagList",
	component: TagList,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {},
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		dataLoading: false,
		data: [],
	},
};

export const Loading: Story = {
	args: {
		dataLoading: true,
		data: [],
	},
};
