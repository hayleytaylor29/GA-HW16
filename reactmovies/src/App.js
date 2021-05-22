import React from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form'

const App = () => {
  //variable for api key
  const apiKey = "3d40f27f";
  //state to hold movie data
  const [movie, setMovie] = React.useState(null);
  //function to get movies
  const getMovie = async (searchTerm) => {
    //make fetch request and store response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    //parse JSON response into javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  };
  //This will run on the first render but not on subsequent renders
  React.useEffect(() => {
    getMovie("Clueless");
  }, []);
  //use our components in api's returned jsx
  //we pass the getMovie function as a prop called moviesearch
  //we pass movie as props to movie display
  return (
    <div className="App">
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  )
}

export default App

