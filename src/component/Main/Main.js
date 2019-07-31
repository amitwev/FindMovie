import React, {useState} from 'react'; 
import AllMovies from './allMovies';
import Header from './Header';
import SearchBox from './SearchBox';

const Main = ({onSearchChanges, passState}) => {
	const [st, setSt] = useState(4);
	console.log('stt', st); 
	console.log('the state = ',passState);
	return (
		<div>
			
	    </div>
	)
}

export default Main;