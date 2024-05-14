import { useEffect, useState } from "react";
import { LuLoader } from "react-icons/lu";
import Item from "./Items";
import axios from "axios";
import { useParams } from "react-router-dom";
import Noprod from "./Noprod";

const Catpage = () => {
  const { cat } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [Prod, setProd] = useState([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const handleFilterChange = (filterKey) => {
  //   setFilter(filterKey);

  //   setIsOpen(false); // Close the dropdown after selecting a filter
  // };

  // console.log(Filter);

  const [data_product, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://ecommerce-server-1-2twm.onrender.com/api/v1/prod/get"
        );

        setProducts(response.data);
        setProd(response.data.filter((item) => item.category == cat));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [cat]);

  const CatProd = data_product.filter((item) => item.category == cat);
  let sortedProducts = [];
  function handleFilterChange(filterType) {
    sortedProducts = [...CatProd]; // Assuming products is your array of products

    switch (filterType) {
      case "price_high_low":
        sortedProducts.sort((a, b) => b.price - a.price); // Sort by price high to low
        break;
      case "price_low_high":
        sortedProducts.sort((a, b) => a.price - b.price); // Sort by price low to high
        break;
      case "latest":
        sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date latest
        break;
      case "oldest":
        sortedProducts.sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date oldest
        break;
      default:
        // Do nothing if the filterType is invalid
        break;
    }
    setIsOpen(false);
    setProd(sortedProducts);
  }

  // console.log(data_product);

  // setProd(CatProd)
  console.log(Prod);
  return (
    <div className=" font-poppins">
      {Prod.length ? (
        <div className="my-16 mx-16">
          <div className="flex font-bold sm:flex-row flex-col justify-between gap-4">
            <p className="capitalize">
              Showing {Prod.length} products. from {cat} category
            </p>

            <div className="relative inline-block text-left">
              <div>
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  Filter by
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 5.414 6.707 8.707a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <button
                      onClick={() => handleFilterChange("price_high_low")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Price: High to Low
                    </button>
                    <button
                      onClick={() => handleFilterChange("price_low_high")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Price: Low to High
                    </button>
                    <button
                      onClick={() => handleFilterChange("latest")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Latest
                    </button>
                    <button
                      onClick={() => handleFilterChange("oldest")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Oldest
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap w-full  justify-around sm:gap-10 gap-2 mt-12">
            {!isLoading ? (
              Prod.map((item, i) => (
                <Item
                  key={i}
                  id={item.id}
                  image={item.images}
                  name={item.name}
                  new_price={item.price}
                  old_price={item.price}
                  rating={item.rating}
                />
              ))
            ) : (
              <div className="w-full flex justify-center h-[100vh] items-center">
                <LuLoader className="animate-spin ease-in text-[30px]" />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Noprod />
      )}
    </div>
  );
};

export default Catpage;
