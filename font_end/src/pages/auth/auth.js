import {Field, Form, Formik} from "formik";
import {Link, Outlet} from "react-router-dom";

export default function Auth() {
    return (
        <>
            <div className="row">
                <div className="offset-2 col-3" style={{marginTop: '25vh', textAlign: 'right', marginRight: '20px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor"
                         className="bi bi-facebook" viewBox="0 0 16 16" style={{color: "rgb(35,116,225)"}}>
                        <path
                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                </div>
                <div className="col-3" style={{marginTop: '22vh'}}>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}
