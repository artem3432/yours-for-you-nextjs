import Carousel from "./_components/Carousel"
import Buttonshop from "./Buttonshop";
import Categories from "./Categories";
import Pagination from "./Pagination-with-icons";
import { products } from "./products";


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
        {products.map((product) => (
          <div>
            <a href={`/produkt/${product.id}`}>
            <img src={product.photos?.[0].src} alt={product.photos?.[0].alt} className="h-96 rounded-lg" />
            </a>
            <p className="text-white">{product.title} <br />{product.color} <br />{ product.price} $</p>
          </div>
        ))}

      </div>
      <br />
      <Pagination />
      <br />
    </div>
  )
}
