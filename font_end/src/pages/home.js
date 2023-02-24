import NavBar from "../component/navBar";
import {Outlet} from "react-router-dom";
import Menu from "../component/menu";
export default function Home() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <NavBar/>
                </div>
            </div>
            <div className="row">
                <div className="col" style={{border: '1px black solid'}}>
                   <Menu/>
                </div>
                <div className="col-6" style={{border: '1px black solid', textAlign: 'center'}}>
                    <Outlet></Outlet>
                </div>
                <div className="col" style={{border: '1px black solid'}}>
                    3 of 3
                </div>
            </div>
        </>
    )
}