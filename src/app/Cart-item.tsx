'use client'
import { useEffect, useState } from "react";
import { Product } from "./products";
import QuantityButton from "./QuantatyButton";
import { CartItemProps } from "./cart/ClientStorageWrapper";

function updateProductCount(productId: string, quanitaty: number) {
    const storage = localStorage.getItem("addToCart")
    const itemsInCart: CartItemProps[] | null = storage && JSON.parse(storage)
    const newCartItems = itemsInCart?.map((itemInCart) => {
        if (itemInCart.productId === productId) {
            itemInCart.quanitaty = quanitaty
            return itemInCart
        } else {
            return itemInCart
        }
    })

    localStorage.setItem("addToCart", JSON.stringify(newCartItems))
}



export default function CartItem({ product, quantity, onChange }: { product: Product, quantity: number, onChange?: (a: CartItemProps[]) => void }) {
    const [itemCount, setItemCount] = useState(quantity);

    function removeProduct(productId: string) {
        const storage = localStorage.getItem("addToCart")
        const itemsInCart: CartItemProps[] | null = storage && JSON.parse(storage)
        const newCartItems = itemsInCart?.filter((itemInCart) => itemInCart.productId !== productId)

        localStorage.setItem("addToCart", JSON.stringify(newCartItems))
        onChange?.(newCartItems || [])
    }

    useEffect(() => {
        updateProductCount(product.id, itemCount)
    }, [itemCount])

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
                    <button
                        onClick={() => removeProduct(product.id)}
                        type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        Remove
                    </button>
                </div>
                <div>
                    <QuantityButton defaultValue={quantity} onChange={(newValue) => setItemCount(newValue)} />
                </div>
            </div>
        </div>
    );
}