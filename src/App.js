import {useEffect, useState} from "react";

import './App.css';
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=264115cf"

const movie = {
    "Title": "Hero",
    "Year": "1992",
    "imdbID": "tt0104412",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyMDk0OWItZWQxYy00YzFkLWIwNDctYTYxODU5Zjk3MjAyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState([]);

    const searchMovies = async (title) => {
        const result = await fetch(`${API_URL}&s=${title}`)
        const data = await result.json();
        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies("Hero");
    }, []);

    return (
        <div className="App">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies" 
                    value={searchText}
                    onChange={(e) => {setSearchText(e.target.value)}}
                />
                <img 
                    src={searchIcon}
                    alt="search"
                    onClick={() => {searchMovies(searchText)}}
                />
            </div>

            { movies?.length > 0 ? (

                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (

                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
            )}
        </div>
    );
}

export default App;