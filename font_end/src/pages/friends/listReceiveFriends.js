import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {confirmFriends, listReceiveFriends, listSendFriends, removeFriends} from "../../service/friendsService";

export default function ListReceiveFriends() {
    const dispatch = useDispatch()
    let {id} = useParams()
    const listSend = useSelector(state => {
        return state.friends.listSendFriends
    })
    const handleRemove = (idUser, id) => {
        dispatch(removeFriends({idSender: id, idReceiver: idUser})).then( () => {
            window.location.reload()
        })
    }
    const handleConfirmFriends = (idUser, id) => {
        dispatch(confirmFriends({idSender: id, idReceiver: idUser})).then( () => {
            window.location.reload()
        })
    }
    useEffect(() => {
        dispatch(listSendFriends(id))
    }, [])
    return (
        <>
            <div className="row">
                {listSend.map(item => (

                   <div className={'col-2'} style={{marginTop: '20px'}}>
                       <div className="card" style={{width: "13rem", height: "22rem", borderRadius: "10px"}}>
                           <Link to={'/profile/'+item.idUser}>
                           <img src={item !== undefined && item.image} className="card-img-top" alt="..."
                                style={{width: '100%', height: '200px', borderRadius: "10px 10px 0px 0px"}}/>
                           </Link>
                           <div className="card-body">
                               <p className="card-title" style={{fontSize: '15px'}}>
                                   <b>{item !== undefined && item.fullName}</b></p>
                               <button className="btn btn-primary" style={{textAlign: 'center', width: '100%'}} onClick={() => {handleConfirmFriends(item.idUser, id)}}>
                                   <b>Xác nhận</b>
                               </button>
                               <button className="btn btn-light" onClick={() => {handleRemove(item.idUser, id)}} style={{
                                   textAlign: 'center',
                                   width: '100%',
                                   marginTop: '10px',
                                   backgroundColor: "rgb(228,230,235)"
                               }}>
                                   <b> Xóa</b>
                               </button>
                           </div>
                       </div>
                   </div>
                ))}
            </div>
        </>
    )
}