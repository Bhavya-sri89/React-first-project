// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "./Store";

// function Nonveg()
// {
//     let dispath=useDispatch()
//     let NonvegItem =  useSelector(state => state.Products.Nonveg)
    
//     let finalItems=NonvegItem.map((item,index) => (
//         <li key={index}>
//             {item.name}-${item.price}
//             <button onClick={() => dispath(addToCart(item))}>Add To Cart</button>
//         </li>
// ))
//     return(
//         <>
//          <img 
//         src={item.image}
//          className="card-img-top p-3 rounded"
//          alt={item.name}
//          height="250px"
//          />
//         <h2>This is Nonveg.jsx file</h2>
//         <h2>veg items.....</h2>
//         <ol>{finalItems}</ol>
//         </>
//     )
// }
// export default Nonveg;




import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";

function Nonveg() {
    let dispatch = useDispatch();
    let NonvegItem = useSelector(state => state.Products.Nonveg);
    
    let finalItems = NonvegItem.map((item, index) => (
        <li key={index}>
            <img 
                src={item.image} 
                className="card-img-top p-3 rounded"
                alt={item.name}
                height="100px"
            />
            {item.name} - ${item.price}
            <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
        </li>
    ));

    return (
        <>
            <h2>This is Nonveg.jsx file</h2>
            <h2>Non-veg items.....</h2>
            <ol>{finalItems}</ol>
        </>
    );
}

export default Nonveg;
