import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Submit from "../components/Submit";

const meta = {
	title: "Components/Menu/Submit",
	component: Submit,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { disabled: false, onClick: fn() },
} satisfies Meta<typeof Submit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
