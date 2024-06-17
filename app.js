async function start() {
	try {
		const resp = await fetch('https://jsonplaceholder.typicode.com/users')
		const data = await resp.json()
		console.log(resp)
		console.log(data)
	} catch (err) {}
}

start()
