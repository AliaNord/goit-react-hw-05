import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchPopularMovies } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

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
    <>
      <h2>Trending today</h2>
      <MovieList movies={movies} />
      {isLoading && <Loader/>}
      {isError && <Toaster/>}
    </>
  );
};

export default HomePage;
