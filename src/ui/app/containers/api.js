import axios from 'axios';

export const fetchData = async (url) => {
    try {
        const res = await axios.get(url);
        const data = res.data;
       return data
    } catch (error) {
        console.log(error)
    }
}