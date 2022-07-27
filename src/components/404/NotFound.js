import {Link} from 'react-router-dom'
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Tabs from '../tabs/Tabs';


const NotFound = () => {
  return ( 
    <div className="App">
      <div className="container">
        <Sidebar />
        <div className="wrap"> 
          <Header/>
          <Tabs/>
          <div style={{fontSize: '24px', padding: '30px 0 0 0'}}>
            Error 404
            go to user list <Link to={'/'}> <b>users</b></Link>
          </div>
          </div>
        </div>
      </div>
   );
}
 
export default NotFound;