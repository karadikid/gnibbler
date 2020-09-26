import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://data.messari.io/api/v1/assets',
    headers: {
        'content-type':'application/octet-stream',
        'x-messari-api-key': process.env.MESSARI_KEY
    }
});

export default {
    cryptoTimeSeries: (symbol) =>
    instance({
        'method':'GET',
        'url':`${symbol}/profile`
    })
}