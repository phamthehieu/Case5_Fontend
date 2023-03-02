import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Auth from "./pages/auth/auth";
import Home from "./pages/home";
import AddPost from "./pages/posts/addPost";
import ListPost from "./pages/posts/posts";
import EditPost from "./pages/posts/editPost";

function App() {
  const user = useSelector(state => {
    return state.users.currentUser;
  })
  return (
      <>
       <Routes>
           {/*<Route path={''} element={<Auth/>}>*/}
           {/*    <Route path={''} element={<Login/>}/>*/}
           {/*    <Route path={'register'} element={<Register/>}/>*/}
           {/*</Route>*/}
           {/*{user !== 'User not found' ?*/}
               <Route path={'home'} element={<Home/>}/>
           {/*:*/}
           {/*    <Route path={'*'} element={<Auth/>}>*/}
                   <Route path={''} element={<ListPost/>}/>
                   <Route path={'add-post'} element={<AddPost/>}/>
                   <Route path={`edit-post/:idPost`} element={<EditPost/>}/>
                   {/*<Route path={'*'} element={<Login/>}/>*/}
                   {/*<Route path={'register'} element={<Register/>}/>*/}
               {/*</Route>*/}

           {/*}*/}
       </Routes>
      </>
  )

}

export default App;
