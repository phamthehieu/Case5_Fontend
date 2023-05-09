import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginUser} from "../../service/usersService";
import * as Yup from "yup";
import swal from 'sweetalert'
export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = async (values) => {
        await dispatch(loginUser(values)).then( (check) => {
            if (check.payload === 'User not found') {
                navigate('/')
            } else if (check.payload === 'User is already locked') {
                swal('Tài khoản của bạn đã bị khóa')
                navigate('/')
            } else if (check.payload === 'Password does not match') {
                swal('Mật khẩu không chính xác')
                navigate('/')
            } else {
                navigate('/home')
            }
        })
    }
    const SignupSchema = Yup.object().shape({
        userName: Yup.string()
            .min(8, 'Quá Yếu!')
            .max(70, 'Quá Dài!')
            .required('Không được để trống'),
        password: Yup.string()
            .min(8, 'Quá Yếu!')
            .max(70, 'Quá Dài!')
            .required('Không được để trống'),
    });
    return (
        <>
            <Formik initialValues={{userName: '', password: ''}} validationSchema={SignupSchema} onSubmit={(values) => {
            handleLogin(values).then()
            }}>
                <Form>
                    <div className="form-group">
                        <Field type="text" className="form-control" name={'userName'} style={{borderRadius: '10px'}}
                               placeholder={'Tên đăng nhập'}/>
                        <div style={{color: 'red'}} ><ErrorMessage name={'userName'}/></div>
                    </div>
                    <div className="form-group">
                        <Field type="password" className="form-control" name={'password'} style={{borderRadius: '10px'}}
                               placeholder={'Tên đăng nhập'}/>
                        <div style={{color: 'red'}}><ErrorMessage name={'password'}/></div>
                    </div>
                    <button type="submit" className="ml-0 btn btn-primary" style={{
                        backgroundColor: "rgb(35,116,225)",
                        marginTop: '10px',
                        borderRadius: '10px',
                        width: '100%',
                        height: '40px'
                    }}>Đăng Nhập
                    </button>
                </Form>
            </Formik>
            <hr/>
            <Link to={'register'} type="submit" className="ml-0 btn btn-primary" style={{
                backgroundColor: "rgb(35,116,225)",
                borderRadius: '10px',
                width: '100%',
                height: '40px'
            }}>Tạo Tài Khoản Mới
            </Link>
        </>
    )
}






