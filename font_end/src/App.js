import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Auth from "./pages/auth/auth";
import Home from "./pages/home";
import Profile from "./pages/users/profile";

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
                {user !== null ?
                    <>
                        <Route path={'/home'} element={<Home/>}/>
                        <Route path={'/profile/:id'} element={<Profile/>}/>
                    </>
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
