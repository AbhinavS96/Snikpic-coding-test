import { movieType } from "../Models/Movie";

const Movie: React.FC<{ movie: movieType }> = (props) => {
  const { Title, Year, Poster } = props.movie;
  return (
    <div>
      {Title}
      {Year}
      <img src={Poster}></img>
    </div>
  );
};

export default Movie;
