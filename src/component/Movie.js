import React from 'react';

const Movie = (props) => {
	const {id, name, rate, dateRelease, photo } = props;
	return (
		<div>
			<img src='' alt ='Image'/>
			<div>
				<h1>{name}</h1> 
				<p>{rate}</p>
			</div>
		</div>
	)
}

export default Movie;