import NavBar from "../component/navBar";
import {Outlet} from "react-router-dom";
import Menu from "../component/menu";
import Friends from "./friends/friends";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllPosts, getPostUser} from "../service/postService";

export default function Home() {
    const dispatch = useDispatch()
    let posts = useSelector(state => {
        return state.posts.listAllPosts
    })
    useEffect(() => {
        dispatch(getAllPosts())
    }, [])
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <NavBar/>
                </div>
            </div>
            <div className="row">
                <div className="col" style={{marginTop: '20px', paddingLeft: '30px'}}>
                    <Menu></Menu>
                </div>
                <div className="col-8" style={{textAlign: 'center', marginTop: '20px'}}>
                    {posts !== undefined && posts.map(item => (
                        <>
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
                                                             width: '50px',
                                                             height: '50px',
                                                             borderRadius: '100%',
                                                             marginLeft: '24px',
                                                             marginTop: '15px'
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
                                    <div className="col-12">
                                        <hr/>
                                    </div>
                                    <div className="col-12" style={{marginBottom: '20px'}}>
                                        <div className="row">
                                            <div className="col-3" style={{textAlign: "center", fontSize: '18px'}}>
                                                <button type={"submit"}
                                                        style={{border: 'none', backgroundColor: 'white'}}>
                                        <span className="row">
                                            <span className="col-2" style={{textAlign: 'right'}}>
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                      fill="currentColor"
                                                      className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                            <path
                                                d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                                        </svg>
                                            </span>
                                            <span className="col-6"
                                                  style={{marginTop: '2px', textAlign: 'left'}}>Thích</span>
                                        </span>
                                                </button>
                                            </div>
                                            <div className="col-6" style={{textAlign: "center"}}>
                                                <button type={"submit"}
                                                        style={{border: 'none', backgroundColor: 'white'}}>
                                        <span className="row">
                                            <span className="col-2" style={{textAlign: 'right'}}>
                                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                  fill="currentColor" className="bi bi-chat-square" viewBox="0 0 16 16">
                                              <path
                                                  d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                             </svg>
                                            </span>
                                                <span className="col-8"
                                                      style={{
                                                          marginTop: '2px',
                                                          textAlign: 'left'
                                                      }}><p>Bình luận</p></span>
                                        </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col"></div>
                            </div>
                        </>
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