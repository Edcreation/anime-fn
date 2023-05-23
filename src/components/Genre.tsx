import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getMovieGenre } from "../redux/features/movies/genreSlice";
import { Link } from "react-router-dom";

function Genre() {
  const genres = useAppSelector(state => state.genre)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getMovieGenre());
  }, [dispatch]);

  return (
    <div className="w-full grid grid-cols-3 md:grid-cols-8 lg:grid-cols-8 gap-1 justify-start items-start">
      {genres.loading && <GenreSkeleton />}
      {!genres.loading && genres.error && <div>Error: {genres.error}</div>}
      {!genres.loading && genres.genres ? (
        genres.genres.map((genre) => (
          <Link to={`/browse/anime/genre/${genre.mal_id}`} key={genre.count} className='p-1 flex text-xs border border-slate-500 justify-center rounded-sm bg-slate-200 text-gray-950 dark:bg-blue-950 dark:text-slate-100'>{genre.name}</Link>  
        ))
      ) : null}
    </div>
  )
}

function GenreSkeleton() {
  return (
    <div  className='p-1 flex text-xs animate-pulse h-7 opacity-5 border border-slate-500 justify-center rounded-sm bg-slate-200 text-gray-950 dark:bg-blue-950 dark:text-slate-100'></div>
  )
}
export default Genre