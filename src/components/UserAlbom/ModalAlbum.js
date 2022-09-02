const ModalAlbum = ({albom}) => {
  return ( 
    <div className="modal__body">
      <h1>Album #{albom.id}</h1>
      <h2>{albom.title}</h2>
    </div> 
    );
}
 
export default ModalAlbum;