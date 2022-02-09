import {React,createContext,useState} from 'react';
import "./styles.css";
import { Link } from "react-router-dom";


import { data } from "./data";

// ilk once createContext  degiskeni atamasi yapilir
export const BooksContext = createContext();




export default function App() {

  const [state,setState]= useState({
    bookList :data,
    cart: []
  });



  // this the function for add to chart

  const addToCart =  book => setState({
    ...state,
    cart: state.cart.find(cartItem => cartItem.id === book.id)
    ? state.cart.map(cartItem =>cartItem.id === book.id ? {... cartItem, count:cartItem.count +1}
      
      : cartItem
      
      )

      :[...state.cart, {...book,count:1 }]
  })


  const removeFromCart = id=> {
    setState({...state,
    cart:state.cart.filter(cartItem => cartItem.id !== id == id )})

  }

  // increase button  function

  const increase = id => {
    setState({...state,
    cart: state.cart.find(cartItem => cartItem.id === id ? {... cartItem, count:
      cartItem.count +1} : cartItem)
    })
  }


  // decrease functipn 
  const decrease = id =>{
    setState({...state,
    cart:state.cart.map(cartItem => cartItem.id === id ? {... cartItem, count:
    cartItem.count > 1 ? cartItem.count - 1 : 1 }: cartItem)
  })
  }



  return (
    <BooksContext.Provider  value={{state:state,addToCart,increase,decrease,removeFromCart}}>
    <div className="App">
      <h1>
        Alışveriş Sepeti Yapımı
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />{" "}
        React Dersleri
      </h1>
      <Link to="./components/Products" > Products</Link> 
      <Link to="./components/Cart"> My Cart </Link>

      
    </div>


    </BooksContext.Provider>
  );
}
