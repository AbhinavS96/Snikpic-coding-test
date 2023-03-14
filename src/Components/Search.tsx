const Search: React.FC<{
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          value={props.value}
          onChange={props.onChange}
        ></input>
        <button>Search!</button>
      </form>
    </>
  );
};

export default Search;
