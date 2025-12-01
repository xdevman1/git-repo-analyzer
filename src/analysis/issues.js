import {
	fetchIssues
} from "../api/github.js";
export default async function analyzeIssues(repo) {
	const data = await fetchIssues(repo);
	const open = data.filter(i => i.state === "open").length;
	const closed = data.filter(i => i.state === "closed").length;
	return {
		open,
		closed
	};
}