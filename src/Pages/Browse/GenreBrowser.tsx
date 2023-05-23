import { useParams } from "react-router-dom";
import Handler from "./Handler";
import { useGenre } from "../../hooks/fetchMovies";

type Search = {
    query: string;
};

function GenreBrowser() {

  const { query } = useParams<Search>()
  const movies = useGenre(query) 
  return (
    <div className="w-full">
        <Handler 
        loading={movies.loading} 
        error={movies.error} 
        data={movies.movies}
         />
    </div>
  );
}

export default GenreBrowser;
