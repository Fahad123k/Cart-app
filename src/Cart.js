import React from 'react';
import CartItems from './CartItems';

const Cart =(props)=> {

      // use constructor for the state of cart items

   const {products}=props;
    return (
      <div className="cart">
        {
            products.map((product)=>{
                return (
                    <CartItems 
                    product={product} 
                    key={product.id}
                    increaseQuantity={props.increaseQuantity}
                    decreaseQuantity={props.decreaseQuantity}
                    OnDeleteProduct={props.OnDeleteProduct}
                    />
                )
            })
        }
       
      </div>
    );
  }


export default Cart;