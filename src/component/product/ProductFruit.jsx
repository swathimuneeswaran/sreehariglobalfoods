import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../../styles/ProductPage.css";
import { products } from "../../productslist/product.js";

const ProductFruit = ({ searchQuery = '', categories = [], navCategories = [] }) => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const scrollableContentRef = useRef(null);

  const navbarCategories = location.state?.navCategories || navCategories;

  // Function to filter products by both the original categories and navbar categories
  const filterProducts = () => {
    let filtered = products;

    if (categories.length > 0 || navbarCategories.length > 0) {
      filtered = filtered.filter(product =>
        (categories.some(category => product.category && product.category.includes(category))) ||
        (navbarCategories.some(category => product.category && product.category.includes(category)))
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  useEffect(() => {
    const newFilteredProducts = filterProducts();

    // Only update state if the filtered products have changed
    if (JSON.stringify(newFilteredProducts) !== JSON.stringify(filteredProducts)) {
      setFilteredProducts(newFilteredProducts);
    }

    // Scroll to top when products are filtered
    if (scrollableContentRef.current) {
      scrollableContentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: Adds a smooth scrolling effect
      });
    }

  }, [searchQuery, categories, navbarCategories]);

  return (
    <div className="container">
      <div
        className="scrollable-content"
        ref={scrollableContentRef}
        style={{ maxHeight: '100vh', overflowY: 'auto' }}
      >
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, id) => (
              <div key={id} className="col-5 col-sm-6 col-md-3 mb-4 column_product">
                <div className="card">
                  <Link to={`/details/${item.id}`}>
                    <button className="card-button">More Info</button>
                  </Link>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">No products found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFruit;
