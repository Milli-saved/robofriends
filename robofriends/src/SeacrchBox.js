import React from 'react'

const SearchBox=({searchfield, searchchange})=>{
    return(
        <div className='pa2'>
            <input
            className='pa3 ba b--green bg-lightest-blue grow'
            type='search'
            placeholder='search robot'
            onChange={searchchange} />
        </div>
        
    )
}


export default SearchBox