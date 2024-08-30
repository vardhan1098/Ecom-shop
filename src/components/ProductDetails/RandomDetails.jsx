import React, { useContext } from "react";
import { ProductContext } from "../../containers/Context";
import './Random.css';

const RandomDetails = React.memo (({ currentTitle }) => {
  const { allProducts } = useContext(ProductContext);

  const randomProducts = allProducts.filter(
    (item) => item.title !== currentTitle
  );

  const shuffleProducts = randomProducts.sort(() => 0.5 - Math.random());

  const selectedProducts = shuffleProducts.slice(0, 4);
  return (
    <div className="random">
      <div className="random-products">
        <h3>Related Products</h3>
        <div className="product-grid">
          {selectedProducts.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.title}</h3>
              <img src={product.image} />
              <h4>Price: ${product.price}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default RandomDetails;
