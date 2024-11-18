import React from 'react';
import { useProducts } from '../../../hooks/useProducts';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';

const ProductList: React.FC = () => {
  const { data: products, isLoading, error } = useProducts();
  const dispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <div className="product-list">
      {products?.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.price} USD</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
