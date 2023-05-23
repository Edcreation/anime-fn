
import { ErrorBar } from "../../../components/shelf"
import { Link } from "react-router-dom"
import { useTopComments } from "../../../hooks/comments"

type COMMENT = {
  ani_id: string
  user: { username: string }
  comment: string
  date: Date
}

export function Card(com_data: COMMENT) {
  const date = new Date(com_data.date)
  const datem = date.getTime()
  const now: number = Date.now() - datem
  function timeSince() {
    const seconds = Math.floor(now / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }
  return (
    <Link to={`/single/${com_data.ani_id}`} className="flex w-64 overflow-hidden items-center bg-slate-300 border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex w-full h-full backdrop-brightness-50 flex-col justify-start p-2 items-start ">
            <div className="w-full flex justify-between items-center flex-row ">
            <div style={{
            backgroundImage:
            `url('https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg')`,
                  }}  className="w-8 h-8 bg-cover bg-center rounded-full m-1"></div>
            <h5 className="text-sm  font-bold tracking-tight text-gray-900 dark:text-white">{com_data.user.username}</h5>
            <p className=" text-end text-slate-400 text-xs">{timeSince()}</p>
            </div>
            <p className="mb-3 ml-4 text-sm max-h-32 overflow-clip border-l-2 border-slate-400 pl-1 mt-2 font-normal text-gray-200 dark:text-white">{com_data.comment}</p>
        </div>
    </Link>
  )
}

function TopComments() {
  const top = useTopComments()
  return (
    <div className="w-full bg-slate-400 dark:bg-slate-800 h-screen p-2 pt-6 overflow-x-scroll">
      <p className="text-slate-800 dark:text-slate-200 text-xl" >Top Discussions</p>
      <div className="w-full flex items-center justify-center">
        {top.loading && <TopCommentsSkeleton  />}
        {!top.loading && top.error && <ErrorBar error={top.error} />}
        {!top.loading && top.data.length === 0 ? <p className="text-slate-400">No Results Found ☹️</p> : null}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  p-2">
        {!top.loading && top.data ? (
          top.data.map((comment) => (
            <Card
              key={comment._id}
              ani_id={comment.ani_id}
              user={comment.user}
              comment={comment.comment}
              date={comment.date}
            />
          ))
          ) : null }
        </div>
      </div>
    </div>
  )
}

function TopCommentsSkeleton() {
  return (
    <div className="w-full animate-pulse absolute opacity-10 top-60 md:top-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  p-2">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  )
}

function CardSkeleton() {
  return (
    <div className="flex w-64 h-40 overflow-hidden items-center bg-slate-300 border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex w-full h-full backdrop-brightness-50 flex-col justify-start p-2 items-start ">
          <div className="w-full flex items-center flex-row ">
          <div className="w-8 h-8 bg-cover bg-center bg-white rounded-full m-1"></div>
            <h5 className="text-sm  font-bold tracking-tight text-gray-900 dark:text-white"><div className="w-32 animate-pulse rounded-md h-5 bg-white"></div></h5>
          </div>
          <div className="mb-3 ml-4 text-sm max-h-32 overflow-clip border-l-2 border-slate-400 pl-1 mt-2 font-normal text-gray-200 dark:text-white">
          <div className="w-32 animate-pulse rounded-md h-16 bg-white"></div>
          </div>
      </div>
    </div>
  )
}

export default TopComments