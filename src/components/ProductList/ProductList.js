import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setProducts,selectProducts } from "../../slices/productSlice";
import image1 from "../../images/1.jpg"

import axios from "axios";

import "./styles.css";
import { addToCart } from "../../slices/cartSlice";

export default function ProductList() {
//   const [allProducts, setAllProducts] = useState([]);

const dispatch=useDispatch();
const products = useSelector(selectProducts);



useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [dispatch]);


  return (
    <div>
      <h6>Featured Products</h6>
      <div className="product-list">
      {products.map((item) => {
        return (
          <section key={item.id}  className="product-card">
          <img src={image1} alt="T-Shirt "/>
            <h6>Title:{item.title}</h6>
            <h6>Price:{item.price}$</h6>
            <p>Description:{item.description}</p>
            <button type="button" onClick={()=>{dispatch(addToCart(item))}}>Add</button>
          </section>
        );
      })}


      </div>
     
    </div>
  );
}
