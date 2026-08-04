import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="details">
      <h1>{product.name}</h1>

      <h3>{product.price}</h3>

      <h4>{product.category}</h4>

      <p>{product.description}</p>

      <Link to="/">⬅ Back to Products</Link>
    </div>
  );
}

export default ProductDetails;