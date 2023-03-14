import { useState } from "react";

const Search: React.FC = () => {
  const [input, setInput] = useState("");
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
