import { Meta, StoryObj } from "@storybook/react";
import Menu from "../components/Menu";
import { fn } from "@storybook/test";

const meta = {
	title: "Components/Menu/Menu",
	component: Menu,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { onDirectionChange: fn(), onSubmit: fn(), submitDisabled: false },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const SubmitDisabled: Story = {
	args: { submitDisabled: true },
};
