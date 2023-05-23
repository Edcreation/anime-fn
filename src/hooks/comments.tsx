import { useEffect } from "react";
import { topComments } from "../redux/features/comments/topCommentsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";


export const useTopComments = () => {
    const top = useAppSelector(state => state.topComments)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(topComments())
    }, [dispatch])

    return top;
  
}