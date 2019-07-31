import React from 'react';
import './movie.css';
const Movie = (props) => {
	const {id,name,type,photo,rank, description} = props;
	return (
		<div className='w-two-thirds center'>
			<article className="shadow-3 bg-near-white fl w-50 ma1 center singleMovie">
				<img alt ="image url is broke" src={`http://image.tmdb.org/t/p/w185/${photo}`} className=''/>
				<div id = {id} className = 'fl w-50 pa5'>
					<p className='f5 f4-ns mv0 '>Movie name: {name}</p>
					<p className=''>Type: {type}</p>
					<p className=''>Rank: {rank}</p>
				</div>
			</article>
		</div>
	)

}
export default Movie;
