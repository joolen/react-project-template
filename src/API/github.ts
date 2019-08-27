import axios from 'axios'

export const getGithubApi = async () => {
    const response = await axios.get('https://api.github.com/zen');
    return response.data;
}
