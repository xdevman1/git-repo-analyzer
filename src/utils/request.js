import fetch from "node-fetch";
export default async function request(url) {
	const r = await fetch(url);
	return await r.json();
}