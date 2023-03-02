import { useState } from "react";
import {storage} from "../../service/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {addPost} from "../../service/postsService";

export default function AddPost() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state=>{
        return state.users.currentUser
    })

    const handleAdd = async (values) => {
        let data = {...values};
        dispatch(addPost(data));
        navigate('/')
    }
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);
    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }
    };
    const handleUpload = () => {
        const promises = [];
        if (images.length > 0) {
            images.map((image) => {
                const storageRef = ref(storage, `images/${image.name}`);
                const uploadTask = uploadBytesResumable(storageRef, image);
                promises.push(uploadTask);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                        setProgress(progress);
                    },
                    (error) => {
                        console.log(error);
                    },
                    async () => {
                        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
                            setUrls(prevState => [...prevState, downloadURLs])
                            console.log("File available at", downloadURLs);
                        });
                    }
                );
            });
        }
        Promise.all(promises)
            .then(() => alert("All images uploaded"))
            .catch((err) => console.log(err));
    }

    return (
        <>
            <div className="row">
                <div className="offset-3 col-6 mt-5">
                    <h1 style={{textAlign: 'center'}}>Add Post</h1>
                    <Formik
                        initialValues={{
                            content: '',
                            idUser: '',
                            idFriend: '',
                            role:'',
                            time: ''

                        }}
                        onSubmit={(values) => {
                            values.image= urls[0]
                            handleAdd(values)
                        }}>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">Content</label>
                                <Field type="text" className="form-control" id="exampleInput" name={'content'}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">Role</label>
                                <Field type="text" className="form-control" id="exampleInput" name={'role'}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">Time</label>
                                <Field type="text" className="form-control" id="exampleInput" name={'time'}/>
                            </div>
                            <div className="ml-3 form-group">
                                <label htmlFor="exampleInputPassword">Image</label>
                                <br/>
                                {urls.map(item=>(
                                    <>
                                        <img src={item} alt="" style={{width:50}}/>
                                    </>
                                ))}

                                <br/>
                                <input type='file'  onChange={handleChange}>
                                </input>
                                <button className="btn btn-outline-success" style={{marginRight:10}} type='button' onClick={handleUpload}>Up</button>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">User</label>
                                <Field type="text" className="form-control" id="exampleInput" name={'idUser'}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">Friend</label>
                                <Field type="text" className="form-control" id="exampleInput" name={'idFriend'}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}