import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/ProductPage.css";

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <div className="related-products">
      <h2 style={{ textAlign: "center" }}>Related <span style={{color:"green"}}>Products</span></h2>
      <div className="related-products-grid">
        {relatedProducts.map((product) => (
          <div key={product.id} className="related-product-item">
            <Link to={`/details/${product.id}`}>
              <img src={product.image} alt={product.name} className="related-product-image" />
              <h3 className="card-title">{product.name}</h3>
              <button className="card-button">View Details</button>
            </Link>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
