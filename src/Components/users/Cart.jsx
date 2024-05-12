
import { useContext, useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../Context/ShopContext";
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Auth";

const Cart = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const { getTotalCartAmount, cartItems, removeFromCart } =
    useContext(ShopContext);
  const [All_Product, setProducts] = useState([]);
  const handlePayment = async () => {
    if (auth) {
      const stripePromise = await loadStripe(
        "pk_test_51P8fRZSBZcJvq0CZzAKx9gpheGAATvOCMOCaXxOp3s1flZl6l2GljzAdqkI8nsv9k78f4FmeyTl0Qmx16OvJWqBP00Ch77Z7Mz"
      );
      const res = await fetch(`https://ecommerce-server-1-2twm.onrender.com/api/v1/order/payment`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cart),
      });
      if (res.statusCode === 500) return;
      console.log(res)
      const data = await res.json();
      //console.log(data)
      toast("Redirect to payment Gateway...!");
      console.log(data)
      stripePromise.redirectToCheckout({ sessionId: data });
    } else {
      toast("You have not Login!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };
  const result = Object.fromEntries(
    Object.entries(cartItems).filter(([key, value]) => value !== 0)
  );

  const cart = Object.entries(result).map(([productId, quantity]) => {
    const product = All_Product.find((p) => p._id === productId);
    return { ...product, quantity };
  });

  console.log(cart);


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
  return (
    <div className="mx-16 my-12 font-poppins">
      <hr />

      {All_Product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="flex items-center py-2">
                <img src={e.images} alt="" className="h-24 w-24 object-cover" />
                <div className="flex w-full justify-center items-center flex-col">
                  <p>{e.name}</p>
                  <div className="flex gap-4">
                    <p>Rs. {e.price}</p>
                    <p className="text-left " id="quantity">
                      Quantity: {cartItems[e.id]}
                    </p>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  className="hover:cursor-pointer bg-[#818082] rounded-[4px] p-2 text-[#bbbaba] hover:text-white"
                />
              </div>

              <hr />
            </div>
          );
        }
        return null;
      })}
      <div>
        <div className="flex justify-around p-2 w-full">
          <div className="flex-col flex">
            <p>Sub-total</p>
            <p>Rs.{getTotalCartAmount()}</p>
          </div>
          <div className="flex-col flex">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <div className="flex-col flex">
            <h1>Total</h1>
            <h1>Rs.{getTotalCartAmount()}</h1>
          </div>
         
        </div>
        <button
          onClick={handlePayment}
          className="mt-6  px-8 py-2 bg-red-600 text-white hover:scale-105 duration-300"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
