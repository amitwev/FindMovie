import React, { Component } from 'react';


const SearchBox = ({searchChange}) => {
	return (
			<div>
				<input type="text" 
					    className='br4 tc searchBar b--lightest-blue' 
				        placeholder='search movie'
				        onKeyPress={searchChange}
				/>
			</div>
	);
}

export default SearchBox; 