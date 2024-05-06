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
  const handler = () => {
    setopen(!open);
  };

  const [data_product, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/prod/get"
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
      <div className="z-50">
        <div className="flex justify-between items-center mx-20 my-6 font-poppins ">
          <div className="flex gap-3">
            <img src={logo} alt="" className="h-[35px]" />
            <Link to="/" className="text-2xl flex items-end">
              HamaStore
            </Link>
          </div>

          <div className="text-center">
            <ul className="flex gap-3">
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

          <div className="flex items-center gap-4">
            {/* Search Baarrr */}
            <div className="pt-2  relative mx-auto text-gray-600">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-2 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                value={searchQuery}
                placeholder="Search Products"
                onChange={handleSearch}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-4"
              >
                <svg
                  className="text-gray-600 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: "new 0 0 56.966 56.966" }}
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>

            {/* Login */}
            {!auth.user ? (
              <Link to="/Login">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1.5 mx-3 px-4 border border-blue-500 hover:border-transparent rounded">
                  Login
                </button>
              </Link>
            ) : (
              <Link onClick={handleLogout} to="/Login">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1.5 mx-3 px-4 border border-blue-500 hover:border-transparent rounded">
                  Logout
                </button>
              </Link>
            )}

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
        <hr></hr>
      </div>

      {open && (
        <div className="w-[600px] shadow-2xl right-1 bg-white fixed h-[100vh] z-50">
          <Cart />
        </div>
      )}

      <div className="flex flex-col absolute mx-auto left-[50%]">
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
    </>
  );
};
