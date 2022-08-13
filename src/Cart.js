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
                    Cartimage:'https://cdn-icons-png.flaticon.com/512/644/644458.png',
                    id:1
                },
                {
                    
                        price:5999,
                        title:"Watch",
                        qty:2,
                        Cartimage:'https://as1.ftcdn.net/v2/jpg/03/01/52/70/1000_F_301527093_MsrLRU3oL6lGoF5OCBNGugZ1M4MkZzXm.jpg',
                        id:2
                    
                },
                {
                    
                    price:6999,
                    title:"laptop",
                    qty:2,
                    Cartimage:'https://as1.ftcdn.net/v2/jpg/00/86/83/68/1000_F_86836872_WRScBX15NPeRRWjfzRZgkuzQCZZlpSzB.jpg',
                    id:3            
            }
            ]
        }
    }

handleIncreaseQuantity=(product)=>{
    // console.log('hey increase qty',product);
    const {products}=this.state;
    const index = products.indexOf(product);
    products[index].qty+=1;
    // console.log( products[index].qty)
    const max= products[index].qty;

    if(max<=5){
        this.setState({
            products
        })
    }
    else{
        window.alert("cant add more than 5 products")
    }
   
}
handleDecreaseQuantity=(product)=>{
    // console.log('hey decrease qty',product);
    const {products}=this.state;
    const index = products.indexOf(product);
    products[index].qty-=1;
    const min= products[index].qty;
    if(min>0){
        this.setState({
            products
    
        })
    }
    else{
        window.alert("Hey Your cart item will be empty")
    }
}

  render () {
   const {products}=this.state;
    return (
      <div className="cart">
        {
            products.map((product)=>{
                return (
                    <CartItems 
                    product={product} 
                    key={product.id}
                    increaseQuantity={this.handleIncreaseQuantity}
                    decreaseQuantity={this.handleDecreaseQuantity}
                    />
                )
            })
        }
       
      </div>
    );
  }
}

export default Cart;