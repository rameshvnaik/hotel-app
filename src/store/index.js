
import { createStore } from "redux"

const INITIAL_VALUE={
    cartItem:[],
}


const  counterReducer=(state=INITIAL_VALUE, action)=>{
    if(action.type==="ADDTOCART"){

        const itemExist=state.cartItem.find((item)=>item.id===action.payload.id);
        if(itemExist){
            return{
                ...state,
                cartItem:state.cartItem.filter((item)=>item.id !==action.payload.id)
            }
        }
        else{

            return {
                ...state,
                cartItem: [...state.cartItem, action.payload],
            }
        }
    }
    else if(action.type==="REMOVEFROMCART")  {
        return {
          ...state,
          cartItem: state.cartItem.filter(item => item.id !== action.payload.id),
        };
      }
    else if(action.type==="INCREASE_QUANTITY")  {
        const updatedCartItems = state.cartItem.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity?item.quantity:1 + 1 } : item
        );
        return {
          ...state,
          cartItem: updatedCartItems,
        };
      }
    else if (action.type==='DECREASE_QUANTITY'){
        return {
            ...state,
            cartItem: state.cartItem
                .map(item =>
                    item.id === action.payload.id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                // .filter(item => item.quantity > 0), // Remove item if quantity is 0
        };
      }
  

    return state;


}


const counterStore=createStore(counterReducer);
export default counterStore;

