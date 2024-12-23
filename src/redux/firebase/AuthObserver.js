import { useEffect } from "react"
import { useAppDispatch } from "../store"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./authHandler"
import axios from "axios"
import { setUser } from "./authSlice"

const AuthObserver = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(user) => {
      if(user){
        axios.get(`http://localhost:5000/api/users/${user.email}`).then(res => dispatch(setUser(res?.data?.data)))
      }
    })
    return () => unsubscribe()
  }, [dispatch])
  return null
}

export default AuthObserver