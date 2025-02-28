'use client'
import { useState } from "react";
import { Product } from "./products";
import QuantityButton from "./QuantatyButton";


export default function CartItem({ product, quantity }: { product: Product, quantity: number }) {
      const [itemCount, setItemCount] = useState(quantity);
      // TODO: remove console.log
      console.log(itemCount)
      
    return (
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
                        <QuantityButton defaultValue={quantity} onChange={(newValue) => setItemCount(newValue)} />
                    </div>
                </div>
            </div>
        </div>
    );
}