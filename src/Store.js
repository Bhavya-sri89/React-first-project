import { configureStore, createSlice } from "@reduxjs/toolkit";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Cart from "./Cart";
import { startTransition } from "react";


    const ProductsSlice = createSlice({
        name:'Products',
        initialState: { 
            Veg:[
            {image:"https://up.yimg.com/ib/th?id=OIP.UkqPOqRR1u2um3m3dhgjxgHaEo&pid=Api&rs=1&c=1&qlt=95&w=164&h=102",name:"Tomoto",price:"200.5"},
            {image:"https://up.yimg.com/ib/th?id=OIP.bmUHO4yWWHjMYeT6jV5NlAHaE7&pid=Api&rs=1&c=1&qlt=95&w=168&h=111",name:"panner",price:"100.0"},
            {image:"https://tse3.mm.bing.net/th?id=OIP.Xpwws_N3CK74eQuy7kq_kwHaFc&pid=Api&P=0&h=180",name:"carrot",price:"150.5"},   
            {image:"https://tse3.mm.bing.net/th?id=OIP.gFx6NiKHARprKWoPaUasoQHaFd&pid=Api&P=0&h=180",name:"onion",price:"50.8"},
            {image:"https://tse1.mm.bing.net/th?id=OIP.NpF4-3oEpS3dG828WiWERQHaE8&pid=Api&P=0&h=180",name:"potato",price:"40.5"}
        ],
        Nonveg:[
            {image:"https://tse3.mm.bing.net/th?id=OIP.rernnFNv0m3HEcnMJMvQdgHaEK&pid=Api&P=0&h=180",name:'chinken' , price:200.5},
            {image:"https://tse2.mm.bing.net/th?id=OIP.7Z9wv6AweGnVJIvCrOwuiwHaFj&pid=Api&P=0&h=180",name:'fish' , price:200.5},
            {image:"https://www.thespruceeats.com/thmb/6C_AB-LpucKkVa4L5IQHfHEYyXc=/3008x0/filters:no_upscale():max_bytes(150000):strip_icc()/JMTalbott-466838246c734494b30bcf47b633e116.jpg",name:'mutton' , price:200.5}
          ],

        },
    
    reducers:{}
})


const CartSlice = createSlice (
    
    {
        name:'Cart',
        initialState:[],
        reducers:{
            addToCart:(state,action) => {
                const item = state.find(item => item.name === action.payload.name);
                if(item){
                    item.quantity +=1;
                }
                else{
                    state.push({...action.payload,quantity:1})
                }
            },
            increament:(state,action) => {
                const item = state.find(item => item.name === action.payload.name);
                if(item) {
                    item.quantity +=1;
                }
            },
            discrement:(state,action) => {
                const item = state.find(item => item.name === action.payload.name);
                if(item && item.quantity>1) {
                    item.quantity -=1;
                }
                else{
                    return state.filter(item => item.name !== action.payload.name);
                }
            },
            remove:(state,action) =>{
                return state.filter(item => item.name !== action.payload.name);
                
            },
            
             clearcart : () => [],

            },
           
        }  
    
)

let purchaseDetailSlice = createSlice({
    name : 'purchaseDetails',
    initialState : [],
    reducers :

    {
        addpurchaseDetails : (state,action) => {
            state.push(action.payload)
        }
    }
});

const authSlice = createSlice({
    name : "auth",
    initialState :{
        isAuthenticated:localStorage.getItem("username")?true:false,
        user:
           localStorage.getItem("/username") //""//
    },
    
     reducers :{
        login:(state,action) =>{
            state.isAuthenticated=true;
            state.user = action.payload;
            localStorage.setItem("username",action.payload);
        },

    logout:(state) => {
        state.isAuthenticated = false;
        state.user = "";
        localStorage.removeItem("username");
    },
    },
});
 
const Store = configureStore(
    {
        
        reducer:{Products:ProductsSlice.reducer,
         Cart:CartSlice.reducer,
         purchaseDetails : purchaseDetailSlice.reducer,
         auth : authSlice.reducer
         
        }
        
    });

    
    
      
   
    

    
        
    



export const {addToCart,increament,discrement,remove,clearcart} = CartSlice.actions;
export const { addpurchaseDetails} = purchaseDetailSlice.actions
export const {login,logout} = authSlice.actions
export default Store;