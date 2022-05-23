import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Blog from './Pages/Home/Blog';
import Home from './Pages/Home/Home';
import ItemDetails from './Pages/Home/ItemDetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/manufacture/:id' element={
            <RequireAuth>
              <ItemDetails></ItemDetails>
            </RequireAuth>
          }></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
    </>
  );
}

export default App;
