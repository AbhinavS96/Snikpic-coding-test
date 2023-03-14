import { movieType } from "../Models/movie";
import styles from "./Movie.module.css";

const key = "d37dede0";
const URL = `http://www.omdbapi.com/?apikey=${key}&`;

const Movie: React.FC<{ movie: movieType }> = (props) => {
  const { Title, Year, Poster, imdbID } = props.movie;

  const clickHandler = async () => {
    const response = await fetch(`${URL}i=${imdbID}`);
    const result = await response.json();
    console.log(result.Plot);
    console.log(result.Runtime);
    console.log(result.Genre);
    console.log(result.Ratings);
  };

  return (
    <div onClick={clickHandler} className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <img src={Poster} className={styles.image}></img>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textWrapper}>
            <h1>{Title}</h1>
            <span>{Year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
