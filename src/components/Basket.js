import React from 'react'
import Modal from "react-modal"
import "./Basket.css"
import { connect } from "react-redux"
import { removeGrocery } from "../Redux/Actions"

function Basket({ data, ismodal, setismodal, removeGrocery, cart }) {

    function cost() {
        let totalcost = 0
        cart.forEach(item => totalcost+=data.cost)
        return totalcost
    }


    const showdata = () => {



        if (data === undefined) {
            return ( <h1>Add Some Items</h1>)
            }
            else {

                return ( <div className = "container" >
                    <div className = "row" >

                    {

                        data.map(item => (

                            <div class = "card ml-5 mb-5">
                            <div class = "card-header">
                            <h3 > {item.name} </h3> 
                            </div>
                            <div class = "card-body" >
                            <h5 class = "card-title" > Weight: -{item.weight}gr </h5> 
    
                            <h1 > Price: -Rs.{item.cost} </h1> <button className = "btn btn-outline-danger"
                            onClick = {()=>removeGrocery(item.id)}>Remove</button> </div>    
                            </div>

                        ))
                    } 
                    </div> 
                    <div className = "row" >
                    <h1 className = "display-1 ml-auto" > < b > Total -: Rs. { cost() } < /b></h1>
                    </div>

                    </div>
                )
            }
        }

        return ( 
            <Modal isOpen ={ ismodal } ariaHideApp = { false }>
            <div className="row">
            <button style={{ borderRadius: "40%" }} onClick = {() => setismodal(false) } className = "btn btn-outline-danger mr-5 text-white text-dark ml-auto"> <b> <h1> X </h1></b> </button> </div> 
            <ul className="list-group"> {
                showdata()
            } 
            </ul>

            </Modal>
        )
    }

    const mapStateToProps = state => {
        return {
            cart: state.addCartReducer
        }

    };

    export default connect(mapStateToProps, { removeGrocery })(Basket)