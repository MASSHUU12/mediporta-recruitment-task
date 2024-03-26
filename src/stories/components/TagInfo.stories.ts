import type { Meta, StoryObj } from "@storybook/react";
import TagInfo from "../../components/TagInfo";

const meta = {
	title: "Components/TagInfo",
	component: TagInfo,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {},
} satisfies Meta<typeof TagInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: "C#",
		count: 1614806,
		isRequired: false,
		isModeratorOnly: false,
		hasSynonyms: true,
	},
};

export const Open: Story = {
	args: {
		name: "C#",
		count: 1614806,
		isRequired: false,
		isModeratorOnly: false,
		hasSynonyms: true,
		expanded: true,
	},
};
