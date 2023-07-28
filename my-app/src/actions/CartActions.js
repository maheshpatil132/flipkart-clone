import { Axios } from "../Axios"
import { AddToCart, RemoveToCart } from "../constants/CartConstants"


export const AddCart = (data) => async(dispatch ,getState)=> {
   
      dispatch({
         type:AddToCart,
         product: data
        })   

        localStorage.setItem("cartItems" , JSON.stringify(getState().Cart.Products))
      
}

export const RemoveCart = (id) => (dispatch , getState)=>{

      dispatch({
            type:RemoveToCart,
            product:id
      })
}