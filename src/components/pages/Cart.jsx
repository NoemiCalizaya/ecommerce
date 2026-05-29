// components/Cart.jsx

import { useCart } from "../../context/CartContext";

function Cart() {
  const { cart, changeQuantity, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {cart.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <div>
              <button onClick={() => changeQuantity(item.id, -1)}>-1</button>
                <p>quantity: {item.qty}</p>
              <button onClick={() => changeQuantity(item.id, 1)}>+1</button>
            </div>
            

            <button onClick={() => removeFromCart(item.id)}>
              Eliminar
            </button>
          </div>
          ))}

          <button onClick={clearCart}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
