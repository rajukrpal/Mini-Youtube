

// firebase ko lana padega 
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase';


  export const login = createAsyncThunk(
    'login',
    async () => {
      try {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
        const response = await signInWithPopup(auth, provider);
        const accessToken = response.user.accessToken;
        const user = {
          displayName: response.user.displayName,
          email: response.user.email,
          photoURL: response.user.photoURL,
        };
     
        localStorage.setItem("accessToken",accessToken)
        localStorage.setItem("user",JSON.stringify(user))
        return { accessToken,  user  }; // Return both accessToken and user details
      } catch (error) {
        console.error("Error signing in with Google:", error);
        throw error; // Throw the error to be handled in the rejected case
      }
    }
  );


  export const logOut = createAsyncThunk(
    'logOut',
    async () => {
      try {
        await auth.signOut()
       const accessToken = localStorage.removeItem("accessToken")
      const user = localStorage.removeItem("user")

        return { accessToken,  user  }; // Return both accessToken and user details
      } catch (error) {
        console.error("Error signing in with Google:", error);
        throw error; // Throw the error to be handled in the rejected case
      }
    }
  );






const authSlise = createSlice({
    name: 'auth',
    initialState: {
        isLoading:false,
        accessToken: localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : null,
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
        error: null
      },

    reducers:{
   
    
    },

    extraReducers:(builder)=>{
        builder
        .addCase(login.pending , (state,action)=>{
             state.isLoading = true;
             state.error = null;
        })
      
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.accessToken = action.payload.accessToken; 
            state.user = action.payload.user;
        })
        
        .addCase(login.rejected , (state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(logOut.pending , (state,action)=>{
             state.isLoading = true;
             state.error = null;
        })
      
        .addCase(logOut.fulfilled, (state, action) => {
            state.isLoading = false;
            state.accessToken = null; 
            state.user = null;
        })
        
        .addCase(logOut.rejected , (state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
    }
    
  })
  
  
  export default authSlise.reducer



