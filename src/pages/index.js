import React from 'react'
import api from '../api'

const IndexPage = () => {
    // Create state variables
    let [responseData, setResponseData] = React.useState('')
    let [profileData, setProfileData] = React.useState('')
    let [symbol, setSymbol] = React.useState('')
    let [quantity, setQuantity] = React.useState('')
    let [message, setMessage] = React.useState('')

    // fetches stock data based on parameters
    const fetchData = (e) => {
        e.preventDefault()

        setMessage('Loading...')

        api.cryptoSymbolGet(symbol)
        .then((response)=>{
           setResponseData(response.data.data.profile)
           setMessage('')
           console.log(response)
        })
        .catch((error) => {
           setMessage('Error')
           console.log(error)
        })
        api.cryptoProfilesGet(quantity)
        .then((response)=>{
            setProfileData(response.data.data)
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
                    <label htmlFor="quantity">Enter number of profiles
                        <input
                            name="quantity"
                            id="quantity"
                            type='number'
                            placeholder='500'
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}></input>
                    </label>
                    <button type='submit'>Submit</button>
                </fieldset>
            </form>
            <p>{message}</p>
            <h3>Symbol: </h3>
            <p>Crypto</p>
            <small>Last Refresh: {responseData ? responseData.refresh : ''}</small>
            
        </div>
    )
}

export default IndexPage