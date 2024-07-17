import { createSlice } from '@reduxjs/toolkit'


const testingSlise = createSlice({
  name: 'testing',
  initialState:{
    name:"raju",
    age:"25",
  },
  reducers:{
    name:(state,action) =>{
        state.name = action.payload
    }, 
    age: (state,action)=>{
        state.age = action.payload
    }
  }
  
})


// export const { increment, decrement, incrementByAmount } = testingSlise.actions
export default testingSlise.reducer