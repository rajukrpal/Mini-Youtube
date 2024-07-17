import { configureStore } from '@reduxjs/toolkit'
import testingSlise from '../features/testing'
import authSlise from '../features/authSlise'

const store = configureStore({
    reducer: {
      Testing: testingSlise,
      Auth:authSlise,
    }
  })

  export default store ;


// import { configureStore } from '@reduxjs/toolkit' ;
// import userDetailSlice from '../features/userDetailSlice';

// const store = configureStore({
//   reducer: {
//     app :userDetailSlice // es me app jo likha hai us ki jagh kuchh bhi likha skte hai ! , aap nam hai key ka (es ka name dena bhut jaruri hai )
//   }
 
// })

// export default store ;