import men from "../../assets/mens.webp";
import women from "../../assets/women.jpeg";
import watch from "../../assets/elec.jpeg";
import shoes from "../../assets/shoes.jpeg";

const categories = [
  {
    name: "Men",
    href: "#",
    imageSrc: men,
  },
  {
    name: "Women",
    href: "#",
    imageSrc: women,
  },
  {
    name: "Electronics",
    href: "#",
    imageSrc: watch,
  },
  {
    name: "Shoes",
    href: "#",
    imageSrc: shoes,
  },
];

const Homecat = () => {
  return (
    <div className="flex justify-center">
      <section
        aria-labelledby="category-heading"
        className="pt-12 sm:pt-24 w-full md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[60%] xl:mx-auto xl:max-w-7xl xl:px-8"
      >
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2
            id="category-heading"
            className="text-[24px] sm:text-[30px] font-bold font-poppins tracking-tight text-gray-900"
          >
            Shop by Category
          </h2>
          <a
            href="#"
            className="hidden text-[16px] sm:text-[20px] font-semibold text-[#2563eb] hover:text-indigo-500 sm:block"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="relative flex flex-wrap justify-center gap-4 sm:gap-8">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="relative flex h-60 sm:h-80 w-48 sm:w-56 flex-col overflow-hidden rounded-lg p-4 sm:p-6 hover:opacity-75 xl:w-auto"
                >
                  <span aria-hidden="true" className="absolute inset-0">
                    <img
                      src={category.imageSrc}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                  />
                  <span className="relative mt-auto text-center text-lg sm:text-xl font-bold text-white">
                    {category.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Homecat;
