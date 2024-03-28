import { Meta, StoryObj } from "@storybook/react";
import NumericField from "../components/NumericField";
import { fn } from "@storybook/test";

const meta = {
	title: "Components/NumericField",
	component: NumericField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { min: 0, max: 100, initialValue: 50, label: "Number of items", onChange: fn() },
} satisfies Meta<typeof NumericField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
