import NavBar from "../component/navBar";
import {Outlet} from "react-router-dom";
import Menu from "../component/menu";
import Friends from "./friends/friends";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllPosts, getPostUser} from "../service/postService";
import {profileUser} from "../service/usersService";

export default function Home() {
    const dispatch = useDispatch()
    let posts = useSelector(state => {
        return state.posts.listAllPosts
    })
    useEffect(() => {
        dispatch(getAllPosts())
    }, [])
    console.log(posts)
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <NavBar/>
                </div>
            </div>
            <div className="row">
                <div className="col" style={{marginTop: '20px', paddingLeft: '30px'}}>
                    <Menu/>
                </div>
                <div className="col-8" style={{textAlign: 'center', marginTop: '20px'}}>
                    {posts !== undefined && posts.map(item => (
                        < div style={{marginBottom: '20px'}}>
                            <div className="col"></div>
                            <div className="col-10 offset-1" style={{
                                backgroundColor: "rgb(255,255,255)",
                                borderRadius: '20px'
                            }}>
                                    <div className="col"></div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-1">
                                                    <img src={item !== undefined && item.image} alt=""
                                                         style={{
                                                             width: '70px',
                                                             height: '70px',
                                                             borderRadius:'100%', marginTop: '15px'
                                                         }}/>
                                                </div>
                                                <div className="col-8" style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    textAlign: 'left',
                                                    marginTop: '15px'
                                                }}>
                                                    <div className="row">
                                                        <div className="col-12" style={{fontSize: '20px'}}>
                                                            <b>{item.fullName}</b>
                                                        </div>
                                                        <div className="col-12"
                                                             style={{fontSize: '12px'}}>
                                                            <b>{item.time}</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12" style={{
                                            width: '50px',
                                            height: '50px',
                                            textAlign: 'left',
                                            marginLeft: '35px',
                                            marginTop: '15px'
                                        }}>
                                            <p style={{fontSize: '20px'}}>{item.content}</p>
                                        </div>
                                        <center className="col-12" style={{
                                            marginTop: '10px'
                                        }}>
                                            <div className="col"></div>
                                            <div className="col-8"
                                                 style={{marginBottom: '50px'}}>
                                                <img src={item.imagePost} alt="" width={'100%'}/>
                                            </div>
                                            <div className="col"></div>
                                        </center>
                                    </div>
                                    <div className="col"></div>
                            </div>
                            <div className="col"></div>
                        </div>
                    ))}

                    <div className="col-12">
                        <Outlet></Outlet>
                    </div>

                </div>
                <div className="col" style={{marginTop: '50px'}}>
                    <Friends/>
                </div>
            </div>
        </>
    )
}