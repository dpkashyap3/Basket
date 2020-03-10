import React, { Component } from 'react';
import {connect} from "react-redux"
import {addGrocery} from "../Redux/Actions"

class Grocery extends Component {
  render() {
    
    return (
        <div className='container'>
      <div className="col-md-6 col-lg-12">
        <h1 className=" align-center">Grocery List</h1>
        <div className="row">
         
        {
            this.props.groceryList.map(item=>(
                
                <div className="col-sm-4 mb-4" key={item.id}>
                  <div className=" text-white bg-dark">
                    <div className="card-body">
                      <h3 className="card-title">{item.name}</h3>
                      <h4 className="badge badge-success ml-3">{item.weight}mg</h4>
                      <h4 className="badge badge-primary ml-3">{item.calories}kcal</h4>
                      <h1><span class="badge badge-white">Rs.{item.cost}</span></h1>
                      <button onClick={()=>this.props.addGrocery(item.id)} className="btn btn-success btn-sm">Add To Basket</button>
                    </div>
                  </div>
                </div>
            ))
        }
        
  
          
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  return{
    groceryList:state.grocery
  }
}

export default connect(mapStateToProps,{addGrocery})(Grocery)