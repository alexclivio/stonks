import React from 'react'
// import './coin.css'

const Coin = (props) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={props.image} alt=""/>
          <h1>{props.name}</h1>
          <p className='coin-symbol'>{props.symbol}</p>
        </div>
        <div className="coin-data">
          <p className='coin-price'>${props.price.toLocaleString()}</p>
          <p className='coin-volume'>${props.volume.toLocaleString()}</p>
          {props.priceChange < 0 ? (
            <p className="coin-percent red">{props.priceChange.toFixed(2)}%</p>
          ) : (<p className="coin-percent green">{props.priceChange.toFixed(2)}%</p>)}
        </div>
      </div>
    </div>
  )
}

export default Coin