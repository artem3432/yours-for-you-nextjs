'use client'

import CartItem from "../Cart-item"
import { products } from "../products"

export type CartItemProps = {
    productId: string
    size: string
    quanitaty: number
}

export default function ClientStorageWrapper() {
    const storage = localStorage.getItem("addToCart")
    const itemsInCart: CartItemProps[] | null = storage && JSON.parse(storage)

    return (
        <div>
            {itemsInCart?.map(item => {
                const product = products.find(product => product.id === item.productId)
                if(!product) return null
                return (<CartItem product={product} quantity={item.quanitaty} key={product.id}/>)
            })}

        </div>
    )
}