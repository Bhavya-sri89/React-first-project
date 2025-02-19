// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import Veg from "./Veg";
// import Nonveg from "./Nonveg";
// import Orders from "./Orders";

// import Contactus from "./Contactus";
// import Cart from "./Cart";
// import "./App.css"
// import { useDispatch, useSelector } from "react-redux";
// import NotFound from "./NotFound";
// import { login } from "./Store";
// import AboutUs from "./AboutUs";
// function App()
// {
//   let CartItems = useSelector(state => state.Cart);
//   const totalItems = CartItems.reduce((sum,item) => sum+item.quantity,0)

//   let auth =useSelector((state) => state.auth);
//   let isAuthenticated = auth.isAuthenticated;
//   let user = auth.user;
//   let dispatch = useDispatch();
//   return( 
//     <>
//     <BrowserRouter>
//     <nav>
//     <Link to='/home'className="myclass">Home</Link>
//     <Link to='/veg'className="myclass">VegItems</Link>
//     <Link to='/nonveg'className="myclass">NonvegItems</Link>
//     <Link to='/cart'className="myclass">Cart<span>{totalItems}</span></Link>
//     <Link to='/orders'className="myclass">Orders</Link>
//     <Link to='/AboutUs'className="myclass">AboutUs</Link>
//     <Link to='/contactus'className="myclass">Contactus</Link>
    
//     {isAuthenticated ? (
//       <>
//       <span>Welcome, {user}!</span>
//       <button onClick={() => dispatch(logout())}>Logout</button>
//       </>
//     ) :(
//       <Link to="/login" className="myclass">SignIn</Link>
//     ) }
//     </nav>
//     <Routes>
//       <Route path="/home" element={<Home/>} />
//       <Route path="/veg" element={<Veg/>}  />
//       <Route path="/nonveg" element={<Nonveg/>} />
//       <Route path="/cart"  element={<Cart/>} />
//       <Route path="/orders" element={<Orders/>} />
//       <Route path="/AboutUs" element={<AboutUs/>} />
//       <Route path="/contactus" element={<Contactus/>} />
//       <Route path="*" element={<NotFound />} />
//     </Routes> 
//     </BrowserRouter>
    
//     </> 
    
    
//   )
// }

// export default App;



import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Orders from "./Orders";

import Contactus from "./Contactus";
import Cart from "./Cart";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "./NotFound";
import { logout } from "./Store"; // Ensure you import the logout action from your store

import Login from "./Login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import AboutUs from "./AboutUs";

function App() {
  const CartItems = useSelector((state) => state.Cart);
  const totalItems = CartItems.reduce((sum, item) => sum + item.quantity, 0);

  const auth = useSelector((state) => state.auth);
  const isAuthenticated = auth.isAuthenticated;
  const user = auth.user;
  const dispatch = useDispatch();

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/home" className="myclass"><i className="fa-solid fa-house"></i>
            Home
          </Link>
          <Link to="/veg" className="myclass">
            VegItems
          </Link>
          <Link to="/nonveg" className="myclass">
            NonvegItems
          </Link>
          <Link to="/cart" className="myclass">
            Cart<span>{totalItems}</span>
          </Link>
          <Link to="/orders" className="myclass">
            Orders
          </Link>
          {/* <Link to="/aboutus" className="myclass">
            AboutUs
          </Link> */}
          <Link to="/contactus" className="myclass">
            Contactus
          </Link>

          {isAuthenticated ? (
            <>
              <span>Welcome, {user}!</span>
              <button onClick={() => dispatch(logout())}>Logout</button>
            </>
          ) : (
            <Link to="/login" className="myclass">
              SignIn
            </Link>
          )}
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<Nonveg />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          {/* <Route path="/aboutus" element={<AboutUs />} /> */}
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;