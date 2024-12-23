import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  loading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action){
      state.user = action.payload
    },
    setLoading(state, action){
      state.loading = action.payload
    },
    setError(state, action) {
      state.error = action.payload
    }
  }
})

export const {setUser, setError, setLoading} = authSlice.actions
export default authSlice.reducer