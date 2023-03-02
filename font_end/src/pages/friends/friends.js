import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    confirmFriends, listFriends, listReceiveFriends, listSendFriends, removeFriends
} from "../../service/friendsService";

export default function Friends() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const id = useSelector(state => {
        return state.users.users.idUser;
    })
    const friends = useSelector(state => {
        return state.friends.listFriends
    })
    const listSend = useSelector(state => {
        return state.friends.listSendFriends[0]
    })
    const handleDeleteFriend = (idUser, id) => {
        dispatch(removeFriends({idSender: id, idReceiver: idUser})).then(() => {
            window.location.reload()
        })
    }
    const handleConfirmFriend = (idUser, id) => {
        dispatch(confirmFriends({idSender: id, idReceiver: idUser})).then(() => {
            window.location.reload()
        })
    }
    useEffect(() => {
        dispatch(listSendFriends(id))
    }, [])
    useEffect(() => {
        dispatch(listFriends(id))
    }, [])
    return (<>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <h5>Lời mời kết bạn</h5>
                        </div>
                        <div className="col-6" style={{marginRight: '0%'}}>
                            <Link>xem tất cả</Link>
                        </div>
                    </div>
                </div>
                {listSend !== undefined ? <>
                  <Link to={'/profile/'+listSend.idUser}>
                      <div className="col-12" style={{marginTop: '10px'}}>
                          <div className="row">
                              <div className="col-2" style={{marginTop: '20px'}}>
                                  <img
                                      src={listSend !== undefined && listSend.image}
                                      alt="" style={{width: "55px",height: "55px", borderRadius: '100%'}}/>
                              </div>
                              <div className="col-10" style={{marginTop: '10px', color: 'black'}}>
                                  <div className="row">
                                      <div className="col-12" style={{marginLeft: '25px'}}>
                                          <h5>{listSend !== undefined && listSend.fullName}</h5>
                                      </div>
                                      <div className="col-12">
                                          <div className="row">
                                              <div style={{marginLeft: '40px'}}>
                                                  <button type="button" className="btn btn-primary btn-sm"
                                                          onClick={() => {
                                                              handleConfirmFriend(listSend.idUser, id)
                                                          }}
                                                          style={{width: '100px', borderRadius: '5px'}}>Xác nhận
                                                  </button>
                                              </div>
                                              <div style={{marginLeft: '10px'}}>
                                                  <button type="button" className="btn btn-secondary btn-sm"
                                                          onClick={() => {
                                                              handleDeleteFriend(listSend.idUser, id)
                                                          }}
                                                          style={{width: '100px', borderRadius: '5px'}}>Xóa
                                                  </button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </Link>
                </> : <>
                </>}
            </div>
            <hr/>
            <div className="row" style={{marginTop: '20px'}}>
                <h5>Danh sách bạn bè</h5>
                {friends && friends.map(item => (<div className="col-12" style={{marginTop: '20px'}}>
                        <Link to={'/profile/' + item.idUser} style={{textDecoration: 'none'}}>
                            <div className="row">
                                <div className="col-2">
                                    <img
                                        src={item.image}
                                        alt="" style={{width: "50px",height: "50px", borderRadius: '100%'}}/>
                                </div>
                                <div className="col-10" style={{marginTop: '10px', color: 'black'}}>
                                    <h5>{item.fullName}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>))}
            </div>
        </>)
}