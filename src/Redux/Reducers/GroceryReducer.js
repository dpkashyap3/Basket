import {ADD_GROCERY,REMOVE_GROCERY} from "../Actions"
import {addTocart} from "./helper"
import Data from "../Data/Data.json"

export default function grocery(state=Data,action){
    let grocery;
    switch (action.type) {
        case ADD_GROCERY:
            grocery=state.filter(item=>item.id !== action.id)
            return grocery
        case REMOVE_GROCERY:
           grocery=[...state,addTocart(action.id)];
            return grocery

        default:return state
    }
}