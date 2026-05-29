import "../../../../styles/product.css"

const Product = ({ product, onClick }) => {
  return (
    <div className="product-card border p-3 rounded cursor-pointer"
         onClick={onClick}
    >
      <img src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  )
}

export default Product
