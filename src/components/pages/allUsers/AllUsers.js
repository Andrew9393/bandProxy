import Users from '../../usersList/UsersList';

import UseJPService from '../../../services/UsersService';
import Spiner from '../../spiner/Spiner';

function AllUsers() {

  return (
    <div className="App">
      <div className="container">
        <div className="wrap"> 
          <Users/>
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
