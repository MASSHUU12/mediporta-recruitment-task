import type { Meta, StoryObj } from "@storybook/react";
import TagList from "../components/TagList";
import exampleResponse from "../json/tags_example_response.json";

const meta = {
	title: "Components/TagList",
	component: TagList,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { data: exampleResponse },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		dataLoading: false,
	},
};

export const Loading: Story = {
	args: {
		dataLoading: true,
	},
};
