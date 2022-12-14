import {useParams, Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import UseJPService from '../../../services/UsersService'
import UserInfo from '../../userInfo/UserInfo';
import './userSingle.scss';
import Spiner from '../../spiner/Spiner';
import ErrorMessage from '../../errorMassage/ErrorMessage'


const UserSingle = (item) => {
  const [user, setUser] = useState(null)
  const {id} = useParams()

  const useJPService = UseJPService();

  useEffect(() => {
    onReqest()
  },[])

  const onReqest = () => {
    useJPService
      .getUsersByName(id)
      .then(res => setUser(res))
  }

  const spinner = useJPService.loading ? <Spiner/> : null;
  const errorMessage = useJPService.error ? <ErrorMessage/> : null;  
  const content = user ? <UserInfo/> : null;  

  return (
    <> 
        <div className="container">
            <div className="wrap"> 
              {errorMessage}
              {spinner}
              {content}
            </div>
          </div>
    </>
   );
}
 
export default UserSingle;