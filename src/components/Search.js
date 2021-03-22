import React from 'react'

const Search = () => {
  const [term, setTerm] = React.useState('')

  const searchTermHandler = (e) => {
    console.log(e.target.value);
    setTerm(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Search Stonks!</h1>
        <input 
          type="text"
          placeholder="type here"
          onChange={searchTermHandler}
        />
      </form>
    </div>
  )
}

export default Search