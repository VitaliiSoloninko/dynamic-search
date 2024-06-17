const list = document.querySelector('#list')

async function start() {
	try {
		const resp = await fetch('https://jsonplaceholder.typicode.com/users')
		const data = await resp.json()
		console.log(resp)
		console.log(data)
		renderUsers(data)
	} catch (err) {}
}

function renderUsers(users = []) {
	const html = users.map(toHTML).join('')
	list.innerHTML = html
}

function toHTML(user) {
	return `
	<li class="list-group-item">${user.name}</li>
	`
}

start()
