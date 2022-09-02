import {Link} from 'react-router-dom'


const NotFound = () => {
  return ( 
    <div className="App">
      <div className="container">
        <div className="wrap"> 
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