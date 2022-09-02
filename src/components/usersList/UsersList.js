import './usersList.scss'
import {ReactComponent as SortIcon} from '../../image/sort.svg'
import { useState, useEffect } from 'react'
import UseJPService from '../../services/UsersService'
import UserItem from '../userItem/UserItem'
import Spiner from '../spiner/Spiner'
import ErrorMessage from '../errorMassage/ErrorMessage'

const Users = (props) => {

  const [userList, setUserList] = useState([]);
  const [userPerson, setUserPersonList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [userEnded, setUserEnded] = useState(false);
  
  const useJPService = UseJPService();

  const spinner = useJPService.loading ? <Spiner/> : null;
  const list = userList ? <UserItem users={userList} />  : null
  const errorMessage = useJPService.error ? <ErrorMessage/> : null;


  useEffect(() => {
    onReqest()
  },[])

  const onReqest = () => {
    useJPService
      .getAllUsers()
      .then(res => setUserList(res))
  }

  return ( 
    <>
    
    <div className="users">
      <div className="users__header">
        <div className="users__title">All users</div>
      </div>
      <div className="users__body">
        <div className="users__info">
          <span className='users__details'>User details</span>
          <span className='users__company'>Company name</span>
          <span className='users__email'>Email</span>
          <span className='users__distance'></span>
        </div>
          
           {spinner}
           {errorMessage}
           {list}
      </div>
    </div>
    </>
   );
}
 
export default Users;