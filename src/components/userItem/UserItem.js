import {Link} from 'react-router-dom'
import { useState } from 'react';
import UseJPService from '../../services/UsersService'
import Spiner from '../spiner/Spiner';
import UserAlbom from '../UserAlbom/UsrerAlbom';

const UserItem = (props) => {
  const [openModalAlbom, setOpenModalAlbom] = useState(false)
  const [albom, setAlbom] = useState([])
  const useJPService = UseJPService();
  const spinner = useJPService.loading ? <Spiner/> : null;

  const openAlbom = (id) => {
    setAlbom([])
    onReqest(id)
    setOpenModalAlbom(true)
  }
  const closeAlbom = () => {
    setAlbom([])
    setOpenModalAlbom(false) 
  }
  
  const onReqest = (id) => {
    useJPService
      .getUsersAlbum(id)
      .then(res => setAlbom(res))
  }
  

  const renderItem = ({users}) => {
      const items = users.map((user, i) => {
        return ( 
            <div className="list__item" key={user.id}>
                <div className="list__details">
                  <div className="list__avatar">
                    <img src={user.photo} alt="" />
                  </div>
                  <div className="list__name">{user.name} <br/>
                    <span className='list__subtitle'>{user.address.city}</span>
                  </div>
                </div>
                <div className="list__company">
                  {user.company.name}<br/>
                  <span className='list__subtitle'>{user.company.bs}</span>
                </div>
                <div className="list__email">
                  {user.email} <br/>
                  <span className='list__subtitle'>{user.website}</span>
                </div>
                <div className="list__btn">
                    <Link 
                      key={user.id}
                      to={`/users/${user.id}`}
                    >
                        <div className='btn'>posts</div>
                    </Link>
                </div> 
                <div className="list__btn">
                  <div className='btn' onClick={() => openAlbom(user.id)}>albums</div>
                </div>
              </div> 
        )

    })
    return (
        <div className="list">
          { openModalAlbom ? 
          <UserAlbom 
            albom={albom}
            onClose={() => closeAlbom()}
            /> : null}
          {items}
        </div>
    )
  }
  
  return renderItem(props)
}
  

export default UserItem;