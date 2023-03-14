import { movieType } from "../Models/Movie";
import Movie from "./Movie";
const MovieList: React.FC<{ movies: movieType[] | [] }> = (props) => {
  return (
    <>
      <ul>
        {props.movies.map((movie) => {
          return (
            <li key={movie.imdbID}>
              <Movie movie={movie}></Movie>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;
