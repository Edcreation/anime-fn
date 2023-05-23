import { useEffect } from "react"; 
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import ComBox from "./Combox"
import { comments } from "../../../redux/features/comments/commentsSlice";
import { CommentsFallBack, ErrorBar, LoadingBar } from "../../../components/shelf";
import CommentForm from "./CommentForm";
import { ProtectedComponent } from "../../../components/Protected";
import { isAuthenticated } from "../../../Authentication/isLoggedIn";

function Comments() {
  const comment = useAppSelector(state => state.comments)
  const dispatch = useAppDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(comments(id || ''));
  }, [dispatch, id]);

  return (
    <div style={{maxBlockSize: '38rem'}} className="display p-2 flex flex-col md:justify-between md:max-w-2xl border border-slate-700 mt-10">
        <h1 className="text-xl mb-5 dark:text-slate-200">Discuss</h1>
        {comment.loading && <LoadingBar />}
        {!comment.loading && comment.error && <ErrorBar error={comment.error} />}
        <div className="w-full grid grid-cols-1 gap-3 overflow-scroll">
        {!comment.loading && comment.data.length > 0 ? (
          comment.data.map((com) => (
            <ComBox
              key={com._id}
              comment={com.comment}
              user={com.user}
              date={com.date}
            />
          ))
        ) :  <p className="p-1 text-gray-800 dark:text-slate-200">No Comments, Be the First 👇</p>  }
        </div>
         <ProtectedComponent isLoggedIn={!isAuthenticated()} fallback={<CommentsFallBack/>} ><CommentForm id={id || ''} /></ProtectedComponent>
    </div>
  )
}

export default Comments