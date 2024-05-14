import { Link } from "react-router-dom";
import pay from "../../assets/payment.png";

const Footer = () => {
  return (
    <footer className="footer bg-[#212121]">
      <hr />
      <div className="container mx-auto px-4 py-6 lg:px-8">
        <div className="flex flex-col items-center justify-center lg:justify-between">
          <ul className="flex flex-wrap justify-center gap-6 text-[#b5b5b5] lg:justify-start">
            <li>
              <Link
                to="/mens"
                className="hover:border-b-2 hover:border-orange-400 hover:mb-4"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                className="hover:border-b-2 hover:border-orange-400 hover:mb-4"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/shoes"
                className="hover:border-b-2 hover:border-orange-400 hover:mb-4"
              >
                Shoes
              </Link>
            </li>
            <li>
              <Link
                to="/electronics"
                className="hover:border-b-2 hover:border-orange-400 hover:mb-4"
              >
                Electronics
              </Link>
            </li>
            
          </ul>
          <div className="flex items-center justify-center flex-col gap-4 mt-6 lg:mt-0">
            <img className="w-80 md:mt-6 mt-1" src={pay} alt="payment" />
            <h4 className="text-[#6c6c6c] font-poppins text-md lg:text-lg font-semibold text-center">
              Copyright © Hama Store All Rights Reserved.
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
