import React from 'react'
import ReactDOM from 'react-dom'
import Search from './Search'
import './css/coin.css'
import './css/main.css'


const App = () => {
  return (
    <div className='coin-app'>
      <Search/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)