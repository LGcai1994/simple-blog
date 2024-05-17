import './App.css';
import { auth } from './firebase-config'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { useState } from 'react';
import { signOut } from 'firebase/auth';

function App() {

  const initialIsAuth = localStorage.getItem('isAuth') === 'true';
  const [isAuth, setIsAuth] = useState(initialIsAuth);  

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.setItem('isAuth', false)
      setIsAuth(false)
      window.location.pathname = '/login'
    })
  }

  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        {isAuth && <Link to='/createpost'>CreatePost</Link>}
        {isAuth ? <button onClick={signUserOut}>Logout</button> : <Link to='/login'>Login</Link>}
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        <Route path='/createpost' element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;