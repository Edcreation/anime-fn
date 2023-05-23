import { useParams } from "react-router-dom";
import Handler from "./Handler";
import { useSearchMovies } from "../../hooks/fetchMovies";

type Search = {
    query: string;
};

function Receiver() {
  const { query } = useParams<Search>()
  const movies = useSearchMovies(query)
  
  return (
    <Handler 
      loading={movies.loading} 
      error={movies.error} 
      data={movies.movies}
      query={query} />
  );
}

export default Receiver;
