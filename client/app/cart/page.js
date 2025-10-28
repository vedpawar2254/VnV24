'use client';

import { useState } from 'react';

export default function CartPage() {
  // Sample cart data - in a real app this would come from context or state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Saffron Bliss Essential Oil',
      price: 2499,
      quantity: 1,
      image: 'https://picsum.photos/200/200',
      category: 'Oils'
    },
    {
      id: 2,
      name: 'Classic Oud Perfume',
      price: 7999,
      quantity: 2,
      image: 'https://picsum.photos/200/300',
      category: 'Perfumes'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 499 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif font-bold text-gold mb-2">Your Cart</h1>
      <p className="text-text-secondary mb-8">Review the items in your shopping cart.</p>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-serif mb-4">Your cart is empty</h2>
          <p className="text-text-secondary mb-6">Looks like you haven't added anything to your cart yet.</p>
          <a href="/shop" className="inline-block bg-gold text-text-dark px-6 py-3 rounded-md font-medium hover:bg-amber-600 transition-colors duration-300">
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-secondary rounded-lg overflow-hidden">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center p-6 border-b border-border-color last:border-b-0">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="ml-6 flex-grow">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-text-secondary text-sm">{item.category}</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-text-secondary hover:text-gold transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="flex items-center border border-border-color rounded-md">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-text-secondary hover:text-gold"
                        >
                          -
                        </button>
                        <span className="px-3 py-1">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-text-secondary hover:text-gold"
                        >
                          +
                        </button>
                      </div>
                      <div className="ml-auto font-semibold">₹{item.price * item.quantity}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-secondary rounded-lg p-6 h-fit">
            <h2 className="text-2xl font-serif font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>
              <div className="border-t border-border-color pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
            <a 
              href="/checkout" 
              className="block w-full bg-gold text-center text-text-dark py-3 rounded-md font-medium hover:bg-amber-600 transition-colors duration-300"
            >
              Proceed to Checkout
            </a>
            <a 
              href="/shop" 
              className="block w-full text-center mt-4 text-forest-green py-3 rounded-md font-medium hover:text-gold transition-colors duration-300"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      )}
    </div>
  );
}