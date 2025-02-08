import { useDispatch, useSelector } from "react-redux";
import { addToCart} from "./Store";

function Veg()
{ 
    let dispath = useDispatch()
    let VegItems =  useSelector(state => state.Products.Veg)
    
    let finalItems=VegItems.map((item,index) => (
        <li key={index}>
            {item.name}-$ {item.price}

            <button onClick={() => dispath(addToCart(item))}> Add To Cart </button>
        </li>
))
    return(
        <>
        <h2>This is veg.jsx file</h2>
        <h2>veg items.....</h2>
        <ol>{finalItems}</ol>
        </>
    )
}
export default Veg;