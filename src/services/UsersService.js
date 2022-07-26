const UseJPService = () => {
    const _apiBase = 'https://jsonplaceholder.typicode.com/';
  
    const getResours = async(url) => {
        const result = await fetch(url)
        
        if(!result.ok){
          throw new Error(`Errors - ${result.ok}`)
        }
        
        return await result.json();
      }


  const getAllUsers = async () => {
      const res = await getResours(`${_apiBase}users`);
      console.log(res);
      return res.map(_transformUser) 
  }

  const getUsersByName = async (id) => {
      const res = await getResours(`${_apiBase}users/${id}`);
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
 
  return {getAllUsers, getUsersByName}

}



export default UseJPService;