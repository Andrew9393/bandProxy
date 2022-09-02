import { useHttp } from "../hooks/http.hook";

const UseJPService = () => {
  const {loading, request, error} = useHttp();
  const _apiBase = 'https://jsonplaceholder.typicode.com/';
  
  const getAllUsers = async () => {
      const res = await request(`${_apiBase}users`);
      return res.map(_transformUser) 
  }

  const getUsersByName = async (id) => {
      const res = await request(`${_apiBase}users/${id}`);
      return ({
        name: res.name,
        id: res.id,
        email: res.email,
        address: res.address,
        phone: res.phone,
        website: res.website,
        company: res.company,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGUA9ksyrCerUe8f_fx5-411ks8IJipf0g_uVOwfyStgQTXVb9JEHFzmcXdWfzJDkkPA&usqp=CAU'
      })
  }
  const getUsersPost = async (id) => {
    const res = await request(`${_apiBase}posts/${id}`);
    return ({
      id: res.id,
      title: res.title,
      body: res.body
    })
  } 

  const getUsersAlbum = async (id) => {
    const res = await request(`${_apiBase}albums/${id}`);
    return ({
      id: res.id,
      title: res.title,
    })
  } 

  const _transformUser = (user) => {
    return {
        name: user.name,
        id: user.id,
        email: user.email,
        address: user.address,
        phone: user.phone,
        website: user.website,
        company: user.company,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGUA9ksyrCerUe8f_fx5-411ks8IJipf0g_uVOwfyStgQTXVb9JEHFzmcXdWfzJDkkPA&usqp=CAU'
    }
  }
 
  return {loading, error, getAllUsers, getUsersByName, getUsersPost, getUsersAlbum}

}



export default UseJPService;