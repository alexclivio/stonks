import React from 'react'
import ReactDOM from 'react-dom'
import Search from './Search'
import Coins from './Coins'

const App = () => {
  return (
    <div>
      <Search/>
      <Coins/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)