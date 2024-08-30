import React, { useContext, useState, useEffect } from 'react';
import './Products.css';
import { ProductContext } from '../../containers/Context';
import { useNavigate } from 'react-router-dom';

function Products() {
  const { filteredData } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [uniqueItems, setUniqueItems] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(filteredData.map(item => item.category))];
    setUniqueItems(uniqueCategories);
  }, [filteredData]);

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = selectedCategory === 'all' ? filteredData : filteredData.filter((item) => item.category === selectedCategory);
  const navigate = useNavigate();

  if (!filteredData.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <h3>Products</h3>
    <div className='Container'>
      <div className='Card-filter'>
        <input
          type='radio'
          name='category'
          value="all"
          checked={selectedCategory === "all"}
          onChange={() => setSelectedCategory('all')}
        />
        <label>All</label>
        {
          uniqueItems.map((category) => (
            <div key={category}>
              <input
                type='radio'
                name='category'
                value={category}
                checked={selectedCategory === category ? 'checked' : ''} // Use ternary operator
                onChange={() => handleCategory(category)}
              />
              <label>{category}</label>
            </div>
          ))
        }
      </div>
      <div className='card-Items'>
      {
        filteredItems.map((item) => (
          <div className='card' onClick={() => navigate(`/ProductDetails/${item.id}`)} key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.image} />
            <h4>$:{item.price}</h4>
          </div>
        ))
      }
      </div>
    </div>
    </>
  );
}

export default Products;