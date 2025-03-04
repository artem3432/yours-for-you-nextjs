'use client'

import { useEffect, useState } from "react"
import { products } from "../products"
import FavoritIcon from "../FavoritIcon"

export type FavItemProps = {
    productId: string
}

export default function ClientStorageFavorites() {
    const [items, setItems] = useState<FavItemProps[] | null>(null)

    useEffect(() => {
        const storage = localStorage.getItem("addToFav")
        const itemsInCart: FavItemProps[] | null = storage && JSON.parse(storage)
        setItems(itemsInCart)
    }, [])

    return (
        <>
            {items?.map(item => {
                const product = products.find(product => product.id === item.productId)
                if (!product) return null
                return (<FavoritIcon product={product} key={product.id} />)
            })}

        </>
    )
}