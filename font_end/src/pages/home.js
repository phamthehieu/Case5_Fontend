import NavBar from "../component/navBar";
import {Outlet} from "react-router-dom";
import Menu from "../component/menu";
import Friends from "./friends/friends";
export default function Home() {
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
                <div className="col-7" style={{textAlign: 'center',marginTop: '20px'}}>
                    <div className="col-12">
                        
                    </div>
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