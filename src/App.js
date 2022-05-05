import {useEffect} from "react";


const API_URL = "http://www.omdbapi.com?apikey=264115cf"
const App = () => {

    const searchMovies = async (title) => {
        const result = await fetch(`${API_URL}&s=${title}`)
        const data = await result.json();
        console.log(data.Search)
    }
    useEffect(() => {
        searchMovies("Hero");
    }, []);

    return (
        <h1>App</h1>
    );
}

export default App;