import {Link, useNavigate, useParams} from "react-router-dom";
import NavBar from "../../component/navBar";
import {ErrorMessage, Field, Form, Formik} from "formik";
import swal from "sweetalert";
import {useEffect, useState} from "react";
import {editPost, getPost} from "../../service/postService";
import {useDispatch, useSelector} from "react-redux";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../auth/fileBaseConfig";

export default function EditPost() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [file, setFile] = useState("");
    const [url, setUrl] = useState("");
    const [percent, setPercent] = useState(0);
    const post = useSelector(state => {
        if (state.posts.post !== undefined) {
            return state.posts.post
        }
    })
    let idUser = useSelector(state => {
        return state.users.users.idUser
    })
    const handleUpload1 = (event) => {
        setFile(event.target.files[0]);
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on("state_changed", (snapshot) => {
            const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setPercent(percent);
        }, (err) => console.log(err), () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setUrl(url)
            });
        });
    };
    const handleEditPost = (values) => {
        let data = {...values}
        data.imagePost = url
        dispatch(editPost(data)).then(() => {
            navigate('/profile/'+idUser)
        })
    }
    useEffect(() => {
        dispatch(getPost(id)).then((e) => {
            setUrl(e.payload.imagePost)
        })
    }, [])
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <NavBar/>
                </div>
            </div>
            <Formik initialValues={post} enableReinitialize={true} onSubmit={values => {
                handleEditPost(values)
            }}>
                <Form>
                    <div className="row" style={{marginTop: '30px'}}>
                        <div className="col"></div>
                        <div className="col-6" style={{
                            marginLeft: '25px',
                            backgroundColor: "rgb(255,255,255)",
                            borderRadius: '20px'
                        }}>
                            <div className="form-group" style={{marginTop: '20px'}}>
                                <label htmlFor="exampleInputEmail1">Chế độ bài viết: </label>
                                    <Field as="select"
                                           style={{borderRadius: '10px'}}
                                           name={'role'}>
                                        <option
                                            value="public">Công
                                            khai
                                        </option>
                                        <option
                                            value="friend">Bạn
                                            bè
                                        </option>
                                        <option
                                            value="private">Một
                                            mình tôi
                                        </option>
                                    </Field>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Nội dung</label>
                                <Field as={'textarea'} name={'content'} type="email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Ảnh bài
                                    viết</label>
                                <input type="file"
                                       className="form-control avatar"
                                       style={{borderRadius: '10px'}}
                                       onMouseOut={handleUpload1}/>
                            </div>
                            <div className="form-group"
                                 style={{textAlign: "center"}}>
                                <img
                                    src={url}
                                    alt="Thêm ảnh cho bài viết"
                                    style={{
                                        width: "90%",
                                    }}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Chỉnh sửa</button>
                        </div>
                        <div className="col"></div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}