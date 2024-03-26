import axios, { AxiosInstance, AxiosResponse } from "axios";
import { TagsConfig } from "../types/TagsConfig";
import { IOptional } from "../types/Optional";
import exampleResponse from "../json/tags_example_response.json";

export const SO: AxiosInstance = axios.create({
	baseURL: "https://api.stackexchange.com/2.3",
	timeout: 1000,
});

export async function getTags(config: TagsConfig): Promise<IOptional<unknown>> {
	if (import.meta.env.VITE_USE_API === "false") {
		return {
			successful: true,
			value: exampleResponse,
		};
	}

	const { page, order, sort } = config;
	const url = `/tags?page=${page.toString()}&order=${order}&sort=${sort}&site=stackoverflow`;

	return await SO.get(url)
		.then((value: AxiosResponse<unknown, unknown>) => {
			return { successful: true, value: value.data };
		})
		.catch((error: unknown) => {
			return { successful: false, value: error };
		});
}
