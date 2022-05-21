import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Blog from './Pages/Home/Blog';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
