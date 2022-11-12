import axios from 'axios'

const URL = 'https://api.spaceflightnewsapi.net/v3'

async function getBlogs(page) {
	try {
		const resposta = await axios.get(`${URL}/blogs`,{params:{_start:page*10}})
		const { data } = resposta;
		return data
	} catch (err) {
		console.log(err.resposta)
		return null
	}	
}

async function titleContains(string) {
	try {
		const resposta = await axios.get(`${URL}/blogs`,{params:{title_contains:string}})
		const { data } = resposta;
		return data
	} catch (err) {
		console.log(err.resposta)
		return null
	}	
}


const api = {
	getBlogs,
	titleContains
}

export default api