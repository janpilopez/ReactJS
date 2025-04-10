import React, { useState } from 'react';
import './ProductList.css'; 
import { useDispatch } from 'react-redux';
import { addItemToCart } from './CartSlice';

const ProductList = () => {

  const dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]);

  const handleAddToCart = product => {
    //al hacer eso dispatch envia type y payload
    //el tipo es el nombre del reducer con el nombre dela funcin
    //payload es lo que estamos enviando la data
    dispatch(addItemToCart(product));
    setDisabledProducts([...disabledProducts, product.id]); // Mark the product as disabled
  };

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map(product => (
          <li key={product.id} className="product-list-item">
          <span>{product.name} - ${product.price}</span>
          <button className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`}
          onClick={ () => handleAddToCart(product)}
          //si manejamos esta funcion solo permite el agrego una vez
          //y vuelve a dar error cuando la eliminamos y queremos volver a agreagr
          // disabled={disabledProducts.includes(product.id)}
          >
            Add to Cart
          </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
