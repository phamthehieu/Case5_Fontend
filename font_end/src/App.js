import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Auth from "./pages/auth/auth";
import Home from "./pages/home";

function App() {
  const user = useSelector(state => {
    return state.users.users;
  })
  return (
      <>
       <Routes>
           <Route path={''} element={<Auth/>}>
               <Route path={''} element={<Login/>}/>
               <Route path={'register'} element={<Register/>}/>
           </Route>
           {user !== 'User not found' ?
               <Route path={'home'} element={<Home/>}/>
           :
               <Route path={'*'} element={<Auth/>}>
                   <Route path={'*'} element={<Login/>}/>
                   <Route path={'register'} element={<Register/>}/>
               </Route>
           }
       </Routes>
      </>
  )

}

export default App;
