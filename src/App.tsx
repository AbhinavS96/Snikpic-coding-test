import { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import Search from "./Components/Search";
import { movieType } from "./Models/movie";

const key = "d37dede0";
const URL = `http://www.omdbapi.com/?apikey=${key}&`;

function App() {
  const [movies, setMovies] = useState<movieType[] | []>([]);
  const [value, setInput] = useState("");

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
    const response = await fetch(`${URL}s=${value}`);
    const result = await response.json();
    console.log(result);
    setMovies(result.Search);
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <Search
        onSubmit={submitHandler}
        value={value}
        onChange={inputChangeHandler}
      />
      <MovieList movies={movies}></MovieList>
    </div>
  );
}

export default App;
