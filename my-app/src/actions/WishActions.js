import { AddWishItem } from "../constants/WishlistConstants"


export const AddWish = ( data ) => (dispatch , getState) =>{
   dispatch({
    type : AddWishItem,
    payload : data
   })

   localStorage.setItem("wishitems" , JSON.stringify(getState().WishList.wishItems))
}