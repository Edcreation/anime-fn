import store from '../redux/store'
import { Navigate } from 'react-router-dom'

export function isLoggedIn() {
  const token = store.getState().login.token
  if (token) {
    return <Navigate to="/home"/>
  }
}

export function isAuthenticated() {
  const token = store.getState().login.token
  if (!token) {
    return false
  }
  return true
}