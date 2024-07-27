import axios from "axios";

const fetchMovies = async (searchValue) => {
  const url = "https://api.themoviedb.org/3/search/movie";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDc2ZWU3YzZhZTMwOWU0NDUwOGEzY2ZiZTU0NjgzYSIsIm5iZiI6MTcyMjAwMTM0MC4yMTMxOTgsInN1YiI6IjY2YTEwMGY5Y2VhZTUwMTUwMzcwNjA4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yEx-w_KEP--rNtULY0xNN4mPq0EPTQiMJ9ob_-WFPvI",
    },
    params: {
      query: searchValue,
    },
  };
  try {
    const res = await axios.get(url, options);
    console.log(res.data.results);
    return res.data.results;
  } catch (err) {
    console.log(err);
  }
};

export const fetchPopularMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDc2ZWU3YzZhZTMwOWU0NDUwOGEzY2ZiZTU0NjgzYSIsIm5iZiI6MTcyMjAwMTM0MC4yMTMxOTgsInN1YiI6IjY2YTEwMGY5Y2VhZTUwMTUwMzcwNjA4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yEx-w_KEP--rNtULY0xNN4mPq0EPTQiMJ9ob_-WFPvI",
    },
  };
  try {
    const res = await axios.get(url, options);
    return res.data.results;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMoviesById = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDc2ZWU3YzZhZTMwOWU0NDUwOGEzY2ZiZTU0NjgzYSIsIm5iZiI6MTcyMjAwMTM0MC4yMTMxOTgsInN1YiI6IjY2YTEwMGY5Y2VhZTUwMTUwMzcwNjA4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yEx-w_KEP--rNtULY0xNN4mPq0EPTQiMJ9ob_-WFPvI",
    },
  };
  try {
    const res = await axios.get(url, options);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchReviewsById = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDc2ZWU3YzZhZTMwOWU0NDUwOGEzY2ZiZTU0NjgzYSIsIm5iZiI6MTcyMjAwMTM0MC4yMTMxOTgsInN1YiI6IjY2YTEwMGY5Y2VhZTUwMTUwMzcwNjA4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yEx-w_KEP--rNtULY0xNN4mPq0EPTQiMJ9ob_-WFPvI",
    },
  };
  try {
    const res = await axios.get(url, options);
    return res.data.results;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCastById = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDc2ZWU3YzZhZTMwOWU0NDUwOGEzY2ZiZTU0NjgzYSIsIm5iZiI6MTcyMjAwMTM0MC4yMTMxOTgsInN1YiI6IjY2YTEwMGY5Y2VhZTUwMTUwMzcwNjA4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yEx-w_KEP--rNtULY0xNN4mPq0EPTQiMJ9ob_-WFPvI",
    },
  };
  try {
    const res = await axios.get(url, options);
    return res.data.cast;
  } catch (err) {
    console.log(err);
  }
};

export default fetchMovies;
