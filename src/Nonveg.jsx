import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";

function Nonveg()
{
    let dispath=useDispatch()
    let NonvegItem =  useSelector(state => state.Products.Nonveg)
    
    let finalItems=NonvegItem.map((item,index) => (
        <li key={index}>
            {item.name}-${item.price}
            <button onClick={() => dispath(addToCart(item))}>Add To Cart</button>
        </li>
))
    return(
        <>
        <h2>This is Nonveg.jsx file</h2>
        <h2>veg items.....</h2>
        <ol>{finalItems}</ol>
        </>
    )
}
export default Nonveg;