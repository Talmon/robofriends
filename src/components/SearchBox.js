import React from 'react';


// This is the searchbox

const SearchBox = ({ searchField, searchChange}) => {
    return (
        <div>
        <input 
            className='pa3 ba b--purple bg-lightest-blue'
            type='search'
            placeholder='search robots'
            onChange={searchChange}
        />
        </div>
        
    );
}


export default SearchBox;