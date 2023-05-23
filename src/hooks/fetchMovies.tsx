import { useEffect } from "react";
import { fetchMovies } from "../redux/features/movies/movieSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchMoviesBy } from "../redux/features/movies/searchMovieSlice";
import { fetchMoviesByGenre } from "../redux/features/movies/genreMoviesSlice";
import { fetchOne } from "../redux/features/movies/SingleMovieSlice";

export const useMovies = () => {
    const movies = useAppSelector((state) => state.movies);
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(fetchMovies());
    }, [dispatch]);
    return movies
}

export const useSearchMovies = (query?: string) => {
    const movies = useAppSelector(state => state.searchMovies)
    const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(fetchMoviesBy(query || ''));
    }, [dispatch, query]);

    return movies
}

export const useGenre = (query?: string) => {
    const movies = useAppSelector(state => state.searchMovies)
    const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(fetchMoviesByGenre(query || ''));
    }, [dispatch, query]);
    
    return movies
}

export const useSingleMovie = (id?: string) => {
  const movie = useAppSelector(state => state.singleMovie)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchOne(id || ''));
  }, [dispatch, id]);

  return movie
}
