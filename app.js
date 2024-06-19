const list = document.querySelector('#list')

async function getFromServer() {
	list.innerHTML = 'Loading ...'
	try {
		const resp = await fetch('https://jsonplaceholder.typicode.com/users') // server return response
		const data = await resp.json() // method parse response to json
		setTimeout(() => {
			renderUsers(data)
		}, 2000)
	} catch (err) {
		list.style.color = 'red'
		list.innerHTML = err.message
	}
}

function renderUsers(users = []) {
	const html = users.map(toHTML).join('')
	list.innerHTML = html
}

function toHTML(oneUser) {
	return `
	<li class="list-group-item">${oneUser.name}</li>
	`
}

getFromServer()
