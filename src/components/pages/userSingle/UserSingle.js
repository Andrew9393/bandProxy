import {useParams, Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import UseJPService from '../../../services/UsersService'
import Header from '../../header/Header'
import Tabs from '../../tabs/Tabs';
import Sidebar from '../../sidebar/Sidebar'
import './userSingle.scss'

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


  return (
    <> 
      {user && (
        <div className="container">
        <Sidebar />
        <div className="wrap"> 
          <Header/>
          <Tabs/>
          <div className="user-singel">
            <div className="user-singel__head">
              <div className="user-singel__img">
                <img src={user.photo ? user.photo : "no photo" } alt="" /></div>
              <div className="user-singel__name">{user.name}</div>
              <div className="user-singel__phrase">{user.company.catchPhrase}</div>
            </div>
            <div className="user-singel__contacts">
              <div className="user-singel__address">
                <h2>Address</h2>
                {user.address.street} {user.address.suite} <br/>
                {user.address.city} {user.address.zipcode}
              </div>
              <div className="user-singel__phone">
                <h2>Phone</h2>
                {user.phone}
              </div>
              <div className="user-singel__site">
                <h2>Website</h2>
                <Link to={user.website}>
                  {user.website}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
   );
}
 
export default UserSingle;