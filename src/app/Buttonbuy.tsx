'use client'
import { useState } from "react";
import { CartItemProps } from "./cart/ClientStorageWrapper";
import QuantityButton from "./QuantatyButton";
import Sizebutton from "./Sizebutton";
import { Product } from "./products";


export default function Buttonbuy({ product }: { product: Product }) {
  const [itemCount, setItemCount] = useState(1);
  const [itemSize, setItemSize] = useState("M");

  function addToCart() {
    const item: CartItemProps = {
      productId: product.id,
      size: itemSize,
      quanitaty: itemCount
    }

    const storage = localStorage.getItem("addToCart")
    const itemsInCart: CartItemProps[] | null = storage && JSON.parse(storage)
    const newCartItems = itemsInCart ? itemsInCart.concat(item) : [item]

    localStorage.setItem("addToCart", JSON.stringify(newCartItems))
  }


  return (
    <>
      <div className="pb-5">
        <p className="pb-2">Size</p>
        <div className="flex flex-row flex-nowrap">
          {product.sizes.map((size) => {
            const isActive = itemSize == size
            return (
              <Sizebutton
                className={isActive ? "!bg-black text-white" : ""}
                size={size} key={size} onClick={() => setItemSize(size)} />
            )
          })}
        </div>
      </div>
      <div className="pb-5">
        <p className="pb-2">Quantity</p>
        <QuantityButton onChange={(newCount) => setItemCount(newCount)} />
      </div>
      <div>
        <button
          onClick={addToCart}
          type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          <h2 className="font-bold font-sans">
            Add to Cart
          </h2>
        </button>
      </div>
    </>
  );
}