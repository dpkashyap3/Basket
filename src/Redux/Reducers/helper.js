import Data from "../Data/Data.json"

export function addTocart(id) {
    let item=Data.find(item=>item.id===id)
    return item
 }