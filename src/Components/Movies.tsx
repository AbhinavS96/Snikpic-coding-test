import { movieType } from "../Models/Movie";
const Movies: React.FC<{ movies: movieType[] | [] }> = (props) => {
  return (
    <>
      <ul>
        {props.movies.map((movie) => {
          return <li key={movie.imdbID}>{movie.Title}</li>;
        })}
      </ul>
    </>
  );
};

export default Movies;
