import Addbutton from "../Addbutton";
import { products } from "../products";

const product = products[0]
export default function Home() {

  return (
    <div className="md:flex-col text-black bg-white rounded-sm md:p-10 md:ml-auto md:mr-auto md:max-w-9/10 font-dangrek">
      <div className="md:pl-4 pt-2 pl-6 text-[4vb]">
        <h1>Cart</h1>
      </div>


      <div className="md:grid grid-flow-col grid-rows-3 gap-4">
        <div className="col-span-2 row-span-3">
          <div className="flex-row pad1 md:grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <img src={product.photos?.[0].src} alt={product.photos?.[0].alt} className="md:h-96 rounded-lg" />
            </div>
            <div>
              <p>{product.title}</p>
              <p>Size: {product.sizes?.[0]}</p>
              <p>Color: {product.color}</p>
            </div>
            <div>
              <p>${product.price}</p>
            </div>
          </div>
          <div className="flex-row pad1 md:grid grid-cols-2">
            <div>
              <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
            </div>
            <div className="flex flex-row">
              <div className="pr-4">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
              </div>
              <div>
                <Addbutton />
              </div>
            </div>
          </div>
        </div>

        <div className="block max-w-sm p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-lg hover:bg-gray-100 ">
          <div className="pad1 md:flex flex-row text-[2vb]">
            <div className="pr-10">
              <p>Estimated Total</p>
            </div>
            <div>
              <p>${product.price}</p>
            </div>
          </div>
          <div className="pad1">
          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Checkout</button>
          </div>
        </div>


      </div>
    </div>
  )
}
