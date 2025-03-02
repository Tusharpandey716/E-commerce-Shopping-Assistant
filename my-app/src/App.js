import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to search for products
  const searchProducts = async () => {
    if (!query.trim()) return;
    setLoading(true);
    
    try {
      const response = await axios.get(`http://127.0.0.1:8000/search?query=${query}`);
      console.log("API Response:", response.data); // Debugging
      setProducts(response.data.results);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    
    setLoading(false);
  };

  return (
    <div className="app-container">
      {/* Search Box */}
      <div className="search-box">
        <h1 className="title">AI Shopping Assistant</h1>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search for products (e.g., Nike)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={searchProducts} className="search-button">
            Search
          </button>
        </div>
      </div>

      {/* Loading Indicator */}
      {loading && <p className="loading-text">Searching...</p>}

      {/* Product Results */}
      <div className="product-container">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <p className="product-category">Category: {product.category}</p>
            </div>
          ))
        ) : (
          !loading && <p className="no-results">No products found</p>
        )}
      </div>
    </div>
  );
};

export default App;
