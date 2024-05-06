import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import img1 from '../Images/img1.jpg';

export default function Signup() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSignupClick = async (e) => {
        e.preventDefault();
        if(userData.password.length < 8){
            toast.warn('Password must be at least 8 characters long');
            return;
        }
        if (userData.name && userData.email && userData.password) {
          try {
            const response = await axios.post("http://localhost:5000/api/v1/user/register", {
              name: userData.name,
              email: userData.email,
              password: userData.password
            });
            if (response.status === 200) {
              toast.success("Signup successful!");
              // Navigate to the login page after successful signup
              window.location.href = "/login";
            } else {
              setError("Unknown error occurred.");
            }
          } catch (error) {
            console.error(error);
            setError("Signup failed. Please try again later.");
          }
        } else {
          toast.error("Fill all the details!");
        }
    };

    return (
        <div className="flex flex-col md:flex-row w-full h-screen px-6 md:px-0 lg:px-32 items-center">
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-white py-12 px-8 md:px-16 lg:px-24">
        <Link to={'/'} className="text-[50px] font-protest text-center mb-6">
          Hama Store
        </Link>
        <h2 className="text-2xl font-semibold font-poppins text-center mb-2">
          Welcome
        </h2>
        <p className="font-poppins text-center mb-6">Signup Here...</p>
        <form
          className="w-full max-w-md"
          autoComplete="off"
          onSubmit={handleSignupClick}
        >
          <div className="mb-4">
            <label htmlFor="name" className="hidden">
              Enter Username
            </label>
            <input
              type="text"
              name="name"
              value={userData.name}
              placeholder="Enter your username"
              className="border border-blue-500 h-12 px-4 w-full outline-none transition-colors rounded-full text-blue-700"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="hidden">
              Enter Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              placeholder="example@email.com"
              className="border border-blue-500 h-12 px-4 w-full outline-none transition-colors rounded-full text-blue-700"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="hidden">
              Enter Password
            </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              placeholder="Enter your Password"
              required
              className="border border-blue-500 h-12 px-4 w-full outline-none transition-colors rounded-full text-blue-700"
              onChange={handleInputChange}
            />
          </div>
          {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 text-center text-white font-semibold bg-blue-500 border border-blue-500 rounded-full hover:bg-blue-600 transition"
          >
            Signup
          </button>
        </form>
        <p className="mt-4 text-center">
          Already registered?{" "}
          <Link to="/login" className="text-blue-500 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
      <div className="md:w-1/2 hidden md:block">
        <img src={img1} className="object-contain w-full" alt="" />
      </div>
    </div>
    );
}
