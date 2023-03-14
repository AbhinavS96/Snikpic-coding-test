import { movieType } from "../Models/movie";
import Movie from "./Movie";
import styles from "./MovieList.module.css";
const MovieList: React.FC<{ movies: movieType[] | [] }> = (props) => {
  return (
    <>
      <ul>
        {props.movies.map((movie) => {
          return (
            <li key={movie.imdbID} className={styles.movieList}>
              <Movie movie={movie}></Movie>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;
