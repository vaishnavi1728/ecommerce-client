import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/Auth";
import axios from "axios";
import img1 from '../Images/img1.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [auth, setAuth] = useAuth();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://ecommerce-server-1-2twm.onrender.com/api/v1/user/login`, {
        email: userData.email,
        password: userData.password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        toast.success("Login Successful");
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("error");
    }
  };

  // const handleForgotPassword = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await dispatch(forgotPassword(userData.email)).unwrap(); // Dispatch forgotPassword with user's email
  //     toast.success(response.message);
  //     setError("email send for reset email")
  //   } catch (error) {
  //     console.error(error);
  //     setError("Forgot password failed. Please try again later.");

  //   }
  // };

  // const handleForgotPassword = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await dispatch(forgotPassword(userData.email)).unwrap();
  //     // setInfoMessage(response.message); // Set info message to show success
  //     setError("Mail send Successfully");
  //   } catch (error) {
  //     console.error(error);
  //     setError("Forgot password failed. Please try again later.");
  //   }
  // };

  return (
   <div className="flex flex-col md:flex-row w-full h-screen px-6 md:px-0 lg:px-32 items-center">
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-white py-12 px-8 md:px-16 lg:px-24">
        <Link to={'/'} className="text-[50px] font-protest text-center mb-6">
          Hama Store
        </Link>
        <h2 className="text-2xl font-semibold font-poppins text-center mb-2">
          Welcome
        </h2>
        <p className=" font-poppins text-center mb-6">
          Please login to continue...
        </p>
        <form
          action=""
          className="w-full max-w-md"
          autoComplete="off"
          onSubmit={handleLogin}
        >
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
          <p className="text-red-500 text-xs mb-4">{error}</p>
          <button
            type="submit"
            className="w-full py-2 text-center text-white font-semibold bg-blue-500 border border-blue-500 rounded-full hover:bg-blue-600 transition"
          >
            Log In
          </button>
        </form>
        <div className="flex justify-center mt-6">
          <Link
            to="/forgotpassword"
            className="text-blue-500 font-semibold hover:underline"
          >
            Forgot password
          </Link>
          <span className="mx-2">|</span>
          <Link
            to="/signup"
            className="text-blue-500 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 hidden md:block">
        <img src={img1} className="object-contain w-full" alt="" />
      </div>
    </div>
  );
};



export default Login;
