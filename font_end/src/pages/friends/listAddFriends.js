import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {sendFriends, friendSuggestion} from "../../service/friendsService";
import {useEffect, useState} from "react";
import {listUser, loginUser} from "../../service/usersService";

export default function ListAddFriends() {
    const dispatch = useDispatch()
    let {id} = useParams()
    const listAddFriends = useSelector(state => {
        if (state !== undefined)
            return state.friends.friendSuggestion;
    })
    const handleSendFriends = (idUser, id) => {
        dispatch(sendFriends({idSender: id, idReceiver: idUser})).then(() => {
            window.location.reload()
        })
    }
    useEffect(() => {
        dispatch(friendSuggestion(id))
    }, [])
    return (
        <>
            <div className="row">
                {listAddFriends.map(item => (

                    <div className={'col-2'} style={{marginTop: '20px'}}>
                        <div className="card" style={{width: "13rem", height: "20rem", borderRadius: "10px"}}>
                            <Link to={'/profile/' + item.idUser}>
                                <img src={item !== undefined && item.image} className="card-img-top" alt="..."
                                     style={{width: '100%', height: '200px', borderRadius: "10px 10px 0px 0px"}}/>
                            </Link>
                            <div className="card-body">
                                <p className="card-title" style={{fontSize: '15px'}}>
                                    <b>{item !== undefined && item.fullName}</b></p>
                                <button type={'submit'} onClick={() => {
                                    handleSendFriends(item.idUser, id)
                                }} className="btn btn-primary" style={{textAlign: 'center', width: '100%'}}><b>Gửi kết
                                    bạn</b></button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}