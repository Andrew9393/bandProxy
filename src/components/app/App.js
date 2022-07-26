import {BrowserRouter, Routes, Route } from 'react-router-dom';
import AllUsers from '../pages/allUsers/AllUsers';
import UserSingle from '../pages/userSingle/UserSingle';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllUsers/>} />
          <Route path="/users/:id" element={<UserSingle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
