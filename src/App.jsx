

// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import RootLayout from './components/rootLayout/RootLayout'
// import HomeScreen from './components/homeScreen/HomeScreen'
// import LoginScreen from './components/loginScreen/LoginScreen'
// import PageNotFound from './components/PageNotFound'

// const App = () => {
//   return (
    
//     <div className='body h-[100vh]'>
//       <BrowserRouter>
//       <Routes>
//       <Route path='/auth' element={<LoginScreen />}/>
//         <Route path='/' element={<RootLayout />}>
//           <Route path='/' element={<HomeScreen />}/>
//           {/* <Route path='/auth' element={<LoginScreen />}/> */}
//         </Route>
//         <Route path='*' element={<PageNotFound />}/>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App



// import React from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import RootLayout from "./components/rootLayout/RootLayout";
// import HomeScreen from "./components/homeScreen/HomeScreen";
// import LoginScreen from "./components/loginScreen/LoginScreen";
// import PageNotFound from "./components/PageNotFound";

// const App = () => {
//   const isAuthenticated = true; // Change this to true/false to test

//   return (
//     <div className="body h-[100vh]">
//       <BrowserRouter>
//         <Routes>

//           <Route path="/" element={<RootLayout />}>
//             <Route
//               index
//               element={
//                 isAuthenticated ? <HomeScreen /> : <Navigate to="/auth" />
//               }
//             />
//           </Route>

//           <Route path="/auth" element={<LoginScreen />} />

//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;




import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import RootLayout from "./components/rootLayout/RootLayout";
import HomeScreen from "./components/homeScreen/HomeScreen";
import LoginScreen from "./components/loginScreen/LoginScreen";
import PageNotFound from "./components/PageNotFound";
import { useSelector } from "react-redux";
import Search from "./components/search/Search";

const App = () => {

  const {accessToken} = useSelector((state,action)=> state.Auth)
  const isAuthenticated = accessToken; // Change this to true/false to test

  return (
    <div className="body h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route
              index
              element={
                isAuthenticated ? <HomeScreen /> : <Navigate to="/auth" />
              }
            />
            <Route
              path="/search"
              element={
                isAuthenticated ? <Search /> : <Navigate to="/auth" />
              }
            />
          </Route>

          <Route
            path="/auth"
            element={
              isAuthenticated ? <Navigate to="/" /> : <LoginScreen />
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
