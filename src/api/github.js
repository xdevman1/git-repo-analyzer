import request from "../utils/request.js";

export async function fetchRepo(repo) {
	return request(`https://api.github.com/repos/${repo}`);
}

export async function fetchLanguages(repo) {
	return request(`https://api.github.com/repos/${repo}/languages`);
}

export async function fetchCommits(repo) {
	return request(`https://api.github.com/repos/${repo}/commits`);
}

export async function fetchIssues(repo) {
	return request(`https://api.github.com/repos/${repo}/issues?state=all`);
}