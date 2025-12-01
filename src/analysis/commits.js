import {
	fetchCommits
} from "../api/github.js";
export default async function analyzeCommits(repo) {
	const data = await fetchCommits(repo);
	return {
		total: data.length
	};
}