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
			searchField: '', 
      key:null
		}
	}
    onSearchChanges = (event) => {
		  this.setState({searchField:event.target.value, key:event.key});
	}
    render(){
		return ( 
		  <div className='tc'> 
		    <h1 className='f1 title'>Find a movie app</h1> 
		    <SearchBox searchChange={this.onSearchChanges}/>
        <Movie movie={this.state}/>
		  </div>
		);
	}
}

export default App;
