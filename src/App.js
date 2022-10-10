import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Routes>
        <Route path="/profile/:username" element={<Profile />}></Route>
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
