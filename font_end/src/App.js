import './App.css';
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Auth from "./pages/auth/auth";
import Home from "./pages/home";
import Profile from "./pages/users/profile";
import FriendsPage from "./pages/friends/friendsPage";
import ListReceiveFriends from "./pages/friends/listReceiveFriends";
import ListAddFriends from "./pages/friends/listAddFriends";
import ListFriends from "./pages/friends/listFriends";
import ListSendFriends from "./pages/friends/listSendFriends";
import EditPost from "./pages/users/editPost";

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
                        <Route path={'home'} element={<Home/>}/>
                        <Route path={'profile/:id'} element={<Profile/>}/>
                        <Route path={'edit-post/:id'} element={<EditPost/>}/>
                        <Route path={'friends/:id'} element={<FriendsPage/>}>
                            <Route path={''} element={<ListReceiveFriends/>}/>
                            <Route path={'list-send-friend/:xid'} element={<ListSendFriends/>}/>
                            <Route path={'list-add-friends/:xid'} element={<ListAddFriends/>}/>
                            <Route path={'list-friends/:xid'} element={<ListFriends/>}/>
                        </Route>
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
