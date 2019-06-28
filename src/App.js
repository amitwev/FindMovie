import React from 'react';
import './App.css';
import 'tachyons'; 

function App() {
  return ( 
      <div className='tc'> 
        <h1 className='f1 title'>Find a movie app</h1> 
        <input type="text" className='br4 tc searchBar' 
                placeholder='search movie'/>
      </div>
  );
}

export default App;
