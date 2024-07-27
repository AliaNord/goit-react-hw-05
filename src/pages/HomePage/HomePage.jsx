import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchPopularMovies } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import s from './HomePage.module.css'

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {

    const getMovies = async () => {
      setIsLoading(true);
      try {
        const res = await fetchPopularMovies();
        setMovies(res)
      } catch (err) {
        setIsError(err.message)
        toast.error("No results");
      } finally {
        setIsLoading(false)
      }
    };

    getMovies();
  }, []);
  return (
    <div  className={s.homepage}>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
      {isLoading && <Loader/>}
      {isError && <Toaster/>}
    </div>
  );
};

export default HomePage;
