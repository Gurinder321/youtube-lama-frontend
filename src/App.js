import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Messenger from './pages/messenger/Messenger';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext);
  // console.log(user && 'User was found app.js');
  // console.log(user);
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />}></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
      </Routes>{' '}
      <Routes>
        <Route path="/messenger" element={user ? <Messenger /> : <Register />}></Route>
      </Routes>
      <Routes>
        <Route path="/profile/:username" element={<Profile user={user} />}></Route>
      </Routes>
      {/* <Route path="/login">
        <Login />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route> */}
    </Router>
  );
}

export default App;
