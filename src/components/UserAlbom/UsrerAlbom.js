import UseJPService from '../../services/UsersService';
import Spiner from '../spiner/Spiner';
import ModalAlbum from './ModalAlbum';
import './userAlbom.scss'


const UserAlbom = ({albom, onClose}) => {

  console.log(typeof albom);

  const spinner = Object.keys(albom).length == 0 ? <Spiner/> : null;
  const contant = Object.keys(albom).length > 0 ? <ModalAlbum albom={albom}/> : null;

  return (
      <div className="modal">
        <button className="close" onClick={onClose}> close </button>
          {spinner}
          {contant}
      </div>
  )
 
};

 
export default UserAlbom;