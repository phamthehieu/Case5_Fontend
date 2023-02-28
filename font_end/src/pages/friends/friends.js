import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {listFriends, listReceiveFriends} from "../../service/friendsService";

export default function Friends() {
    const dispatch = useDispatch()
    const id = useSelector(state => {
        return state.users.users.idUser;
    })
    const listConfirm = useSelector(state => {
            return state;
    })

    const friends = useSelector(state => {
        return state.friends.listFriends
    })
    useEffect(() => {
        dispatch(listFriends(id))
    }, [])
    useEffect(  () => {
        dispatch(listReceiveFriends(id))
    }, [])
    return (
        <>
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
                {listConfirm !== undefined ?
                <>
                    <div className="col-12" style={{marginTop: '10px'}}>
                        <div className="row">
                            <div className="col-2" style={{marginTop: '20px'}}>
                                <img
                                    src={listConfirm && listConfirm.image}
                                    alt="" style={{width: "55px", borderRadius: '100%'}}/>
                            </div>
                            <div className="col-10" style={{marginTop: '10px', color: 'black'}}>
                                <div className="row">
                                    <div className="col-12">
                                        <h5>{listConfirm && listConfirm.fullName}</h5>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div style={{marginLeft: '15px'}}>
                                                <button type="button" className="btn btn-primary btn-sm"
                                                        style={{width: '100px', borderRadius: '5px'}}>Xác nhận
                                                </button>
                                            </div>
                                            <div style={{marginLeft: '10px'}}>
                                                <button type="button" className="btn btn-secondary btn-sm"
                                                        style={{width: '100px', borderRadius: '5px'}}>Xóa
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                    :
                    <>
                    </>
                }
            </div>
            <hr/>
            <div className="row" style={{marginTop: '20px'}}>
                <h5>Danh sách bạn bè</h5>
                {friends && friends.map(item => (
                    <div className="col-12" style={{marginTop: '20px'}}>
                        <Link to={''} style={{textDecoration: 'none'}}>
                            <div className="row">
                                <div className="col-2">
                                    <img
                                        src={item.image}
                                        alt="" style={{width: "50px", borderRadius: '100%'}}/>
                                </div>
                                <div className="col-10" style={{marginTop: '10px', color: 'black'}}>
                                    <h5>{item.fullName}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}