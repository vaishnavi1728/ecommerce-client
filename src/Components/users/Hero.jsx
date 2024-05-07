import cart from "../../assets/add-to-cart-3046.png";
import img from "../../assets/heroimg1.png";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-slate-200 to-stone-200 grid grid-cols-1 md:grid-cols-2 pb-14">
      <div className="ml-6 md:ml-16 mt-20 md:mt-40">
        <h1 className="uppercase text-xl sm:text-2xl">
          Don&apos;t have time to go shopping?
        </h1>
        <h1 className="text-4xl sm:text-6xl font-bold my-3">New</h1>
        <h1 className="text-4xl sm:text-6xl font-bold my-3">Collections</h1>
        <h1 className="text-4xl sm:text-6xl font-bold flex items-center gap-4 my-3">
          Everyday{" "}
          <img src={cart} alt="" className="h-12 md:h-16 w-12 md:w-16 mt-2" />
        </h1>
        <button className="bg-blue-600 px-8 md:px-10 py-3 rounded-lg text-lg md:text-xl hover:translate-x-2 transition duration-700 hover:text-white">
          Shop Now
        </button>
      </div>

      <div className="flex items-center justify-center md:mr-10">
        <img src={img} alt="" className="border rounded-lg" />
      </div>
    </div>
  );
};

export default Hero;
