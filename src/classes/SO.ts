import axios, { AxiosInstance } from "axios";
import { TagsConfig } from "../types/TagsConfig";
import { IOptional } from "../types/Optional";
import exampleResponse from "../json/tags_example_response.json";
import { TagInfoResponse } from "../types/TagInfo";

export const SO: AxiosInstance = axios.create({
	baseURL: "https://api.stackexchange.com/2.3",
	timeout: 1000,
});

export async function getTags(config: TagsConfig): Promise<IOptional<TagInfoResponse>> {
	if (import.meta.env.VITE_USE_API === "false") {
		return {
			successful: true,
			value: exampleResponse,
		};
	}

	const { page, pageSize, order, sort } = config;
	const url = `/tags?page=${page.toString()}&pagesize=${pageSize.toString()}&order=${order}&sort=${sort}&site=stackoverflow`;

	return await SO.get<TagInfoResponse>(url)
		.then(value => {
			return { successful: true, value: value.data };
		})
		.catch(() => {
			return { successful: false, value: undefined };
		});
}
