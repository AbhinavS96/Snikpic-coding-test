import { movieType } from "../Models/movie";
import styles from "./Movie.module.css";

const Movie: React.FC<{ movie: movieType }> = (props) => {
  const { Title, Year, Poster } = props.movie;
  return (
    <div className={styles.container}>
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
