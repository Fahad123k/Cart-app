import React from "react";

class CartItems extends React.Component{
  
    // increaseQuantity=()=>{
    //     console.log("increasing test",this)
        
    //     if(this.state.qty<5){
    //         this.setState({
    //             qty: this.state.qty+1
    //          })
    //     } 
    //     else{
    //         console.log("cant buy more than 20");
    //         window.alert("cant buy more than 10 product")
    //     }
       
    // }
    // decreaseQuantity=()=>{
    //     console.log("decreasing test",this)
    //     // second form of changing state
    //     // if we require prev sate then we use prevState funct arrow=>
    //     if(this.state.qty>1){
    //         this.setState((prevState)=>{
    //             return{
    //                 qty:prevState.qty-1
    //             }
    //         })
    //     }
    //     else{
    //         window.confirm("Do you not want to buy!")
    //     }
       
    // }

    // removeCartItems=()=>{
    //     console.log("increasing test",this.state.qty)
        
    //     window.alert("Are you sure to delete cart items!")
    //     this.setState({
        
    //         qty: this.state.qty=0
    //      })
       
       
    // }
    render(){
        console.log('this.props',this.props)
        const {price,title,qty, Cartimage}=this.props.product;

        const {product ,increaseQuantity,decreaseQuantity,OnDeleteProduct}=this.props;
        return (
            <div className="cart-item" style={{border: '1px solid #777'}}>
                <div className="left-block">
                    <img  src={Cartimage}  style={styles.image}/>
                </div>
                <div className="rigt-block">
                    <div style={{fontSize:25,fontWeight:"bold"} }>{title}</div>
                    <div style={{color:"#777"} }>Rs: {price}</div>
                    <div style={{color:"#777"} }>Qty: {qty }</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        {/* htttp://www.flatIcons.com */}
                        <img src="https://as2.ftcdn.net/v2/jpg/01/26/10/59/1000_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg" alt="increase" className="action-icons" 
                        onClick={()=> increaseQuantity(product)}
                        />
                        <img src="https://cdn-icons-png.flaticon.com/512/56/56889.png" alt="decrease" className="action-icons"
                         onClick={()=> decreaseQuantity(product)}
                        />
                        <img src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" alt="delete" className="action-icons deleteCart " 
                         onClick={()=> OnDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const styles={
    image:{
        height:110,width:110, borderRadius:4,
        
    }
}
export default CartItems;