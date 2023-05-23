import { Spinner } from "../../components";
import Moviecard from "./MovieCard"

type movie = {
    mal_id: number;
    title: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
    thumb: string;
    type: string;
    status: string;
}

type Props = {
    loading: boolean
    data: movie[]
    error: string
    query?: string
}

function Handler(props: Props) {
  return (
    <div className="min-h-screen py-0 flex flex-col justify-start items-start text-white text-center bg-slate-400 border border-gray-200 shadow sm:p-8 dark:bg-slate-900 dark:border-gray-700">
      <div className="w-full text-start text-3xl">{props.query ? <p>Results for "{props.query}"</p> : '' }</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  w-full h-full p-4 text-center border-gray-200 shadow sm:p-8 bg-slate-400 dark:bg-slate-900 dark:border-gray-700">
        {props.loading && <Spinner />}
        {!props.loading && props.error && <div>Error: {props.error}</div>}
        {!props.loading && props.data.length === 0 ? <p>No Results Found ☹️</p> : null}
        {!props.loading && props.data ? (
          props.data.map((movie: movie) => (
            <Moviecard
              key={movie.mal_id}
              id={movie.mal_id}
              title={movie.title}
              image={movie.images.jpg.image_url}
              type={movie.type}
              status={movie.status}
            />
          ))
        ) : null }
      </div>
    </div>
  )
}

export default Handler