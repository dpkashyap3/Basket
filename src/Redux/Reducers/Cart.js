import {ADD_GROCERY,REMOVE_GROCERY} from "../Actions"
import {addTocart} from "./helper"

export default function addCartReducer(state=[],action){
    let cart;
    switch (action.type) {
        case ADD_GROCERY:
            cart=[...state,addTocart(action.id)]
            return cart
            
        case REMOVE_GROCERY:
            cart=state.filter(item=>item.id !== action.id)
            return cart
     
        default:return state
    }
}

