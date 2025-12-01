import analyzeRepo from "./analysis/repoInfo.js";
import analyzeLanguages from "./analysis/languages.js";
import analyzeCommits from "./analysis/commits.js";
import analyzeIssues from "./analysis/issues.js";

export default async function run(repo) {
	const info = await analyzeRepo(repo);
	const langs = await analyzeLanguages(repo);
	const commits = await analyzeCommits(repo);
	const issues = await analyzeIssues(repo);
	console.log(JSON.stringify({
		info,
		langs,
		commits,
		issues
	}, null, 2));
}