import { useState } from "react";

const key = "d37dede0";
const URL = `http://www.omdbapi.com/?apikey=${key}&`;

const Search: React.FC = () => {
  const [input, setInput] = useState("");
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const doSearch = async () => {
    const response = await fetch(`${URL}s=${input}`);
    const result = await response.json();
    console.log(result);
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    doSearch();
    setInput("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" value={input} onChange={inputHandler}></input>
        <button>Search!</button>
      </form>
    </>
  );
};

export default Search;
