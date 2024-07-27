import { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMoviesById } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location?.state || '/users');

  const defaultImg =
    "<https://cs13.pikabu.ru/post_img/big/2023/09/11/5/1694416670162565263.jpg>";

  useEffect(() => {
    fetchMoviesById(params.movieId).then((data) => setMovie(data));
  }, [params.movieId]);

  if (!movie) {
    return <Loader />;
  }
  console.log(movie);
  return (
    
    <div className={s.moviePage}>
      <Link to={goBackRef.current}>Go back</Link>
      <div className={s.movieCard}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          alt={movie.title}
        />
        <div>
          <h1>{movie.title}</h1>
          <p>User Score: 44%</p>
          <div>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            <ul className={s.genres}>
              {movie.genres.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={s.headlinks}>
        <h3>Additional information</h3>
        <div className={s.links}>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
