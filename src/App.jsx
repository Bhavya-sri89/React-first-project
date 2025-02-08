import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Orders from "./Orders";
import Aboutus from "./aboutus";
import Contactus from "./Contactus";
import Cart from "./Cart";
import "./App.css"
import { useDispatch, useSelector } from "react-redux";
import NotFound from "./NotFound";
import { login } from "./Store";
function App()
{
  let CartItems = useSelector(state => state.Cart);
  const totalItems = CartItems.reduce((sum,item) => sum+item.quantity,0)

  let auth =useSelector((state) => state.auth);
  let isAuthenticated = auth.isAuthenticated;
  let user = auth.user;
  let dispatch = useDispatch();
  return( 
    <>
    <BrowserRouter>
    <nav>
    <Link to='/home'className="myclass">Home</Link>
    <Link to='/veg'className="myclass"><i className="fas fa-carrot"></i>VegItems</Link>
    <Link to='/nonveg'className="myclass"><i className="fas fa-drumstick-bite"></i>NonvegItems</Link>
    <Link to='/cart'className="myclass"><i className="fas fa-cart"></i>Cart<span>{totalItems}</span></Link>
    <Link to='/orders'className="myclass"><i className="fas fa-orders"></i>Orders</Link>
    <Link to='/aboutus'className="myclass"><i className="fas fa-aboutus"></i>Aboutus</Link>
    <Link to='/contactus'className="myclass"><i className="fas fa-contactus"></i>Contactus</Link>

    {isAuthenticated ? (
      <>
      <span>Welcome, {user}!</span>
      <button onClick={() => dispatch(logout())}>Logout</button>
      </>
    ) :(
      <Link to="/login" className="myclass">SignIn</Link>
    ) }
    </nav>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/veg" element={<Veg/>}  />
      <Route path="/nonveg" element={<Nonveg/>} />
      <Route path="/cart"  element={<Cart/>} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/aboutus" element={<Aboutus/>} />
      <Route path="/contactus" element={<Contactus/>} />
      <Route path="*" element={<NotFound />} />
    </Routes> 
    </BrowserRouter>
    
    </> 
    
    
  )
}

export default App;