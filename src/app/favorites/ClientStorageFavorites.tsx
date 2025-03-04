'use client'

import { useEffect, useState } from "react"
import CartItem from "../Cart-item"
import { products } from "../products"

export type FavItemProps = {
    productId: string
}

export default function ClientStorageFavorites() {
    const [items, setItems] = useState<FavItemProps[] | null>(null)

    useEffect(() => {
        const storage = localStorage.getItem("addToCart")
        const itemsInCart: FavItemProps[] | null = storage && JSON.parse(storage)
        setItems(itemsInCart)
    }, [])

    return (
        <div>
            {items?.map(item => {
                const product = products.find(product => product.id === item.productId)
                if (!product) return null
                return (<CartItem onChange={setItems} product={product} quantity={1} key={product.id} />)
            })}

        </div>
    )
}