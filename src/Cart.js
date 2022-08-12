import React from 'react';
import CartItems from './CartItems';

class Cart extends React.Component {

      // use constructor for the state of cart items
      constructor(){
        super();
        this.state={
            products:[

                {
                    price:39999,
                    title:"Iphone",
                    qty:1,
                    Cartimage:'https://cdn-icons-png.flaticon.com/512/644/644458.png'
                },
                {
                    
                        price:5999,
                        title:"Watch",
                        qty:2,
                        Cartimage:'https://as1.ftcdn.net/v2/jpg/03/01/52/70/1000_F_301527093_MsrLRU3oL6lGoF5OCBNGugZ1M4MkZzXm.jpg'
                    
                },
                {
                    
                    price:6999,
                    title:"laptop",
                    qty:2,
                    Cartimage:'https://as1.ftcdn.net/v2/jpg/00/86/83/68/1000_F_86836872_WRScBX15NPeRRWjfzRZgkuzQCZZlpSzB.jpg'                
            }
            ]
        }
    }


  render () {
   const {products}=this.state;
    return (
      <div className="cart">
        {
            products.map((product)=>{
                return <CartItems product={product}/>
            })
        }
       
      </div>
    );
  }
}

export default Cart;