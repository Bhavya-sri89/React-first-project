import { configureStore, createSlice } from "@reduxjs/toolkit";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Cart from "./Cart";
import { startTransition } from "react";


    const ProductsSlice = createSlice({
        name:'Products',
        initialState: { 
            Veg:[
            {name:'Tomoto' , price:200.5},
            {name:'panner' , price:100.0},
            {name:'carrot' , price:150.5}

        ],
        Nonveg:[
            {name:'chinken' , price:200.5},
            {name:'fish' , price:200.5},
            {name:'mutton' , price:200.5}
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