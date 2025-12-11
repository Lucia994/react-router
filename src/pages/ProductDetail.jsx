import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      if (res.data) {
        setProduct(res.data);
        setLoading(false);
      } else {
        navigate("/products");
      }
    });
  }, [id]);

  return (
    <>
      {loading === true && "Loading..."}
      {product !== null && (
        <div className="cointainer">
          <div className="row row-cols-1 cow-cols-md-3 row-cols.lg-4 g-3">
            <div className="col">
              <CardProduct product={product} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
