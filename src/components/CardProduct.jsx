export default function CardProduct({ product }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
        ></img>
        <h5 className="card-title">{product.title}</h5>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>
      </div>
    </div>
  );
}
