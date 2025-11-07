import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-pink-400 p-4 text-blue-md">
        <div className="flex items-center">
          <img src="kllogo.jpeg" alt="KL Logo" className="w-20 mr-3 rounded-lg" />
          <h1 className="text-2xl font-bold">Product Management System</h1>
        </div>

        <div className="flex gap-4">
          <Link
            to="/signin"
            className="bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Sign Up
          </Link>
          <Link
            to="/aboutus"
            className="bg-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            About Us
          </Link>
        </div>
      </nav>

      {/* Main Content (Center-Aligned) */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl font-semibold mb-4 text-gray-800">
          Welcome to the Product Management System
        </h2>
        <p className="text-lg mb-2 text-gray-700">
          Manage products, users, and inventory easily.
        </p>
        <p className="text-gray-600 mb-8">
          Sign up as an <span className="font-semibold text-pink-600">Admin</span> or{" "}
          <span className="font-semibold text-pink-600">User</span> to get started.
        </p>

        <div className="flex gap-4">
          <Link
            to="/signin"
            className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
          >
            Get Started
          </Link>
          <Link
            to="/aboutus"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
