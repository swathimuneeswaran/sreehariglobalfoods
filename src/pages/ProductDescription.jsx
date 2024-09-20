import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductPage.css";
import { products } from "../productslist/product.js";
import RelatedProducts from "../component/product/RelatedProducts.jsx";
import Footer from "../component/Footer.jsx";

const ProductDescription = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  const [currentImage, setCurrentImage] = useState(0);
  const [isHowToUseOpen, setIsHowToUseOpen] = useState(false);
  const [isPackagingOpen, setIsPackagingOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const imageInterval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === product.side_images.length ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(imageInterval);
  }, [product.side_images.length, id]);

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  const toggleHowToUse = () => {
    setIsHowToUseOpen(!isHowToUseOpen);
  };

  const togglePackaging = () => {
    setIsPackagingOpen(!isPackagingOpen);
  };

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id
    )
    .slice(0, 4);

  return (
    <>
      {product ? (
        <div className="product-page">
          <div className="product-info">
            <div className="product-images">
              <div className="side-images">
                <div
                  className={`side-image ${currentImage === 0 ? "active" : ""}`}
                  onClick={() => handleImageClick(0)}
                >
                  <img src={product.image} alt="Main Product Image" />
                </div>
                {product.side_images.map((side_image, index) => (
                  <div
                    key={index}
                    className={`side-image ${
                      currentImage === index + 1 ? "active" : ""
                    }`}
                    onClick={() => handleImageClick(index + 1)}
                  >
                    <img
                      src={side_image}
                      alt={`Additional Product Image ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <div className="main-image-container">
                <img
                  src={
                    currentImage === 0
                      ? product.image
                      : product.side_images[currentImage - 1]
                  }
                  alt="Main Product Image"
                  className="main-image"
                />
              </div>
            </div>
            <div className="product-content1">
              <h1 className="product-title">{product.name}</h1>
              <p className="product-subtitle">
                Nutritional Benefits & Features
              </p>
              <p>{product.nutritional_benefits}</p>
              <div className="product-features">
                <h2>Features</h2>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex-boxes">
                <div
                  className={`toggle-box ${isHowToUseOpen ? "open" : ""}`}
                  onClick={toggleHowToUse}
                >
                  <h2>How to Use</h2>
                  <div className="box-content">
                    <p>{product.how_to_use}</p>
                  </div>
                </div>
                <div
                  className={`toggle-box ${isPackagingOpen ? "open" : ""}`}
                  onClick={togglePackaging}
                >
                  <h2>Packaging</h2>
                  <div className="box-content">
                    <p>{product.packaging}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RelatedProducts relatedProducts={relatedProducts} />
        </div>
      ) : (
        <div>Product not found</div>
      )}
      <Footer />
    </>
  );
};

export default ProductDescription;
