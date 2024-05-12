import { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopContext } from "../Context/ShopContext";
import Cart from "./users/Cart";
import axios from "axios";
import { useAuth } from "../Context/Auth";
import { toast } from "react-toastify";
import Aboutus from "./Aboutus";
import Nocartitems from "./users/Nocartitems";

export const Navbar = () => {
  const [auth, setAuth] = useAuth();

  // logout pe click hone par localstorage se data remove kar denge
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  const { getTotalCartItems } = useContext(ShopContext);
  const [open, setopen] = useState(false);
  const [abt, setabt] = useState(false);
  const handler = () => {
    setopen(!open);
  };

  const [data_product, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          "https://ecommerce-server-1-2twm.onrender.com/api/v1/prod/get"
        );

        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(data_product);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredProducts(null);
    } else {
      const filtered = data_product.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const clearsearch = () => {
    setSearchQuery("");
    handleSearch();
  };
  return (
    <>
      <div className="z-50 flex flex-col w-full">
        <div className="flex flex-row justify-between items-center mx-6 md:mx-20 my-6 font-poppins">
          <div className="flex gap-3 items-center">
            <img
              src={logo}
              alt=""
              className="h-[35px] hidden sm:block w-[33px]"
            />
            <Link to="/" className="text-2xl  ">
              HamaStore
            </Link>
          </div>

          <div className="text-center mt-4 hidden md:mt-0 md:block">
            <ul className="flex flex-col md:flex-row gap-3">
              <li>
                <Link
                  to="/products/Mens"
                  className="hover:border-b-2 hover:border-orange-400 hover:mb-4"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/products/women"
                  className="hover:border-b-2 hover:border-orange-400 hover:mb-4"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/products/shoes"
                  className="hover:border-b-2 hover:border-orange-400 hover:mb-4"
                >
                  Shoes
                </Link>
              </li>
              <li>
                <Link
                  to="/products/electronics"
                  className="hover:border-b-2 hover:border-orange-400 hover:mb-4"
                >
                  Electronics
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center w-auto gap-4">
            {/* Search Bar */}
            <div className="relative mx-auto xs:block hidden text-gray-600">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-2 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                value={searchQuery}
                placeholder="Search Products"
                onChange={handleSearch}
              />
            </div>

            {/* Login/Logout */}
            {!auth.user ? (
              <Link to="/Login">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1.5 px-4 border border-blue-500 hover:border-transparent rounded">
                  Login
                </button>
              </Link>
            ) : (
              <Link onClick={handleLogout} to="/Login">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1.5 px-4 border border-blue-500 hover:border-transparent rounded">
                  Logout
                </button>
              </Link>
            )}

            {/* Cart */}
            <div className="relative">
              <Link onClick={handler}>
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
              <p className="absolute bottom-4 left-3 text-white bg-red-600 rounded-full px-1 text-sm">
                {getTotalCartItems()}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className=" xs:hidden flex justify-center p-1  w-full text-gray-600">
            <input
              className="border-2  border-gray-300 w-full mx-4 bg-white h-10 px-2 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              value={searchQuery}
              placeholder="Search Products"
              onChange={handleSearch}
            />
          </div>
        </div>
        <hr></hr>
      </div>

      {open && (
        <div className="w-[600px] shadow-2xl right-1 bg-white fixed h-[100vh] z-50">
          {getTotalCartItems() ? <Cart /> : <Nocartitems />}
        </div>
      )}

      <div className="flex flex-col absolute mx-auto px-3 xs:left-[50%]">
        {filteredProducts?.map((product) => (
          <Link
            onClick={clearsearch}
            to={`/product/${product._id}`}
            key={product._id}
            className="border p-4  bg-[#fefefff0] hover:bg-[#dddcdc]"
          >
            <h3 className="text-lg font-poppins font-bold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
          </Link>
        ))}
      </div>
      <button
        onClick={() => setabt(!abt)}
        className="fixed px-3 sm:h-[60px] h-[54px]  flex items-center justify-center sm:mb-6 mb-4 sm:ml-6 ml-3 border-[#838383] border-[3px] bg-[#212121]   rounded-full z-50 bottom-0 "
      >
        <img src={logo} alt="" className="w-[36px] aspect-square" />
        <h3 className="abtus font-semibold text-[18px] font-poppins mx-1">
          {abt ? "Close" : "About us"}
        </h3>
      </button>
      {abt && <Aboutus />}
    </>
  );
};
