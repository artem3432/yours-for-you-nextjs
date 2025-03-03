'use client'

import { useEffect, useState } from "react"
import CartItem from "../Cart-item"
import { products } from "../products"

export type CartItemProps = {
    productId: string
    size: string
    quanitaty: number
}

export default function ClientStorageWrapper() {
    const [items, setItems] = useState<CartItemProps[] | null>(null)

    useEffect(() => {
        const storage = localStorage.getItem("addToCart")
        const itemsInCart: CartItemProps[] | null = storage && JSON.parse(storage)
        setItems(itemsInCart)
    }, [])

    const total = items?.reduce((sum, item) =>{
        const product = products.find(product => product.id === item.productId)
        const thisSum =  item.quanitaty * (product?.price || 0)
        return sum + thisSum
    },0 ).toFixed(2)

    return (
        <>
        <div>
            {items?.map(item => {
                const product = products.find(product => product.id === item.productId)
                if (!product) return null
                return (<CartItem onChange={setItems} product={product} quantity={item.quanitaty} key={product.id} />)
            })}
        </div>
         <div className="block max-w-sm p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-lg hover:bg-gray-100 h-min">
         <div className="pad1 md:flex flex-row text-[2vb]">
           <div className="pr-10">
             <p>Estimated Total</p>
           </div>
           <div>
             <p>$ {total}</p>
           </div>
         </div>
         <div className="pad1">
         <a href={`/checkout`}><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Checkout</button></a>
         </div>
       </div>
       </>
    )
}