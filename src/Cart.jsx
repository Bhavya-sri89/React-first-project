// import { useDispatch, useSelector } from "react-redux";
// import { addpurchaseDetails, clearcart, discrement, increament, remove } from "./Store";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Cart()
// {
//      let Cartobject=useSelector(state => state.Cart)
//      let dispath= useDispatch()
//      let navigate = useNavigate
//      let CartItems = Cartobject.map((items,index) => (   
//         <li key = {index}>
//             {items.name} - $ {items.price}
//             <button onClick= {() => dispath(increament(items))}>+</button>
//             <button onClick= {() => dispath(discrement(items))}>-</button>
//             quantity:{items.quantity}
//             <button onClick= {() => dispath(remove(items))}>remove</button>

//         </li>
//      ))

//      //calculate the Total price
//      let totalprice = Cartobject.reduce((sum,item) => sum+item.quantity*item.price,0)
//      //set the DiscountPercentage
//      let [Discountpercentage,setDiscountpercentage] = useState(0);
//      //calculate the discount Amount
//      let discountAmount = totalprice*Discountpercentage/100;
//      //calulate the final Amount
//      let finalAmount = totalprice - discountAmount;

//      let [showDiscount,setshowDiscount] = useState(false);

//      let [couponcode,setcouponcode] = useState('');

//      let [couponcodeDiscountper,setcouponcodeDiscountper] = useState(0);

//       //calculate coupon Discount
//       let couponcodeDiscountAmount = totalprice*couponcodeDiscountper/100;
      
//       let [couponcodeperApply,setcouponcodeperApply] = useState(false);

//      let handlingcouponper = () => {
//         switch (couponcode.toUpperCase()) { 
//             case 'RATAN10' : setcouponcodeDiscountper(10);
//             setcouponcodeDiscountper(10);
//             setcouponcodeperApply(true); 
//             break;

//             case 'RATAN20' : setcouponcodeDiscountper(20); 
//             setcouponcodeDiscountper(20);
//             setcouponcodeperApply(true);
//             break;

//             case 'RATAN30' : setcouponcodeDiscountper(30); 
//             setcouponcodeDiscountper(30);
//             setcouponcodeperApply(true);
//             break;

//             case 'RATAN40' : setcouponcodeDiscountper(40); 
//             setcouponcodeDiscountper(40);
//             setcouponcodeperApply(true);
//             break;

//             default : alert('Invalid coupon code');
//             setcouponcodeDiscountper(0);
//             setcouponcodeperApply(false);
//         }  
//     };

//     let handleCompletePurchase = () => {
//         const purchaseDate = new Date().toLocaleDateString();
//         let purchaseDetails = { 
//             date: purchaseDate, 
//             items: [...Cartobject],
//             totalPrice: totalprice
//           };
//           dispath(clearcart());
//           dispath(addpurchaseDetails(purchaseDetails));
// }
//     return(
//         <>
//         {Cartobject.length>0?
//         <div>
//         <ul>{CartItems}</ul>
//         <h2>This is cart page: {totalprice}</h2>
//         <p style={{color:"greenyellow"}}>your total price {totalprice}</p>
//         {showDiscount &&
//         <div>
//         <p style={{color:"greenyellow"}}>your Discount Applied {Discountpercentage}%</p>
//         <p style={{color:"greenyellow"}}>your Discount Amount {discountAmount.toFixed(2)} </p>
//         <p>Discount Applied:{couponcodeperApply}</p>
//         <p>Discount Amount:{couponcodeDiscountAmount}</p>
      
//         </div>
//        }
//         {/* <p style={{color:"greenyellow"}}>your Net Amount to pay {finalAmount}</p> */}

//         {/* <button onClick={handlingcouponper}>Complete Purchase</button> */}

//         <button style={{color:"pink"}} onClick = {() => {setDiscountpercentage(10), setcouponcodeperApply(true)}}>10% Discountpercentage</button>
//         <button style={{color:"pink"}} onClick = {() => {setDiscountpercentage(20), setcouponcodeperApply(true)}}>20% Discountpercentage</button>
//         <button style={{color:"pink"}} onClick = {() => {setDiscountpercentage(30),setcouponcodeperApply(true)}}>30% Discountpercentage</button>

//         {setshowDiscount && (
//             <>
//            <p>your coupon code: {couponcode}</p>
//            <p>your coupon Amount: {couponcodeDiscountAmount}</p> 
//            </>


//         )

//         } 

//         <p style={{color:"greenyellow"}}>your Net Amount to pay {finalAmount}</p>
        
//         </div>
//         :
//         <p>Empty Cart</p> }

//         {/* <button onClick={() => navigate("/home")}> Browse Product </button> */}

