import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {listFriends, removeFriends} from "../../service/friendsService";
import {useEffect} from "react";

export default function ListFriends() {
    const dispatch = useDispatch()
    let {id} = useParams()
    const friends = useSelector(state => {
        return state.friends.listFriends
    })
    const handleRemoveFriends = (idUser, id) => {
        dispatch(removeFriends({idSender: id, idReceiver: idUser})).then(() => {
            window.location.reload()
        })
    }
    useEffect(() => {
        dispatch(listFriends(id))
    }, [])
    return (
        <>
            <div className="row">
                {friends.map(item => (
                    <div className={'col-2'} style={{marginTop: '20px'}}>
                        <div className="card" style={{width: "13rem", height: "22rem", borderRadius: "10px"}}>
                            <Link to={'/profile/' + item.idUser}>
                                <img src={item !== undefined && item.image} className="card-img-top" alt="..."
                                     style={{width: '100%', height: '200px', borderRadius: "10px 10px 0px 0px"}}/>
                            </Link>
                            <div className="card-body">
                                <p className="card-title" style={{fontSize: '15px'}}>
                                    <b>{item !== undefined && item.fullName}</b></p>
                                <button disabled="disabled" className="btn btn-primary" style={{
                                    textAlign: 'center',
                                    width: '100%',
                                    backgroundColor: "rgb(228,230,235)",
                                    color: 'black'
                                }}><b>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-check2" viewBox="0 0 16 16">
                                        <path
                                            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                    </svg>
                                    Bạn bè</b></button>
                                <button className="btn btn-primary" onClick={() => {
                                    handleRemoveFriends(item.idUser, id)
                                }} style={{
                                    textAlign: 'center',
                                    width: '100%',
                                    marginTop: '10px',
                                    backgroundColor: "rgb(228,230,235)",
                                    color: 'black'
                                }}><b>Xóa, gỡ bỏ</b></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}