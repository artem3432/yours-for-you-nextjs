import Carousel from "./_components/Carousel"
import Buttonshop from "./Buttonshop";
import Categories from "./Categories";
import Pagination from "./Pagination-with-icons";

export default function Home() {
  return (
    <div>

      <div className="md:flex pad1">

        <div className="blocktext">
          <div>
            <div>
              <h2 className="text-s1 font-extrabold dark:text-white">Best for you</h2>
            </div>
            <div>
              <p className="text-s1 text-gray-400">Find your style in our
                collections</p>
            </div>
          </div>

          <Buttonshop />

        </div>

        <div className="gallery">
          <Carousel />
        </div>
      </div>
      <br />
      <Categories />

      <div className="pad1 grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <a href="/produkt"><img className="h-auto max-w-full rounded-lg" src="foto.webp" alt="" /></a>
          <p className="text-white">Long T-Shirts <br /> White <br /> $25</p>
        </div>
        <div>
          <a href="/produkt"><img className="h-auto max-w-full rounded-lg" src="foto.webp" alt="" /></a>
          <p className="text-white">Long T-Shirts <br /> White <br /> $25</p>
        </div>
        <div>
          <a href="/produkt"><img className="h-auto max-w-full rounded-lg" src="foto.webp" alt="" /></a>
          <p className="text-white">Long T-Shirts <br /> White <br /> $25</p>
        </div>
        <div>
          <a href="/produkt"><img className="h-auto max-w-full rounded-lg" src="foto.webp" alt="" /></a>
          <p className="text-white">Long T-Shirts <br /> White <br /> $25</p>
        </div>
      </div>
      <br />
      <Pagination />
      <br />
    </div>
  )
}
