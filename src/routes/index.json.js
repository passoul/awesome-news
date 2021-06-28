const fetch = require("node-fetch");
import { apiUrl } from '../store/data';

export async function get(req, res) {
    const response = await fetch(apiUrl);
    const data = await response.json();
	

	// const postsByCat = Object.values(data).reduce((acc, obj) => {
	// 	let key = obj.category;
	// 	// Group initialization
	// 	if (!acc[key]) {
	// 		acc[key] = [];
	// 	}
	// 	// Grouping
	// 	acc[key].push(obj);
	// 	return acc;
	// }, {})
	
	const posts = await JSON.stringify(data);

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(posts);
}

