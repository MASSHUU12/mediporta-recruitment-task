import type { Meta, StoryObj } from "@storybook/react";
import TagInfo from "../components/TagInfo";

const meta = {
	title: "Components/TagInfo/TagInfo",
	component: TagInfo,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		info: {
			name: "C#",
			count: 1614806,
			is_required: false,
			is_moderator_only: false,
			has_synonyms: true,
		},
	},
} satisfies Meta<typeof TagInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Open: Story = {
	args: {},
};

const collective = {
	tags: ["php"],
	external_links: [
		{
			type: "support",
			link: "https://stackoverflow.com/contact?topic=15",
		},
	],
	description:
		"A collective where developers working with PHP can learn and connect about the open source scripting language.",
	link: "/collectives/php",
	name: "PHP",
	slug: "php",
};

export const WithCollectives: Story = {
	args: {
		expanded: true,
		info: {
			collectives: [collective, collective],
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 1464284,
			name: "php",
		},
	},
};
