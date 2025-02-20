//   import { useDispatch, useSelector } from "react-redux";
//   import { addToCart } from "./Store";

//   function Nonveg()
//   {
//       let dispath=useDispatch()
//       let NonvegItem =  useSelector(state => state.Products.Nonveg)
    
//      let finalItems=NonvegItem.map((item,index) => (
//          <li key={index}>
//               {item.name}-${item.price}
//              <button onClick={() => dispath(addToCart(item))}>Add To Cart</button>
//              <img 
//           src={item.image}
//            className="card-img-top p-3 rounded"
//            alt={item.name}
//            height="100px"
// />
//          </li>
         
//   ))
//      return(
//          <>
//           <h2>This is Nonveg.jsx file</h2>
//           <h2>veg items.....</h2>
//           <ol>{finalItems}</ol>
//           </>
//       )
//   }
//   export default Nonveg;




// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "./Store";

// function Nonveg() {
//     let dispatch = useDispatch();
//     let NonvegItem = useSelector(state => state.Products.Nonveg);
    
//     let finalItems = NonvegItem.map((item, index) => (
//         <li key={index}>
//             <img 
//                 src={item.image} 
//                 className="card-img-top p-3 rounded"
//                 alt={item.name}
//                 height="100px"
//             />
//             {item.name} - ${item.price}
//             <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
//         </li>
//     ));

//     return (
//         <>
//             <h2>This is Nonveg.jsx file</h2>
//             <h2>Non-veg items.....</h2>
//             <ol>{finalItems}</ol>
//         </>
//     );
// }

// export default Nonveg;





// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "./Store";

// function Nonveg() {
//     let dispatch = useDispatch();
//     let NonvegItem = useSelector(state => state.Products.Nonveg);
    
//     let finalItems = NonvegItem.map((item, index) => (
//         <div key={index} className="col-md-4 mb-4">
//             <div className="card shadow-sm">
//                 <img 
//                     src={item.image} 
//                     className="card-img-top p-3 rounded"
//                     alt={item.name}
//                     height="200px"
//                 />
//                 <div className="card-body">
//                     <h5 className="card-title">{item.name}</h5>
//                     <p className="card-text">${item.price}</p>
//                     <button 
//                         className="btn btn-primary"
//                         onClick={() => dispatch(addToCart(item))}
//                     >
//                         Add To Cart
//                     </button>
//                 </div>
//             </div>
//         </div>
//     ));

//     return (
//         <>
//             <h2 className="text-center my-4">Non-Veg Items</h2>
//             <div className="container">
//                 <div className="row">
//                     {finalItems}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Nonveg;


// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "./Store";

// function Nonveg() {
//   let dispatch = useDispatch();
//   let NonvegItem = useSelector(state => state.Products.Nonveg);

//   let finalItems = NonvegItem.map((item, index) => (
//     <div className="col-md-4 mb-4" key={index}>
//       <div className="card shadow-sm">
//         <img
//           src={item.image}
//           className="card-img-top p-3 rounded"
//           alt={item.name}
//           height="200px"
//         />
//         <div className="card-body text-center" >
//           <h5 className="card-title text-uppercase">{item.name}</h5>
//           <p className="card-text fw-bold text-danger">${item.price}</p>
//           <button
//             className="btn btn-primary"
//             onClick={() => dispatch(addToCart(item))}
//           >
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   ));

//   return (
//     <>
//       <h2 className="text-center mb-4">Non-Veg Items</h2>
//       <div className="container">
//         <div className="row">
//           {finalItems}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Nonveg;




import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store"; 

function Nonveg() {
  let dispatch = useDispatch(); // Corrected typo from 'dispath' to 'dispatch'
  let NonvegItem = useSelector(state => state.Products.Nonveg); // Get non-veg items from the Redux store

  // Render the items
  let finalItems = NonvegItem.map((item, index) => (
    <li key={index}>
      <img
        src={item.image}
        className="card-img-top p-3 rounded"
        alt={item.name}
        height="100px"
      />
      <div>{item.name} - ${item.price}</div>
      <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
      
    </li>
  ));

  return (
    <>
      <h2>This is Nonveg.jsx file</h2>
      <h2>Non-Veg items:</h2>
      <ol>{finalItems}</ol>
    </>
  );
}

export default Nonveg;

