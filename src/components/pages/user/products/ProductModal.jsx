import { useState } from "react";
import { useCart } from "../../../../context/CartContext";

const ProductModal = ({ product, onClose }) => {

  /*const handleAddToCart = (e) => {
    e.stopPropagation()
    console.log("Agregar al carrito:", product)
  }*/

  const { addToCart } = useCart();

  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      {/* cerrar al click fuera */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* card */}
      <div className="bg-white w-[420px] p-5 rounded-lg relative z-10">

        <button
          className="absolute top-2 right-2"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full rounded"
        />

        <h2 className="text-xl font-bold mt-3">
          {product.title}
        </h2>

        <p className="text-gray-600 mt-2">
          {product.description}
        </p>

        <p className="text-lg font-bold mt-2">
          ${product.price}
        </p>

        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white w-full mt-4 p-2 rounded"
        >
          Agregar al carrito
        </button>

        {/* mensaje */}
        {added && (
          <div className="bg-green-100 text-green-700 p-2 mt-3 rounded">
            ✔ Producto agregado al carrito
          </div>
        )}

      </div>
    </div>
  )
}

export default ProductModal
