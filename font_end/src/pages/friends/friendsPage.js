import NavBar from "../../component/navBar";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, Outlet, useParams} from "react-router-dom";
import {listSendFriends} from "../../service/friendsService";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function FriendsPage() {
    let {id} = useParams()
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <NavBar/>
                </div>
            </div>
            <div className="row" >
                <div className="col-2" style={{backgroundColor: "rgb(255,255,255)", height: '100vh',textShadow:'2px 0px 7px 0px #000000'}}>
                    <div className="row" style={{marginLeft: '20px'}}>
                        <div className="col-12" style={{marginTop: '10px'}}>
                            <div className="row">
                                <div className="col-6">
                                    <h4>Bạn bè</h4>
                                </div>
                                <div className="col-6" style={{paddingLeft: '100px'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                         className="bi bi-person-fill-gear" viewBox="0 0 16 16">
                                        <path
                                            d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <Link to={""} style={{textDecoration: 'none'}}>
                            <div className="col-12" style={{marginTop: '20px', color: 'black'}}>
                                <div className="row">
                                    <div className="col-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                             fill="currentColor" className="bi bi-person-check" viewBox="0 0 16 16">
                                            <path
                                                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                                            <path
                                                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                                        </svg>
                                    </div>
                                    <div className="col-8" style={{marginTop: '5px'}}><h6>Lời mời kết bạn</h6></div>
                                    <div className="col-2" style={{paddingLeft: '21px'}}>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={'list-add-friends/'+id} style={{textDecoration: 'none'}}>
                            <div className="col-12" style={{marginTop: '20px',color: 'black'}}>
                                <div className="row">
                                    <div className="col-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                             fill="currentColor" className="bi bi-person-lines-fill"
                                             viewBox="0 0 16 16">
                                            <path
                                                d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                                        </svg>
                                    </div>
                                    <div className="col-8" style={{marginTop: '5px'}}><h6>Gợi ý bạn bè {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</h6></div>
                                    <div className="col-2" style={{paddingLeft:'13px'}}>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={'list-friends/'+id} style={{textDecoration: 'none'}}>
                            <div className="col-12" style={{marginTop: '20px',color: 'black'}}>
                                <div className="row">
                                    <div className="col-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                             fill="currentColor" className="bi bi-person-lines-fill"
                                             viewBox="0 0 16 16">
                                            <path
                                                d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                                        </svg>
                                    </div>
                                    <div className="col-8" style={{marginTop: '5px'}}><h6>Danh sách bạn bè</h6></div>
                                    <div className="col-2" style={{paddingLeft:'13px'}}>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={'list-send-friend/'+id} style={{textDecoration: 'none'}}>
                            <div className="col-12" style={{marginTop: '20px',color: 'black'}}>
                                <div className="row">
                                    <div className="col-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                             fill="currentColor" className="bi bi-person-lines-fill"
                                             viewBox="0 0 16 16">
                                            <path
                                                d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                                        </svg>
                                    </div>
                                    <div className="col-8" style={{marginTop: '5px'}}><h6>Người bạn đã gửi</h6></div>
                                    <div className="col-2" style={{paddingLeft:'13px'}}>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-9" style={{marginLeft: '30px',marginTop: '30px'}}>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}