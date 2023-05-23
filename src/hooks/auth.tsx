import { useAppSelector } from "../redux/hooks";
import jwt from 'jwt-decode';

export function useToken() {
    const loginToken = useAppSelector((state) => state.login.token);
    const signupToken = useAppSelector((state) => state.signup.token);
    const token = loginToken || signupToken;
    const user: { username: string } = jwt(token)
    return user;
}