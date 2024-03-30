import { Meta, StoryObj } from "@storybook/react";
import ItemCountField from "../components/ItemCountField";

const meta = {
	title: "Components/Menu/ItemCountField",
	component: ItemCountField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {},
} satisfies Meta<typeof ItemCountField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
