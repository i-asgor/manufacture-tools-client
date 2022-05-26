import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/Dashboard/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import MyDashboard from './Pages/Dashboard/MyDashboard';
import MyHistory from './Pages/Dashboard/MyHistory';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyReview from './Pages/Dashboard/MyReview';
import Payment from './Pages/Dashboard/Payment';
import Users from './Pages/Dashboard/Users';
import About from './Pages/Home/About';
import Blog from './Pages/Home/Blog';
import Home from './Pages/Home/Home';
import PortFolio from './Pages/Home/PortFolio';
import Purchase from './Pages/Items/Purchase';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAdmin from './Pages/Login/RequireAdmin';
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
          <Route path='/portfolio' element={<PortFolio />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/manufacture/:id' element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }></Route>
          <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyDashboard></MyDashboard>}></Route>
          <Route path='orders' element={<MyOrders></MyOrders>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>
          }></Route>
          <Route path='product' element={
            <RequireAdmin>
              <AddProduct></AddProduct>
            </RequireAdmin>
          }></Route>
          <Route path='manageproduct' element={
            <RequireAdmin>
              <ManageProduct></ManageProduct>
            </RequireAdmin>
          }></Route>
          <Route path='manageorder' element={
            <RequireAdmin>
              <ManageOrder></ManageOrder>
            </RequireAdmin>
          }></Route>
        </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
    </>
  );
}

export default App;
