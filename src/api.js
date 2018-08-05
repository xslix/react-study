export async function getPosts() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts')
	return response.json()
}

export async function getPost(id) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
	return response.json()
}
