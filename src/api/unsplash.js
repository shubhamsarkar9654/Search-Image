import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID yhnqD-FO9WTrwflrBSct3baxH5b1FWR17_diF05oaH4'
    }
})
