import React from 'react';

const Movie = (props) => {
	const {searchField, key} = props.movie;
	const moviesResult = null;
	if(key === 'Enter'){
  		const moviesResult = fetchingData(searchField);
		console.log(moviesResult);
		return (
			<div>
				<h1>Results for: {searchField}</h1>
			</div>
	)
	}else{
		return (
			<div>
				<h1>Please search For a movie...</h1>
			</div>
	)
	}
	
}
const fetchingData = async function f1(value) { 
	const url = await fetch(`https://api.themoviedb.org/3/search/company?api_key=139d66712ddc61478b65565b75a48660&query=${value}&page=1`);
  	const data = url.json();
  	return data; 
}

export default Movie;