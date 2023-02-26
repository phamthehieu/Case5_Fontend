import NavBar from "../component/navBar";
import {Outlet} from "react-router-dom";
import Menu from "../component/menu";
import Friends from "../component/friends";
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
                <div className="col-6" style={{textAlign: 'center',marginTop: '20px'}}>
                    <div className="col-12">
                        
                    </div>
                    <div className="col-12">
                        <Outlet></Outlet>
                    </div>

                </div>
                <div className="col" style={{marginTop: '20px'}}>
                    <Friends/>
                </div>
            </div>
        </>
    )
}