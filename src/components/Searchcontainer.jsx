import React from 'react'

function Searchcontainer(props) {
  return (
    <div className='search-container'>
        <input
              type="search"
              name="search"
              autoComplete="off"
              placeholder={props.placeholder}
              className="searchbox"
              value={props.search}
              onChange={props.change}
            />
    </div>
  )
}

export default Searchcontainer