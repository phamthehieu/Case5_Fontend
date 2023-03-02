import {Link, useNavigate} from "react-router-dom";
import {useDispatch } from "react-redux";
import {searchUser} from "../service/postsService";

export default function NavBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.clear()
        navigate('/')
    }
     const handleSearch = (values) => {
         dispatch(searchUser(values.search))
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={'/home'} className="navbar-brand" style={{fontSize: "30px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                         className="bi bi-facebook" viewBox="0 0 16 16" style={{color: "rgb(35,116,225)"}}>
                        <path
                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active" style={{marginLeft: '10px', marginTop: '5px', width: '300px'}}>
                            <input
                                initialValues={{
                                    search: ''
                                }}
                                onSubmit={(values) => {
                                    handleSearch(values)
                                }}
                                className="form-control mr-sm-2" type="search" name={'search'} placeholder="Tìm Kiếm Trên Facebook"
                                   style={{borderRadius: '20px'}}/>
                        </li>
                        <li className="nav-item active" style={{marginLeft: '150px'}}>
                            <Link to={'home'} className="nav-link" href="#" style={{fontSize: "20px"}} data-toggle="tooltip" data-placement="top" title="Trang Chủ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                                     className="bi bi-house" viewBox="0 0 16 16" style={{color: "rgb(35,116,225)"}}>
                                    <path
                                        d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                                </svg>
                            </Link>
                        </li>
                        <li className="nav-item active" style={{marginLeft: '150px'}}>
                            <Link to={''} className="nav-link" style={{fontSize: "20px"}} data-toggle="tooltip" data-placement="top" title="Video">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                                     className="bi bi-skip-end-btn" viewBox="0 0 16 16"
                                     style={{color: "rgb(35,116,225)"}}>
                                    <path
                                        d="M6.79 5.093 9.5 7.028V5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V8.972l-2.71 1.935A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .79-.407z"/>
                                    <path
                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                                </svg>
                            </Link>
                        </li>
                        <li className="nav-item" style={{marginLeft: '150px'}} title="Tooltip on top">
                            <a className="nav-link" href="#" style={{fontSize: "20px"}} data-toggle="tooltip" data-placement="top" title="Chợ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                                     className="bi bi-shop-window" viewBox="0 0 16 16"
                                     style={{color: "rgb(35,116,225)"}}>
                                    <path
                                        d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                            </a>
                        </li>
                        <li className="nav-item" style={{marginLeft: '150px'}}>
                            <a className="nav-link" href="#" style={{fontSize: "20px"}} data-toggle="tooltip" data-placement="top" title="Trò Chơi">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                                     className="bi bi-controller" viewBox="0 0 16 16"
                                     style={{color: "rgb(35,116,225)"}}>
                                    <path
                                        d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
                                    <path
                                        d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/>
                                </svg>
                            </a>
                        </li>
                        <li className="nav-item" style={{marginLeft: '150px'}}>
                            <a className="nav-link" href="#" style={{fontSize: "20px"}} data-toggle="tooltip" data-placement="top" title="Bạn Bè">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                     className="bi bi-people-fill" viewBox="0 0 16 16" style={{color: "rgb(35,116,225)"}}>
                                    <path
                                        d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <form className="form-inline my-1 my-lg-0">
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                     className="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </a>
                            <div className="dropdown-menu">
                                <a type={'button'} onClick={logOut} style={{marginLeft: "10px",color: "rgb(35,116,225)"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                         className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                                        <path fill-rule="evenodd"
                                              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                    </svg> Log Out
                                </a>
                            </div>
                        </div>
                        <Link style={{marginRight: "20px"}} data-toggle="tooltip" data-placement="top" title="Thông Báo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-bell-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                            </svg>
                        </Link>
                        <Link style={{marginRight: "20px"}} data-toggle="tooltip" data-placement="top" title="Tin nhắn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-chat-dots" viewBox="0 0 16 16">
                                <path
                                    d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                <path
                                    d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                            </svg>
                        </Link>
                        <Link style={{marginRight: "0px"}} data-toggle="tooltip" data-placement="top" title="Trang cá nhân">
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="" style={{width: "50px", borderRadius: '100%'}}/>
                        </Link>
                    </form>
                </div>
            </nav>
        </>
    )
}