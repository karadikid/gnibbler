import React from 'react'
import api from '../api'

const IndexPage = () => {
    // Create state variables
    let [responseData, setResponseData] = React.useState('')
    let [symbol, setSymbol] = React.useState('')
    let [message, setMessage] = React.useState('')

    // fetches stock data based on parameters
    const fetchData = (e) => {
        e.preventDefault()

        setMessage('Loading...')

        api.cryptoTimeSeries(symbol)
        .then((response)=>{
           setResponseData(response.data)
           setMessage('')
           console.log(response)
        })
        .catch((error) => {
           setMessage('Error')
           console.log(error)
        })
    }


    return (
        <div
            style={{
                background: '#EEE',
                padding: '5%',
                fontFamily: '"Lucida Console", Monaco, monospace'
            }}>
            <h1
                style={{
                    background: 'black',
                    color: 'white',
                    padding: '1rem',
                    display: 'inline-block'
                }}>Gatsby Crypto Market App</h1>
            <h2>Analyze Crypto Data</h2>
            <form onSubmit={fetchData}>
                <fieldset>
                    <legend>Search Crypto Market</legend>
                    <label htmlFor="symbol">Enter crypto symbol
                        <input
                            required
                            name="symbol"
                            id="symbol"
                            type='text'
                            placeholder='BTC'
                            value={symbol}
                            onChange={(e) => setSymbol(e.target.value)}
                        />
                    </label>
                    <button type='submit'>Submit</button>
                </fieldset>
            </form>
            <p>{message}</p>
            <h3>Symbol: {responseData ? responseData.symbol : ''}</h3>
            <p>Daily Time Series with Splits and Dividend Events</p>
            <small>Last Refresh: {responseData ? responseData.refreshed : ''}</small>
        </div>
    )
}

export default IndexPage