//          <input 
//         type = "text"
//         value = {couponcode}
//         onChange={(e) => setcouponcode(e.target.value)}
//         placeholder="Enter coupon code"
//        />
//         <button onClick={() => handleCompletePurchase()}>Apply coupon</button>
//         <button onClick={handlingcouponper}>Complete Purchase</button>
//         </>
        
        

//     )
// }
// export default Cart;






import { useDispatch, useSelector } from "react-redux";
import { addpurchaseDetails, clearcart, discrement, increament, remove } from "./Store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
    let Cartobject = useSelector(state => state.Cart);
    let dispath = useDispatch();
    let navigate = useNavigate();
    let CartItems = Cartobject.map((items, index) => (
        <li key={index}>
            {items.name} - ${items.price}
            <button onClick={() => dispath(increament(items))}>+</button>
            <button onClick={() => dispath(discrement(items))}>-</button>
            quantity: {items.quantity}
            <button onClick={() => dispath(remove(items))}>remove</button>
        </li>
    ));

    // Calculate the total price
    let totalprice = Cartobject.reduce((sum, item) => sum + item.quantity * item.price, 0);
    
    // Set the DiscountPercentage
    let [Discountpercentage, setDiscountpercentage] = useState(0);
    
    // Calculate the discount amount
    let discountAmount = totalprice * Discountpercentage / 100;
    
    // Calculate the final amount
    let finalAmount = totalprice - discountAmount;

    let [showDiscount, setShowDiscount] = useState(false);
    let [couponcode, setCouponcode] = useState('');
    let [couponcodeDiscountper, setCouponcodeDiscountper] = useState(0);

    // Calculate coupon discount
    let couponcodeDiscountAmount = totalprice * couponcodeDiscountper / 100;

    let [couponcodeperApply, setCouponcodeperApply] = useState(false);

    let handlingcouponper = () => {
        switch (couponcode.toUpperCase()) {
            case 'RATAN10':
                setCouponcodeDiscountper(10);
                setCouponcodeperApply(true);
                break;
            case 'RATAN20':
                setCouponcodeDiscountper(20);
                setCouponcodeperApply(true);
                break;
            case 'RATAN30':
                setCouponcodeDiscountper(30);
                setCouponcodeperApply(true);
                break;
            case 'RATAN40':
                setCouponcodeDiscountper(40);
                setCouponcodeperApply(true);
                break;
            default:
                alert('Invalid coupon code');
                setCouponcodeDiscountper(0);
                setCouponcodeperApply(false);
        }
    };

    let handleCompletePurchase = () => {
        const purchaseDate = new Date().toLocaleDateString();
        let purchaseDetails = {
            date: purchaseDate,
            items: [...Cartobject],
            totalPrice: totalprice
        };
        dispath(clearcart());
        dispath(addpurchaseDetails(purchaseDetails));
    };

    return (
        <>
            {Cartobject.length > 0 ? (
                <div>
                    <ul>{CartItems}</ul>
                    <h2>This is the cart page: ${totalprice}</h2>
                    <p style={{ color: "greenyellow" }}>Your total price: ${totalprice}</p>

                    {showDiscount && (
                        <div>
                            <p style={{ color: "greenyellow" }}>Your discount applied: {Discountpercentage}%</p>
                            <p style={{ color: "greenyellow" }}>Your discount amount: ${discountAmount.toFixed(2)}</p>
                            <p>Discount applied: {couponcodeperApply ? 'Yes' : 'No'}</p>
                            <p>Coupon discount amount: ${couponcodeDiscountAmount.toFixed(2)}</p>
                        </div>
                    )}

                    <div>
                        <button
                            style={{ color: "pink" }}
                            onClick={() => { setDiscountpercentage(10), setCouponcodeperApply(true); }}
                        >
                            10% Discount
                        </button>
                        <button
                            style={{ color: "pink" }}
                            onClick={() => { setDiscountpercentage(20), setCouponcodeperApply(true); }}
                        >
                            20% Discount
                        </button>
                        <button
                            style={{ color: "pink" }}
                            onClick={() => { setDiscountpercentage(30), setCouponcodeperApply(true); }}
                        >
                            30% Discount
                        </button>
                    </div>

                    <div>
                        <input
                            type="text"
                            value={couponcode}
                            onChange={(e) => setCouponcode(e.target.value)}
                            placeholder="Enter coupon code"
                        />
                        <button onClick={handlingcouponper}>Apply coupon</button>
                    </div>

                    <div>
                        <p style={{ color: "greenyellow" }}>Your net amount to pay: ${finalAmount.toFixed(2)}</p>
                    </div>

                    <div>
                        <button onClick={handleCompletePurchase}>Complete Purchase</button>
                    </div>
                </div>
            ) : (
                <p>Empty Cart</p>
            )}
        </>
    );
}

export default Cart;
