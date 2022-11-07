import axios from 'axios'


const URL = 'https://api.spaceflightnewsapi.net/v3'

async function getBlogs() {
	try {
		const resposta = await axios.get(`${URL}/blogs`)
		const { data } = resposta;
		return data
	} catch (err) {
		console.log(err.resposta)
		return null
	}
}

const api = {
	getBlogs,
}

export default api