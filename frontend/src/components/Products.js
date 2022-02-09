import { React, useContext } from "react";
import { Link } from "react-router-dom";

import { BooksContext } from '../App';

const Products = props => {


const context = useContext(BooksContext);
  

  return ( 
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="../components/Cart">Sepetim</Link>
      </h2>



 

      {context.state.bookList.map(book => (

      <div  clasName="book"  key={book.id}>
          <img src={book.image } alt={book.name}  /> 
       <div>
         <h4>{book.name}</h4>
         <p>{book.author}</p>
         <p>fiyat : {book.price}</p>
         <button onClick={() => context.addToCart(book)}>sepete ekle</button>
       </div>

       </div>  

      ))}

      
      
          
      



 

      



    </div>

  );
};

export default Products;
