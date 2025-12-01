import {
	fetchRepo
} from "../api/github.js";
export default async function analyzeRepo(repo) {
	const data = await fetchRepo(repo);
	return {
		name: data.name,
		description: data.description,
		stars: data.stargazers_count,
		forks: data.forks
	};
}