import Fuse from "fuse.js";
import Carousel from "./_components/Carousel"
import Categories from "./Categories";
import FavoritIcon from "./FavoritIcon";
import Pagination from "./Pagination-with-icons";
import { Product, products } from "./products";

const productsPerPage = 6 
export default async function Home({searchParams}: {searchParams: Promise<{search?: string, page?: number, category?: string}>}) {

  const searchQuery =  (await searchParams).search || ""
  const page = (await searchParams).page || 0
  const category = (await searchParams).category || ""
  const options = {
    includeScore: true,
    keys: ['title', 'color'],
    threshold: 0.3
  }
  
  const fuse = new Fuse(products, options)
  
  const result = fuse.search(searchQuery )
  const productList = searchQuery ? result.map(({item}) => item) : products
  const filteredList = category ? productList.filter(product => product.categories.includes(category)) : productList

  const startItem = page * productsPerPage
  const productsOnPage= filteredList.slice(startItem, startItem + productsPerPage)



  return (
    <div>

      <div className="md:flex pad1">

        <div className="blocktext">
          <div>
            <div>
              <h2 className="text-s1 font-extrabold text-white">Best for you</h2>
            </div>
            <div>
              <p className="text-s1 text-gray-400">Find your style in our
                collections</p>
            </div>
          </div>
        </div>

        <div className="gallery">
          <Carousel />
        </div>
      </div>
      <br />
      <Categories category={category} />

      <div id="products" className="pad1 grid grid-cols-2 md:grid-cols-3 gap-4 text-white">


        {productsOnPage.map((product: Product) => {
          return <FavoritIcon product={product}key={product.id} />
        })}


      </div>
      <br />
      <Pagination products={filteredList} currentPage={page} />
      <br />
    </div>
  )
}
