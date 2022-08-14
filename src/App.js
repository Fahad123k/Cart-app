import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {


  constructor() {
    super();
    this.state = {
      products: [

        {
          price: 1000,
          title: "Iphone",
          qty: 1,
          offer:10,
          Cartimage: 'https://cdn-icons-png.flaticon.com/512/644/644458.png',
          id: 1
        },
        {

          price: 3000,
          title: "Watch",
          qty: 2,
          offer:22,
          Cartimage: 'https://as1.ftcdn.net/v2/jpg/03/01/52/70/1000_F_301527093_MsrLRU3oL6lGoF5OCBNGugZ1M4MkZzXm.jpg',
          id: 2

        },
        {

          price: 2000,
          title: "Laptop",
          qty: 2,
          offer:25,
          Cartimage: 'https://as1.ftcdn.net/v2/jpg/00/86/83/68/1000_F_86836872_WRScBX15NPeRRWjfzRZgkuzQCZZlpSzB.jpg',
          id: 3
        },
        {

          price: 6000,
          title: "Acer",
          qty: 3,
          offer:33,
          Cartimage: 'https://cdn-icons.flaticon.com/png/512/1865/premium/1865273.png?token=exp=1660403552~hmac=4bbb8c59023f61d5a8ae42c7eeb2a3e7',
          id: 4
        }
      ]
    }
  }

  handleIncreaseQuantity = (product) => {
    // console.log('hey increase qty',product);
    const { products } = this.state;
    const index = products.indexOf(product);
    // console.log( products[index].qty)
    const max = products[index].qty;
    
    if(max===10) {return;};
    
    products[index].qty += 1;
      this.setState({
        products
      })
   

  }
  handleDecreaseQuantity = (product) => {
    // console.log('hey decrease qty',product);
    const { products } = this.state;
    const index = products.indexOf(product);
   
    const min = products[index].qty;
    
    if(min===0) {return;};
    products[index].qty -= 1;
      this.setState({
        products

      })
   
  
  }

  handleDeleteProduct = (id) => {
    // select product from this .state
    const { products } = this.state;
    // fillter products whose id not equalt to select id n return new array
    const items = products.filter((items) => items.id !== id);
    // copy new products list from items
    this.setState({
      products: items
    })

  }
  getCartCount=()=> {
    const{ products}=this.state;
    let count=0;

    products.forEach(product => {
      count+=product.qty;
    });

    return count;
  }
  getCartTotal =()=>{
    const{ products}=this.state;
    let totalPrice=0;
    products.forEach(product => {
      totalPrice+=product.qty*product.price;
    });

    return totalPrice;

  }
  render() {
    const { products}= this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
        products={products}
          increaseQuantity={this.handleIncreaseQuantity}
          decreaseQuantity={this.handleDecreaseQuantity}
          OnDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{fontSize:20,padding:10} }> TOTAL: Rs {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
