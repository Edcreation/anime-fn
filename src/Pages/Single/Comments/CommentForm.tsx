import { ChangeEvent, useState } from "react";
import { postComment } from "../../../redux/features/comments/postCommentSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { ErrorBar } from "../../../components/shelf";
import { comments } from "../../../redux/features/comments/commentsSlice";


function CommentForm(props:{ id: string }) {

    const dispatch = useAppDispatch()
    const commentAdded = useAppSelector(state => state.addComments)
    const [comment, setComment] = useState('');

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setComment(event.target.value)
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        dispatch(postComment({ id: props.id, comment })).then((response) => {
            if (response.meta.requestStatus === "fulfilled") {
                (document.getElementById('frm') as HTMLFormElement).reset()
                dispatch(comments(props.id || ''))

            }
        });
    };

  return (
    <div className="w-full">
        {!commentAdded.loading &&commentAdded.error && <ErrorBar error={commentAdded.error} />}
        <form id='frm' onSubmit={handleSubmit} className="w-full p-2 flex justify-between items-start flex-col md:flex-row ">
            <textarea name="comment" onChange={(e) => handleChange(e)}  className="block md:m-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <button className="p-1 mt-2 bg-blue-700 text-slate-200">Comment</button>
        </form>
    </div>
  )
}

export default CommentForm