import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://data.messari.io/api/v2/assets',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type':'application/octet-stream',
        'x-messari-api-key': process.env.MESSARI_KEY
    }
});

export default {
    cryptoSymbolGet: (symbol) =>
    instance({
        'method':'GET',
        'url':`${symbol}/profile`
    }),
    cryptoProfilesGet: () =>
    instance({
        'method':'GET',
        baseURL:'https://data.messari.io/api/v2/assets?with-profiles',
        'url':''
    })
}