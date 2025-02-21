import Carousel from "./_components/Carousel"
import Categories from "./Categories";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Pagination from "./Pagination-with-icons";

export default function Home() {
  return (
    <div className="">

      <Navbar />

      <div className="md:flex pad1">

        <div className="blocktext">
          <div>
            <div>
              <h2 className="text-s1 font-extrabold dark:text-white">Best for you</h2>
            </div>
            <div>
              <p className="text-s1 text-black dark:text-black">Find your style in our
                collections</p>
            </div>
          </div>

          <div><a href="shop.html"><button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span
              className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white C3 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Shop now
            </span>
          </button>
          </a></div>

        </div>

        <div className="gallery">
          <Carousel />
        </div>
      </div>
      <br />
      <Categories />
      
      <div className="pad1 grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <a href="produkt_1.html"><img className="h-auto max-w-full rounded-lg" src="foto.webp" alt="" /></a>
          <p>Long T-Shirts <br /> White <br /> $25</p>
        </div>
        <div>
          <a href="produkt_1.html"><img className="h-auto max-w-full rounded-lg" src="foto.webp" alt="" /></a>
          <p>Long T-Shirts <br /> White <br /> $25</p>
        </div>
        <div>
          <a href="produkt_1.html"><img className="h-auto max-w-full rounded-lg" src="foto.webp" alt="" /></a>
          <p>Long T-Shirts <br /> White <br /> $25</p>
        </div>
        <div>
          <a href="produkt_1.html"><img className="h-auto max-w-full rounded-lg" src="foto.webp" alt="" /></a>
          <p>Long T-Shirts <br /> White <br /> $25</p>
        </div>
      </div>
      <br />
      <Pagination />
      <br />
      <Footer />

    </div>



  );
}
