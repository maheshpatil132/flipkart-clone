import { AddWishItem } from "../constants/WishlistConstants"

const initialState = {
    wishItems : localStorage.getItem('wishitems') ? JSON.parse(localStorage.getItem('wishitems')) : []
}

export const wishReducer =(state = initialState , action) => {
    const item = action.payload
  switch(action.type){
    case AddWishItem :
        const isExist = state.wishItems.find((e)=> e._id === item._id)
        if(isExist){
           return{
            ...state,
            wishItems : state.wishItems.filter((e)=> e._id !== item._id),
            
           }
        }else{
            return{
                ...state, 
                wishItems : [...state.wishItems , item]
            }
        }
        
        default : return state
  }
}