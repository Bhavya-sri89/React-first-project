// import { useDispatch, useSelector } from "react-redux";
// import { addToCart} from "./Store";

// function Veg()
// { 
//     let dispath = useDispatch()
//     let VegItems =  useSelector(state => state.Products.Veg)
    
//     let finalItems=VegItems.map((item,index) => (
//         <li key={index}>
//             {item.name}-$ {item.price}

//             <button onClick={() => dispath(addToCart(item))}> Add To Cart </button>
//         </li>

// ))
//     return(
//         <>
//         <img 
//          src={item.image}
//          className="card-img-top p-3 rounded"
//          alt={item.name}
//          height="250px"
        
//         />
//         <h2>This is veg.jsx file</h2>
//         <h2>veg items.....</h2>
//         <ol>{finalItems}</ol>
//         </>
//     )
// }
// export default Veg;




import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";

function Veg() { 
    let dispatch = useDispatch(); // Corrected dispatch
    let VegItems = useSelector(state => state.Products.Veg);
    
    let finalItems = VegItems.map((item, index) => (
        <li key={index}>
            <img 
                src={item.image} 
                className="card-img-top p-3 rounded" 
                alt={item.name} 
                height="100px" 
            />
            <div>{item.name} - $ {item.price}</div>
            <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
        </li>
    ));

    return (
        <>
            <h2>This is the Veg.jsx file</h2>
            <h2>Veg Items:</h2>
            <ol>{finalItems}</ol>
        </>
    );
}

export default Veg;
