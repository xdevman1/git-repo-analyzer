import {
	fetchLanguages
} from "../api/github.js";
export default async function analyzeLanguages(repo) {
	return await fetchLanguages(repo);
}