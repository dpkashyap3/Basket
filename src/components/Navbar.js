import React,{useState} from 'react';
import Basket from "./Basket"
import {useSelector} from "react-redux"

const Navbar=(props)=>{

    const [ismodal, setismodal] = useState(false)
    const cart =useSelector(state=>state.addCartReducer)
    return(
    <nav className="navbar navbar-dark bg-dark">
    <div className="container">
            <span className="navbar-brand">Shopping App</span>
            <form className="form-inline">
                <button type="button" onClick={()=>setismodal(true)} class="btn btn-warning">
                    Basket <span class="badge badge-light">{cart.length}</span>
                </button>
            </form>
            <Basket data={cart} ismodal={ismodal} setismodal={setismodal}/>   
    </div>
</nav>
    )
}


export default Navbar