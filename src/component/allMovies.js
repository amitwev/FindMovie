import React from 'react';
import Movie from './Movie'
const AllMovies = (props) =>{
	console.log(props);
	const allMoviesData = props.allMovies.movies;
	console.log(allMoviesData)
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
}

export default AllMovies;