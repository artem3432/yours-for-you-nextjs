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


    return (
        <div>
            {items?.map(item => {
                const product = products.find(product => product.id === item.productId)
                if (!product) return null
                return (<CartItem product={product} quantity={item.quanitaty} key={product.id} />)
            })}

        </div>
    )
}