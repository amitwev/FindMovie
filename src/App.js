import React, { Component } from 'react';
import './App.css';
import 'tachyons'; 
import SearchBox from '../src/component/Search.js';
import Movie from '../src/component/Movie.js';

class App extends Component {
	constructor(){
		super()
		this.state ={
			movie:[]
		}
	}
    onSearchChanges = (event) => {
		if(event.key === 'Enter'){
			console.log(event.target.value);
		}
	}

    render(){
		return ( 
		  <div className='tc'> 
		    <h1 className='f1 title'>Find a movie app</h1> 
		    <SearchBox searchChange={this.onSearchChanges}/>
		    <Movie/>
		  </div>
		);
	}
}

export default App;
