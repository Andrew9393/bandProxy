import Header from '../../header/Header';
import Users from '../../usersList/UsersList';
import Sidebar from '../../sidebar/Sidebar'
import Tabs from '../../tabs/Tabs';
import Tasks from '../../tasks/Tasks';
import Tickets from '../../tickets/Tickets';

function AllUsers() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <div className="wrap"> 
          <Header/>
          <Tabs/>
          <Users/>
          <div className="row">
            <Tickets/>
            <Tasks/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
