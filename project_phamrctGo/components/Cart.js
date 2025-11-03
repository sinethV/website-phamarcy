function Cart() {
  try {
    const [cartItems, setCartItems] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
      const cart = JSON.parse(localStorage.getItem('pharmacare_cart') || '[]');
      setCartItems(cart);
      
      const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      setTotal(cartTotal);
    }, []);

    const updateQuantity = (id, newQuantity) => {
      if (newQuantity <= 0) {
        removeItem(id);
        return;
      }
      
      const updatedCart = cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedCart);
      localStorage.setItem('pharmacare_cart', JSON.stringify(updatedCart));
      
      const cartTotal = updatedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      setTotal(cartTotal);
    };

    const removeItem = (id) => {
      const updatedCart = cartItems.filter(item => item.id !== id);
      setCartItems(updatedCart);
      localStorage.setItem('pharmacare_cart', JSON.stringify(updatedCart));
      
      const cartTotal = updatedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      setTotal(cartTotal);
    };

    const clearCart = () => {
      setCartItems([]);
      setTotal(0);
      localStorage.removeItem('pharmacare_cart');
    };

    if (cartItems.length === 0) {
      return (
        <div className="py-16 bg-white min-h-screen" data-name="cart" data-file="components/Cart.js">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="icon-shopping-cart text-6xl text-gray-300 mb-4"></div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Your Cart is Empty</h1>
            <p className="text-[var(--text-secondary)] mb-8">Add some products to get started</p>
            <a href="products.html" className="btn-primary">Continue Shopping</a>
          </div>
        </div>
      );
    }

    return (
      <div className="py-16 bg-white min-h-screen" data-name="cart" data-file="components/Cart.js">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Shopping Cart</h1>
          
          <div className="space-y-4 mb-8">
            {cartItems.map(item => (
              <div key={item.id} className="card flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--text-primary)]">{item.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{item.category}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded border border-[var(--border-color)] flex items-center justify-center hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="w-12 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded border border-[var(--border-color)] flex items-center justify-center hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                
                <div className="text-right">
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  <p className="text-sm text-[var(--text-secondary)]">${item.price} each</p>
                </div>
                
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <div className="icon-trash-2 text-lg"></div>
                </button>
              </div>
            ))}
          </div>
          
          <div className="card">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
              <button onClick={clearCart} className="text-[var(--text-secondary)] hover:text-red-500">
                Clear Cart
              </button>
            </div>
            
            <div className="flex space-x-4">
              <a href="products.html" className="btn-secondary flex-1 text-center">Continue Shopping</a>
              <button className="btn-primary flex-1">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Cart component error:', error);
    return null;
  }
}