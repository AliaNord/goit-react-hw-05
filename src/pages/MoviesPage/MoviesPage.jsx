import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import fetchMovies from "../../services/api";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import toast, { Toaster } from "react-hot-toast";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const filterValue = searchParams.get("query") ?? "";

  const onSubmit = (newValue) => {
    setSearchParams({ query: newValue });
  };

  useEffect(() => {
    if (!filterValue) {
      return;
    }
    fetchMovies(filterValue).then((data) => {
      if (!data || data.length === 0) {
        toast.error("This movie doesn't exist");
      }
      setMovies(data);
    });
  }, [filterValue]);

  return (
    <>
      <Toaster />
      <SearchBar filterValue={filterValue} onSubmit={onSubmit} />
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
