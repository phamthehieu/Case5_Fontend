import {Link, Outlet, useNavigate, useParams} from "react-router-dom";
import NavBar from "../../component/navBar";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editPassword, editProfile, loginUser, profileUser} from "../../service/usersService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {storage} from "../auth/fileBaseConfig";
import swal from "sweetalert";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    newPassword: Yup.string()
        .min(8, 'Quá Yếu!')
        .max(70, 'Quá Dài!')
        .required('Không được để trống'),
    oldPassword: Yup.string()
        .min(8, 'Quá Yếu!')
        .max(70, 'Quá Dài!')
        .required('Không được để trống'),
});
export default function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [file, setFile] = useState("");
    const [url, setUrl] = useState("");
    const [percent, setPercent] = useState(0);
    let user = useSelector(state => {
        if (state.users.profile.user !== undefined)
            return state.users.profile.user;
        return {
            userName: '',
            fullName: '',
            birthDay: '',
            image: ''
        }
    })
    let {id} = useParams()
    useEffect(() => {
        dispatch(profileUser(id))
    }, [])
    const handleUpload = (event) => {
        setFile(event.target.files[0]);
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setUrl(url)
                });
            }
        );
    };
    const handleProfile = async (events) => {
        let data = {...events}
        data.image = url
        await dispatch(editProfile(data))
        window.location.reload()
    }
    const handlePassword = async (events) => {
        let data = {
            password: events.oldPassword,
            newPassword: events.newPassword,
            idUser: events.idUser
        }
        await dispatch(editPassword(data)).then((check) => {
            if (check.payload === 'wrong password') {
                swal('Mật khẩu cũ không chính xác')
            } else {
                swal('Đổi mật khẩu thành công')
            }
        })
    }
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <NavBar/>
                </div>
            </div>
            <div className="row" style={{marginTop: '100px'}}>
                <div className="col">
                </div>
                <div className="col-6"
                     style={{marginLeft: '30px', backgroundColor: "rgb(255,255,255)", borderRadius: '20px'}}>
                    <div className="row">
                        <div className="col-3" style={{textAlign: 'right', marginTop: '20px', height: '200px'}}>
                            <img
                                src={user !== undefined && user.image}
                                alt="" style={{width: "168px", borderRadius: '100%'}}/>
                        </div>
                        <div className="col-9" style={{marginTop: '49px', marginLeft: '0px'}}>
                            <div className="row">
                                <div className="col-6">
                                    <h1 style={{fontWeight: '700'}}>{user !== undefined && user.fullName}</h1>
                                    <p>{user !== undefined && user.birthDay}</p>
                                </div>
                                <div className="col-6" style={{marginTop: '15px'}}>
                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                            data-target="#exampleModal" style={{marginLeft: '95px'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path
                                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd"
                                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                        thông tin
                                    </button>
                                    <div class="modal fade" id="exampleModal" tabindex="-1"
                                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <Formik initialValues={user} onSubmit={(values) => {
                                                    handleProfile(values).then()
                                                }}
                                                        enableReinitialize={true}
                                                >
                                                    <Form>
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Chỉnh sửa
                                                                thông tin</h5>
                                                            <button type="button" className="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="form-group row">
                                                                <div className="col-6">
                                                                    <label htmlFor="exampleInputEmail1">Tên đăng
                                                                        nhập</label>
                                                                    <Field type="text" className="form-control"
                                                                           name={'userName'}
                                                                           style={{borderRadius: '10px'}}/>
                                                                </div>
                                                                <div className="col-6">
                                                                    <label htmlFor="exampleInputEmail1">Họ và
                                                                        tên</label>
                                                                    <Field type="text" className="form-control"
                                                                           name={'fullName'}
                                                                           style={{borderRadius: '10px'}}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInputEmail1">Ngày Tháng Năm
                                                                    Sinh</label>
                                                                <Field type="date" className="form-control"
                                                                       name={'birthDay'}
                                                                       style={{borderRadius: '10px'}}/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInputEmail1">Ảnh đại diện</label>
                                                                <input type="file"
                                                                       className="form-control avatar"
                                                                       name={'image'}
                                                                       style={{borderRadius: '10px'}}
                                                                       onMouseOut={handleUpload}/>
                                                            </div>
                                                            <div className="form-group" style={{textAlign: "center"}}>
                                                                <img
                                                                    src={url}
                                                                    alt=""
                                                                    style={{width: "168px", borderRadius: '100%'}}/>
                                                            </div>
                                                            <button type="submit" className="ml-0 btn btn-primary"
                                                                    style={{
                                                                        backgroundColor: "rgb(35,116,225)",
                                                                        marginTop: '10px',
                                                                        borderRadius: '10px',
                                                                        width: '100%',
                                                                        height: '40px'
                                                                    }}>Chỉnh Sửa
                                                            </button>
                                                        </div>
                                                    </Form>
                                                </Formik>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-danger" data-toggle="modal"
                                            data-target="#exampleModal1" style={{marginLeft: '20px'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path
                                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd"
                                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                        mật khẩu
                                    </button>
                                    <Formik initialValues={{oldPassword: '',newPassword: '', idUser: id}}  validationSchema={SignupSchema} enableReinitialize={true} onSubmit={ events => {
                                        handlePassword(events).then()
                                    }}>
                                        <Form>
                                            <div className="modal fade" id="exampleModal1" tabIndex="-1"
                                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Chỉnh sửa
                                                                mật khẩu</h5>
                                                            <button type="button" className="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body" style={{textAlign: 'center'}}>
                                                            <div className="form-group row">
                                                                <div className="col-3"></div>
                                                                <div className="col-6">
                                                                    <label htmlFor="exampleInputEmail1">Nhập mật
                                                                        khẩu cũ</label>
                                                                    <Field type="text" className="form-control"
                                                                           name={'oldPassword'}
                                                                           style={{borderRadius: '10px'}}/>
                                                                    <div style={{color: 'red'}} ><ErrorMessage name={'oldPassword'}/></div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-3"></div>
                                                                <div className="col-6">
                                                                    <label htmlFor="exampleInputEmail1">Nhập mật
                                                                        khẩu mới</label>
                                                                    <Field type="text" className="form-control"
                                                                           name={'newPassword'}
                                                                           style={{borderRadius: '10px'}}/>
                                                                    <div style={{color: 'red'}} ><ErrorMessage name={'newPassword'}/></div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-3"></div>
                                                                <div className="col-6">
                                                                    <button type="submit"
                                                                            className="ml-0 btn btn-primary"
                                                                            style={{
                                                                                backgroundColor: "rgb(35,116,225)",
                                                                                marginTop: '10px',
                                                                                borderRadius: '10px',
                                                                                width: '100%',
                                                                                height: '40px'
                                                                            }}>Chỉnh Sửa
                                                                    </button>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                </div>
            </div>
            <div className="row" style={{marginTop: '50px'}}>
                <div className="col">
                </div>
                <div className="col-6" style={{marginLeft: '20px'}}>
                    <div className="row">
                        <button style={{
                            width: '100%',
                            height: '50px',
                            border: 'none',
                            borderRadius: '20px',
                            backgroundColor: "rgb(255,255,255)"
                        }}>Hôm nay bạn nghĩ gì ?
                        </button>
                    </div>
                </div>
                <div className="col">
                </div>
            </div>
        </>
    )
}