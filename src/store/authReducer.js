import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth : false,
    },
    reducers: {
        authToggle(state,action){
            state.isAuth = !state.isAuth
            // console.log('state.isAuth = ',state.isAuth);
        }
   
    }
  })

export const { authToggle } = authSlice.actions
  
export default authSlice.reducer

  
