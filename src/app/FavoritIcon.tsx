'use client'
import { Product } from "./products";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect, useState } from "react";
import { FavItemProps } from "./favorites/ClientStorageFavorites";

export default function FavoritIcon({ product }: { product: Product }) {
    const [isFavorit, setIsFavorit] = useState(false)


    useEffect(() => {
        const storage = localStorage.getItem("addToFav")
        const itemsInCart: FavItemProps[] | null = storage && JSON.parse(storage)
        const isFav = itemsInCart?.find((p) => p.productId === product.id)
        if (isFav) setIsFavorit(true)

    }, [])

    function handleFavClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.stopPropagation()
        if (isFavorit === true) {
            setIsFavorit(false)
            removeFromFav()
        }
        else {
            setIsFavorit(true)
            addToFav()
        }
    }
    function addToFav() {
        const item: FavItemProps = {
            productId: product.id
        }
        const storage = localStorage.getItem("addToFav")
        const itemsInCart: FavItemProps[] | null = storage && JSON.parse(storage)
        const newCartItems = itemsInCart ? itemsInCart.concat(item) : [item]

        localStorage.setItem("addToFav", JSON.stringify(newCartItems))
    }

    function removeFromFav() {
        const item: FavItemProps = {
            productId: product.id
        }
        const storage = localStorage.getItem("removeToFav")
        const itemsInCart: FavItemProps[] | null = storage && JSON.parse(storage)
        const newCartItems = itemsInCart ? itemsInCart.concat(item) : [item]

        localStorage.setItem("removeToFav", JSON.stringify(newCartItems))

    }

    return (
        <div key={product.id} className="relative">
            <button
                className="absolute top-4 left-4" onClick={handleFavClick}>
                {isFavorit ? <FavoriteIcon className="!fill-slate-600" /> : <FavoriteBorderIcon />}
            </button>
            <a href={`/produkt/${product.id}`} >
                <img src={product.photos?.[0].src} alt={product.photos?.[0].alt} className="md:h-96 rounded-lg" />
            </a>
            <p className="text-white">{product.title} <br />{product.color} <br />{product.price} $</p>
        </div>

    )
}