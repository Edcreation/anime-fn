import { Link } from "react-router-dom"

type Card = {
  id: number
  image: string
  title: string
  status: string
  type: string
}

function MovieCard(props: Card) {
  return (
    <div className="flex max-w-64 flex-col justify-between rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-700">
        <Link to={`/single/${props.id}`}>
            <div className="w-full h-56 object-cover bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${props.image})` }}></div>
        </Link>
        <div className="p-2">
        <h5
          className="mb-2 text-xs lg:text-md font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {props.title}
        </h5>
        <div className="w-full flex flex-row justify-between items-center p-2" >
            <p className=" text-xs lg:text-md text-neutral-600 dark:text-neutral-200">
            {props.status}
            </p>
            <button
            type="button"
            className="bg-blue-700 text-xs p-2 rounded-md"
            data-te-ripple-init
            data-te-ripple-color="light">
            {props.type}
            </button>
        </div>
        </div>
    </div>
  )
}

export default MovieCard