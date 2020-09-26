import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://data.messari.io/api/v1/assets',
    headers: {
        'content-type':'application/octet-stream',
        'x-messari-api-key': process.env.MESSARI_KEY
    }
});

export default {
    stockTimeSeries: (symbol) =>
    instance({
        'method':'GET',
        'url':'/query',
        'params': {
            'outputsize':'compact',
            'datatype':'json',
            'function':'TIME_SERIES_DAILY_ADJUSTED',
            'symbol': symbol.toUpperCase()
        },
    })
}