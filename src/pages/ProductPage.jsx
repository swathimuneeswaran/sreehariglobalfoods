import React, { useState } from "react";
import SearchBar from "../component/product/SearchBar";
import ProductContent from "../component/product/ProductContent";
import Footer from "../component/Footer";

const ProductPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <SearchBar onSearch={handleSearch} />
      <ProductContent searchQuery={searchQuery} category="fruits" />
      <Footer />
    </div>
  );
};

export default ProductPage;
