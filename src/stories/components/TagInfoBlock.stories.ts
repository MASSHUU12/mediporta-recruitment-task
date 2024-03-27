import { Meta, StoryObj } from "@storybook/react";
import TagInfoBlock from "../../components/TagInfoBlock";

const meta = {
	title: "Components/TagInfoBlock",
	component: TagInfoBlock,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { prefix: "Count", text: 42 },
} satisfies Meta<typeof TagInfoBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
