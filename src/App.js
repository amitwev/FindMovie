import React, { Component } from 'react';
import './App.css';
import 'tachyons'; 
import SearchBox from '../src/component/Search.js';
import Movie from '../src/component/Movie.js';

class App extends Component {
	constructor(){
		super()
		this.state ={
			movie:[],
			searchField: ''
		}
	}
    onSearchChanges = (event) => {
		if(event.key === 'Enter'){
			this.setState({searchField:event.target.value});
		}
	}
	componentDidUpdate() {
		fetch(`https://api.themoviedb.org/3/search/tv?api_key=139d66712ddc61478b65565b75a48660&language=en-US&query=${this.state.searchField}&page=1`)
		.then(res => res.json()) 
		.then(result => this.setState({movie: result.results}));	
	}
    render(){
		return ( 
		  <div className='tc'> 
		    <h1 className='f1 title'>Find a movie app</h1> 
		    <SearchBox searchChange={this.onSearchChanges}/>
		    <Movie movies={this.state.movie}/>
		  </div>
		);
	}
}

export default App;
