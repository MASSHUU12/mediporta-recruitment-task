export interface ExternalLink {
	type: string;
	link: string;
}

export interface Collective {
	tags: string[];
	external_links: ExternalLink[];
	description: string;
	link: string;
	name: string;
	slug: string;
}

export interface TagInfo {
	collectives?: Collective[];
	has_synonyms: boolean;
	is_moderator_only: boolean;
	is_required: boolean;
	count: number;
	name: string;
}

export interface TagInfoResponse {
	items: TagInfo[];
	has_more: boolean;
	quota_max: number;
	quota_remaining: number;
}
