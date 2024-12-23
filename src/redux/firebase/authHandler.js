import { setLoading, setUser } from "./authSlice";
import { app } from "./firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {apiSlice, useGetUserByEmailQuery} from '../api'

export const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export const emailPasswordRegister = async(data, dispatch) => {
  try{
    dispatch(setLoading(true))
    const result = await createUserWithEmailAndPassword(auth, data.email, data.password)
    const firebaseUser = result.user
    console.log({firebaseUser})

    const newUser = {
      name: data.name,
      email: data.email,
      imgUrl: data.imgUrl,
      role: data.role
    }
    const response = await dispatch(apiSlice.endpoints.createUser.initiate(newUser)).unwrap()
    if(response.success){
      alert('User created')
      dispatch(setUser(response?.data))
    }
  } catch (error) {
    console.log(error)
  }
}

export const emailPasswordLogin = async(email, password, dispatch) => {
  try {
    dispatch(setLoading(true))
    const result = await signInWithEmailAndPassword(auth, email, password)
    const userEmail = await result?.user?.email
    if(userEmail){
      const res = await dispatch(apiSlice.endpoints.getUserByEmail.initiate(userEmail)).unwrap()
      if(res){
        alert('User login successfully')
        dispatch(setUser(res?.data))
      } else {
        alert('Login failed')
      }
    }
    
  } catch {
    alert('Login failed')
  }
}



export const logout = async (dispatch) => {
  try {
    await signOut(auth)
    dispatch(setUser(null))
  } catch (error) {
    console.log(error)
  }
}