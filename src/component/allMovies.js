import React from 'react';
import Movie from './Movie'
const AllMovies = (props) =>{
	const allMoviesData = props.AllMovies.movies;
	const numOfResults = props.AllMovies.totalResult;
	const searchField = props.AllMovies.searchField;
	if(numOfResults > 0 ) {
		return (
			<div>
				{
					allMoviesData.map((movie, index) =>{
						return (
							<Movie key = {movie.id}
									id = {movie.id}
									name = {movie.title}
									type = {movie.media_type}
									photo = {movie.poster_path} 
									rank = {movie.vote_average}
									description = {movie.overview}
							/>
						);
					})
				}
			</div>
			)
	}else{
		return(
			<h1>{`No movies from searching ${searchField}`}</h1>
		)
	}
}

export default AllMovies;