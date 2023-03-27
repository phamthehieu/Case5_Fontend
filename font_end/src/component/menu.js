import NavBar from "../component/navBar";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {profileUser} from "../service/usersService";

export default function Menu() {
    const dispatch = useDispatch()
    const id = useSelector(state => {
        return  state.users.users.idUser;
    })
    useEffect(() => {
        dispatch(profileUser(id))
    },[])
    const users = useSelector(state => {
        return  state.users.profile.user;
    })
    return (
        <>
            <div className="row" style={{marginTop: '20px'}}>
                <div className="col-12" >
                    <Link  style={{textDecoration: 'none'}}>
                        <div className="row" style={{marginTop: '20px'}}>
                            <div className="col-2">
                                <img
                                    src={users !== undefined && users.image}
                                    alt="" style={{width: "50px", borderRadius: '100%'}}/>
                            </div>
                            <div className="col-10" style={{marginTop: '10px', color: 'black'}}>
                                <h5>{users !== undefined && users.fullName}</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-12" style={{marginTop: '20px'}}>
                    <Link to={''} style={{textDecoration: 'none',}}>
                        <div className="row" >
                            <div className="col-2" style={{textAlign: 'center', marginTop: '10px'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                     className="bi bi-save" viewBox="0 0 16 16" >
                                    <path
                                        d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                                </svg>
                            </div>
                            <div className="col-10" style={{marginTop: '10px', color: 'black'}}>
                                <h5>Đã Lưu</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-12" style={{marginTop: '20px'}}>
                    <Link to={''} style={{textDecoration: 'none'}}>
                        <div className="row" >
                            <div className="col-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                     className="bi bi-people-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                </svg>
                            </div>
                            <div className="col-10" style={{marginTop: '10px', color: 'black'}}>
                                <h5>Bạn Bè</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-12" style={{marginTop: '20px'}}>
                    <Link to={''} style={{textDecoration: 'none'}}>
                        <div className="row" >
                            <div className="col-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                     className="bi bi-skip-end-btn" viewBox="0 0 16 16"
                                     style={{color: "rgb(35,116,225)"}}>
                                    <path
                                        d="M6.79 5.093 9.5 7.028V5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V8.972l-2.71 1.935A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .79-.407z"/>
                                    <path
                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                                </svg>
                            </div>
                            <div className="col-10" style={{marginTop: '10px', color: 'black'}}>
                                <h5>Video</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-12" style={{marginTop: '20px'}}>
                    <Link to={''} style={{textDecoration: 'none'}}>
                        <div className="row" >
                            <div className="col-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                     className="bi bi-shop-window" viewBox="0 0 16 16"
                                     style={{color: "rgb(35,116,225)"}}>
                                    <path
                                        d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                            </div>
                            <div className="col-10" style={{marginTop: '10px', color: 'black'}}>
                                <h5>Chợ</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-12" style={{marginTop: '20px'}}>
                    <Link to={''} style={{textDecoration: 'none'}}>
                        <div className="row" >
                            <div className="col-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                     className="bi bi-controller" viewBox="0 0 16 16"
                                     style={{color: "rgb(35,116,225)"}}>
                                    <path
                                        d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
                                    <path
                                        d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/>
                                </svg>
                            </div>
                            <div className="col-10" style={{marginTop: '10px', color: 'black'}}>
                                <h5>Trò Chơi</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-12" style={{marginTop: '20px'}}>
                    <Link to={''} style={{textDecoration: 'none'}}>
                        <div className="row" >
                            <div className="col-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                     className="bi bi-arrow-down-circle" viewBox="0 0 16 16" style={{color: "rgb(35,116,225)"}}>
                                    <path fill-rule="evenodd"
                                          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                                </svg>
                            </div>
                            <div className="col-10" style={{marginTop: '10px', color: 'black'}}>
                                <h5>Xem Thêm</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}