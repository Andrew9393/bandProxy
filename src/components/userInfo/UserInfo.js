import './userInfo.scss'
import {useParams, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Spiner from '../spiner/Spiner'
import UseJPService from '../../services/UsersService'


const UserInfo = () => {
  const [user, setUser] = useState(null)
  const [post, setPost] = useState(null)
  const {id} = useParams()
  const navigate = useNavigate();

  const useJPService = UseJPService();

  useEffect(() => {
    onReqest()
    onReqestPost()
  },[])

  const onReqest = () => {
    useJPService
      .getUsersByName(id)
      .then(res => setUser(res))
  }
  
  const onReqestPost = () => {
    useJPService
      .getUsersPost(id)
      .then(res => setPost(res))
  }

  const spinner = useJPService.loading ? <Spiner/> : null;

  return ( 
    <> 
      {spinner}
      {user && post && (<div className="user-singel">
            <div className="user-singel__head">
              <div className="user-singel__img">
                <img src={user.photo ? user.photo : "no photo" } alt="" /></div>
              <div className="user-singel__name">{user.name}</div>
              <div className="user-singel__phrase">{user.company.catchPhrase}</div>
            </div>
            <button className='close' onClick={() => navigate(-1)}>back</button>
            <div className="user-singel__post">
              <p>{post.body}</p>
            </div>
        </div>
      )}
  </>
  );

}
 
export default UserInfo;