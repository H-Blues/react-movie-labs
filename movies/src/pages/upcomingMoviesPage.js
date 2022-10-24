import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcoming } from "../api/tmdb-api";
import PlaylistAddIcon from "../components/cardIcons/addToPlaylist";

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
      action={() => {
        return (
          <>
            <PlaylistAddIcon movie={movies} />
          </>
        );
      }}
    />
  );
};
export default UpcomingMoviesPage;