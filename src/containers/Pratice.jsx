import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all'); // Set default to "all"
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        // Ensure unique categories
        const uniqueCategories = [...new Set(data.map((item) => item.category))];
        setUniqueCategories(uniqueCategories);
        setItems(data);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = selectedCategory === 'all' ? items : items.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div>
      <h2>Shop by Category</h2>
      <div>
        <input
          type="radio"
          name="category"
          value="all"
          checked={selectedCategory === "all"}
          onChange={() => handleCategoryChange("all")}
        />
        <label>All</label>
        {uniqueCategories.map((category) => (
          <div key={category}>
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={() => handleCategoryChange(category)}
            />
            <label>{category}</label>
          </div>
        ))}
      </div>

      <div>
        {filteredItems.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;