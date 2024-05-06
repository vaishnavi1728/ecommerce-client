import { useState } from "react";
import { Link } from "react-router-dom";

function sliceString(str) {
  if (str.length <= 20) {
    return str;
  } else {
    return str.slice(0, 25) + "..";
  }
}

function StarRating({ rating }) {
  return (
    <div className="flex py-2">
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

const Item = (props) => {
  return (
    <div className="shadow-2xl my-4   ">
      <div>
        <Link to={`/product/${props.id}`}>
          <div className="h-64 w-64 rounded-md object-cover overflow-hidden">
            <img
              src={props.image}
              alt=""
              className="h-64 w-64 object-cover hover:scale-110 duration-300"
            />
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center py-3">
        <p>{sliceString(props.name)}</p>
        <div className="flex justify-center gap-2">
          <div className="line-through text-gray-500">
            {" "}
            Rs. {props.old_price}
          </div>
          <div> Rs. {props.new_price}</div>
        </div>
        <StarRating rating={props.rating} />
      </div>
    </div>
  );
};

export default Item;
