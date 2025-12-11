import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardProduct from "../components/CardProduct";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 cow-cols-md-3 row-cols.lg-4 g-3">
          <div className="col">
            {products.map((product) => (
              <div key={product.id}>
                <CardProduct product={product} />
                <Link to={`/products/${product.id}`}>See details</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
