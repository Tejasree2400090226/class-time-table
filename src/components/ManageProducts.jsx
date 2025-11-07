import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const ManageProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({ name: "", price: "", image: "" });
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = { id: Date.now(), ...productData, price: parseFloat(productData.price) };
    const updatedProducts = [...products, newProduct];
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    setProductData({ name: "", price: "", image: "" });
  };

  const handleDeleteProduct = (id) => {
    const updated = products.filter(p => p.id !== id);
    localStorage.setItem("products", JSON.stringify(updated));
    setProducts(updated);
  };

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    alert("Product added to cart!");
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-pink-400 p-4 shadow-md">
        <h1 className="text-xl font-bold text-white">Manage Products</h1>
        <div className="flex items-center gap-4">
          {/* Dashboard Button */}
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Dashboard
          </button>

          {/* Logout Button (different color for visibility) */}
          <button
            onClick={() => navigate("/logout")}
            className="bg-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            Logout
          </button>

          {/* Cart Icon */}
          <div
            className="relative cursor-pointer bg-white p-2 rounded-lg hover:bg-gray-200 transition"
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart size={24} className="text-pink-500" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-sm">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* Add Product Form */}
      <form onSubmit={handleAddProduct} className="p-6 flex flex-col md:flex-row gap-4 justify-center">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={productData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={productData.price}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={productData.image}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>

      {/* Product List */}
      <div className="flex-1 overflow-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white shadow-md rounded-lg p-4 text-center">
            <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded mb-3" />
            <h3 className="font-bold text-lg">{p.name}</h3>
            <p className="text-gray-600">₹{p.price}</p>
            <div className="mt-2 flex justify-center gap-2">
              <button
                onClick={() => handleAddToCart(p)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
              >
                Add
              </button>
              <button
                onClick={() => handleDeleteProduct(p.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
