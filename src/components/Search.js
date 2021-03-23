import React, {useState, useEffect} from 'react'
import Coin from './Coin'
// import './coin.css'


const Search = () => {
  const [term, setTerm] = useState('')
  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(res => {
      return res.json()
    }).then( data => {
      setCoins(data)
    })
  },[])

  const searchTermHandler = (e) => {
    setTerm(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
  }

  const filteredCoins = coins.filter( coin => {
    // console.log(coin.name);
    return coin.name.toLowerCase().includes(term.toLowerCase())
  })

  const mappedCoins = filteredCoins.map(coin => {
    return (
      <Coin
        key={coin.id}
        name={coin.name}
        image={coin.image}
        price={coin.current_price}
        volume={coin.market_cap}
        symbol={coin.symbol}
        priceChange={coin.price_change_percentage_24h}
      />
    )
  })

  return (
    <div>
      <div className='coin-search'>
        <h1 className='coin-text'>Search Stonks!</h1>
        <form onSubmit={submitHandler}>
          <input 
            className='coin-input'
            type="text"
            placeholder="type here"
            onChange={searchTermHandler}
          />
        </form>
      </div>
      {mappedCoins}
    </div>
  )
}

export default Search