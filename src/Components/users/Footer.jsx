import { Link } from "react-router-dom";
import pay from "../../assets/payment.png";
const Footer = () => {
  return (
    <footer className="footer bg-[#212121]">
      <hr />
      <div className="flex justify-center py-6">
        <ul className="flex gap-6 text-[#b5b5b5]">
          <li>
            <Link
              to="/"
              className="hover:border-b-2 hover:border-orange-400 hover:mb-4"
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              to="/Mens"
              className="hover:border-b-2 hover:border-orange-400 hover:mb-4"
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              to="/Womens"
              className="hover:border-b-2 hover:border-orange-400 hover:mb-4"
            >
              Shoes
            </Link>
          </li>
          <li>
            <Link
              to="/Kids"
              className="hover:border-b-2 hover:border-orange-400 hover:mb-4"
            >
              Electronics
            </Link>
          </li>
          <li>
            <Link
              to="/Kids"
              className="hover:border-b-2 hover:border-orange-400 hover:mb-4"
            >
              About us
            </Link>
          </li>
        </ul>
      </div>
<hr className="text-[#000]"/>
      <div className="mx-auto flex items-center justify-center flex-col gap-4 py-10 pb-20 lg:pb-10">
        <img className="w-80" src={pay} alt="payment" />
        <h4 className="text-[#6c6c6c] font-poppins text-md lg:text-lg font-semibold">
          Copyright © Hama Store All Rights Reserved.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
