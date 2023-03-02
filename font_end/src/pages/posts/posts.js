import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deletePost,getPost} from "../../service/postsService";
import {Link, useNavigate} from "react-router-dom";
import swal from 'sweetalert'



export default function ListPost(){
    // const navigate = useNavigate();

    const dispatch = useDispatch();

    const posts = useSelector(state => {
        return state.posts.posts
    });

    useEffect(()=>{
        dispatch(getPost())
    },[]);

    return(
        <>
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Content</th>
                            <th scope="col">Role</th>
                            <th scope="col">Time</th>
                            <th scope="col">Image</th>
                            <th scope="col">UserName</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {posts.map((item,ind)=>(
                            <tr>
                                <th scope="col">{ind + 1}</th>
                                <th scope="col">{item.content}</th>
                                <th scope="col">{item.role}</th>
                                <th scope="col">{item.time}</th>
                                <th scope="col"><img src={item.image} style={{height:100}} alt=""/></th>
                                <th scope="col">{item.userName}</th>
                                <th>
                                    <Link to={`edit-post/${item.idPost}`}><button className="btn btn-outline-success" style={{marginRight: 10}}>
                                        <i className="fa-solid fa-pen-to-square"></i></button></Link>
                                    <button className="btn btn-outline-danger" onClick={() => {

                                        swal({
                                            title: "Are you sure?",
                                            text: "Once deleted, you will not be able to recover this imaginary file!",
                                            icon: "warning",
                                            buttons: true,
                                            dangerMode: true,
                                        })
                                            .then((willDelete) => {
                                                if (willDelete) {

                                                    swal("Poof! Your imaginary file has been deleted!", {
                                                        icon: "success",
                                                    });
                                                    dispatch(deletePost(item.idPost)).then(()=>{
                                                        dispatch(getPost()).then(()=>{
                                                        })

                                                    })
                                                } else {
                                                    swal("Your imaginary file is safe!");
                                                }
                                            });
                                    }}><i className="fa-solid fa-trash"></i></button>
                                </th>

                            </tr>
                        ))}

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}