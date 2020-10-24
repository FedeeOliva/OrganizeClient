import axios from 'axios';

const Axios = axios.create({
	baseURL: 'http://localhost:4000'
	//baseURL : process.env.REACT_APP_BACKEND_URL,
})
//a
export default Axios;