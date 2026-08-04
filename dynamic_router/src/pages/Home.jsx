import { Link } from "react-router-dom";
import products from "../data/products";

function Home() {
  return (
    <div className="container">
      <h1>🛒 Product Catalog</h1>

      {products.map((product) => (
        <div key={product.id} className="card">
          <h2>{product.name}</h2>

          <p>{product.price}</p>

          <Link to={`/product/${product.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;