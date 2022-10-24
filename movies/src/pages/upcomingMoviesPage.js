import React from "react";
import { useQuery } from 'react-query';
import { getUpcoming } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import Spinner from '../components/spinner';
import PlaylistAddIcon from "../components/cardIcons/addToPlaylist";

const UpcomingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery('upcoming', getUpcoming);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

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