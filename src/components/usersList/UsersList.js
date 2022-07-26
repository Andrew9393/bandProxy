import './usersList.scss'
import {ReactComponent as SortIcon} from '../../image/sort.svg'
import { useState, useEffect } from 'react'
import UseJPService from '../../services/UsersService'
import UserItem from '../userItem/UserItem'

const Users = (props) => {

  const [userList, setUserList] = useState([]);
  const [userPerson, setUserPersonList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [userEnded, setUserEnded] = useState(false);
  
  const useJPService = UseJPService();

  useEffect(() => {
    onReqest()
  },[])

  // const handled = (id) => {
  //   useJPService
  //     .getUsersByName(id)
  //     .then(res => setUserPersonList(res))
  // }

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
        <div className="users__sort">
          <SortIcon className='sort-icon' width="16" height="16" />
          Sort
        </div>
      </div>
      <div className="users__body">
        <div className="users__info">
          <span className='users__details'>User details</span>
          <span className='users__company'>Company name</span>
          <span className='users__email'>Email</span>
          <span className='users__distance'>Distance</span>
        </div>
          <UserItem users={userList} />
        {/* <div className="list">
          <div className="list__item">
            <div className="list__details">
              <div className="list__avatar">
                <img src={man} alt="" />
              </div>
              <div className="list__name">Leanne Graham <br/>
                <span className='list__subtitle'>Gwenborough</span>
              </div>
            </div>
            <div className="list__company">
              Microsoft <br/>
              <span className='list__subtitle'>harness real-time e-markets</span>
            </div>
            <div className="list__email">
              asd@asd.asd <br/>
              <span className='list__subtitle'>hildegard.org</span>
            </div>
            <div className="list__distance">
              <div className='like-btn low'>high</div>
            </div>
            <div className="list__more">
              <span></span>
            </div>
          </div>
          <div className="list__item">
            <div className="list__details">
              <div className="list__avatar">
                <img src={man} alt="" />
              </div>
              <div className="list__name">Leanne Graham <br/>
                <span className='list__subtitle'>Gwenborough</span>
              </div>
            </div>
            <div className="list__company">
              Microsoft <br/>
              <span className='list__subtitle'>harness real-time e-markets</span>
            </div>
            <div className="list__email">
              asd@asd.asd <br/>
              <span className='list__subtitle'>hildegard.org</span>
            </div>
            <div className="list__distance">
              <div className='like-btn low'>high</div>
            </div>
            <div className="list__more">
              <span></span>
            </div>
          </div>
          <div className="list__item">
            <div className="list__details">
              <div className="list__avatar">
                <img src={man} alt="" />
              </div>
              <div className="list__name">Leanne Graham <br/>
                <span className='list__subtitle'>Gwenborough</span>
              </div>
            </div>
            <div className="list__company">
              Microsoft <br/>
              <span className='list__subtitle'>harness real-time e-markets</span>
            </div>
            <div className="list__email">
              asd@asd.asd <br/>
              <span className='list__subtitle'>hildegard.org</span>
            </div>
            <div className="list__distance">
              <div className='like-btn high'>high</div>
            </div>
            <div className="list__more">
              <span></span>
            </div>
          </div>
          <div className="list__item">
            <div className="list__details">
              <div className="list__avatar">
                <img src={man} alt="" />
              </div>
              <div className="list__name">Leanne Graham <br/>
                <span className='list__subtitle'>Gwenborough</span>
              </div>
            </div>
            <div className="list__company">
              Microsoft <br/>
              <span className='list__subtitle'>harness real-time e-markets</span>
            </div>
            <div className="list__email">
              asd@asd.asd <br/>
              <span className='list__subtitle'>hildegard.org</span>
            </div>
            <div className="list__distance">
              <div className='like-btn low'>high</div>
            </div>
            <div className="list__more">
              <span></span>
            </div>
          </div>
        </div> */}
      </div>

    </div>
    </>
   );
}
 
export default Users;