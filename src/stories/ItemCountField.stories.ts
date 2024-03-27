import { Meta, StoryObj } from "@storybook/react";
import ItemCountField from "../components/ItemCountField";

const meta = {
	title: "Components/ItemCountField",
	component: ItemCountField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { min: 1, max: 100, defaultValue: 1 },
} satisfies Meta<typeof ItemCountField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
