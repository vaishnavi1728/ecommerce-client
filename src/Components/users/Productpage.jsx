import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import Recommendation from "./Recommendation";

function StarRating({ rating }) {
  return (
    <div className="flex justify-center sm:justify-start py-2">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`h-5 w-5 fill-current ${
            index < rating ? "text-yellow-500" : "text-gray-400"
          }`}
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.203L9.448 8.537H2.732l6.032 4.92L6.979 17.8l5.021-3.842 5.021 3.842-1.786-4.342 6.032-4.92h-6.716L12 2.203zm-2.023 12.48l-3.026 2.312 1.152-3.36-3.024-2.466h3.738l1.16-3.36 1.16 3.36h3.738l-3.026 2.466 1.152 3.36-3.026-2.312z"
          />
        </svg>
      ))}
    </div>
  );
}

const Productpage = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const { addToCart } = useContext(ShopContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/prod/" + id
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="overflow-hidden mx-4 md:mx-16 pt-10 font-poppins flex flex-col sm:flex-row items-center justify-center md:justify-around">
  <div className="flex justify-center md:justify-start" id="left">
    <div className="pl-2">
      <img src={product.images} alt="" className="h-96" />
    </div>
  </div>

  <div className="mx-4 mt-6 md:mt-0 text-center md:text-left" id="right">
    <h1 className="text-3xl">{product.name}</h1>
    <div className="w-fullflex justify-between">
      <StarRating rating={product.rating} />
    </div>

    <div className="flex justify-center md:justify-start">
      <div className="pr-2 line-through text-gray-500">
        Rs. {product.price}
      </div>
      <div className="text-red-700">Rs. {product.price}</div>
    </div>

    <div className="text-[20px] font-normal my-2">
      <p>{product.description}</p>
    </div>

    <div className="text-sm my-2 max-w-[500px]">
      <p>{product.richDescription}</p>
    </div>

    <button
      onClick={() => {
        addToCart(product.id);
      }}
      className="my-2 bg-red-500 px-6 py-2 my-4 uppercase text-white duration-300 hover:scale-105 "
    >
      Add to cart
    </button>
  </div>
</div>
<Recommendation />
</>
  );
};

export default Productpage;
