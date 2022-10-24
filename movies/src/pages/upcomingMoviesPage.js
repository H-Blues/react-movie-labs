import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcoming } from "../api/tmdb-api";

const UpcomingMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getUpcoming().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={() => { }}
    />
  );
};
export default UpcomingMoviesPage;