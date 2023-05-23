import Handler from "./Handler";
import { useMovies } from "../../hooks/fetchMovies";

function Section() {
  const movies = useMovies()

  return ( 
    <Handler 
    loading={movies.loading} 
    error={movies.error} 
    data={movies.movies} />
  );
}

export default Section;
