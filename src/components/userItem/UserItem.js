import {Link} from 'react-router-dom'
import UseJPService from '../../services/UsersService'
import Spiner from '../spiner/Spiner';



const UserItem = (props) => {
  
  const useJPService = UseJPService();
  const spinner = useJPService.loading ? <Spiner/> : null;

  const renderItem = ({users}) => {
      const items = users.map((user, i) => {
        return ( 
              <Link 
                className="list__item"
                key={user.id}
                to={`/users/${user.id}`}
              >
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
                <div className="list__distance">
                  <div className='like-btn low'>high</div>
                </div>
                <div className="list__more">
                  <span></span>
                </div>
              </Link>
        )

    })
    return (
        <div className="list">
          {items}
        </div>
    )
  }
  
  return renderItem(props)
}
  

export default UserItem;