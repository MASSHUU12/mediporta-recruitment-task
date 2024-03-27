import { Meta, StoryObj } from "@storybook/react";
import CollectiveLink from "../../components/CollectiveLink";

const meta = {
	title: "Components/CollectiveLink",
	component: CollectiveLink,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { link: "/collectives/php", name: "PHP" },
} satisfies Meta<typeof CollectiveLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
