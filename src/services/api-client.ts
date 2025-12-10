import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '34b4b681920e424c95b76aeda0566b7a'
    }
})