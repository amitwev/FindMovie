import React, { Component } from 'react';
import './App.css';
import 'tachyons'; 
import SearchBox from './component/SearchBox';
import AllMovies from './component/allMovies';
import Header from './component/Header';
import Particles from 'react-particles-js';
import particlesConfig from './particlesjs-config.json';

class App extends Component {
	constructor(){
		super()
		this.state ={
      movies:[],
			searchField: '', 
      key:null, 
      numOfpages:null
		}
	}
    onSearchChanges = (event) => {
      event.persist();
      const theState = this.state
      if(event.key === 'Enter') {
          const search = event.target.value;
          const keyPress = event.key;
          theState.searchField = search;
          theState.key = keyPress;
          this.gettingData();
      }else{
        return(
          <div>
            {'Looking for search'};
          </div>
        )
      }
	}
  gettingData = async function(){
    try{
      const valueForSearch = this.state.searchField;
      if(valueForSearch.length > 0 ){
        const url = await (`https://api.themoviedb.org/3/search/multi?api_key=139d66712ddc61478b65565b75a48660&language=en-US&query=${valueForSearch}&page=1&include_adult=true`);
        await console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        await this.setState({movies: data.results, numOfpages: data.total_pages })
      }
    }catch(e){
      console.log('Error:', e);
    }
  }
  render(){
		return (
		  <div className='tc'> 
        <Particles className ='particles' params={particlesConfig} />
		    <Header /> 
		    <SearchBox searchChange={this.onSearchChanges}/>
        <AllMovies allMovies={this.state} />
		  </div>
		);
	}
}

export default App;
