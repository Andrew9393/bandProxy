import {BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../404/NotFound';
import AllUsers from '../pages/allUsers/AllUsers';
import UserSingle from '../pages/userSingle/UserSingle';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllUsers/>} />
          <Route path="/users/:id" element={<UserSingle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
