'use client'
import { Product } from "./products";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect, useState } from "react";
import { FavItemProps } from "./favorites/ClientStorageFavorites";

export default function FavoritIcon({ product }: { product: Product }) {
    const [isFavorit, setIsFavorit] = useState(false);

    useEffect(() => {
        const storage = localStorage.getItem("addToFav");
        const itemsInCart: FavItemProps[] = storage ? JSON.parse(storage) : [];
        const isFav = itemsInCart.some((p) => p.productId === product.id);
        setIsFavorit(isFav);
    }, []);

    function handleFavClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.stopPropagation();
        if (isFavorit) {
            removeFromFav();
        } else {
            addToFav();
        }
        setIsFavorit(!isFavorit);
    }

    function addToFav() {
        const item: FavItemProps = { productId: product.id };
        const storage = localStorage.getItem("addToFav");
        const itemsInCart: FavItemProps[] = storage ? JSON.parse(storage) : [];

        // Avoid duplicate entries
        if (!itemsInCart.some(p => p.productId === product.id)) {
            const newCartItems = [...itemsInCart, item];
            localStorage.setItem("addToFav", JSON.stringify(newCartItems));
        }
    }

    function removeFromFav() {
        const storage = localStorage.getItem("addToFav");
        const itemsInCart: FavItemProps[] = storage ? JSON.parse(storage) : [];

        const newCartItems = itemsInCart.filter(p => p.productId !== product.id);
        localStorage.setItem("addToFav", JSON.stringify(newCartItems));
    }

    return (
        <div key={product.id} className="relative">
            <button
                className="absolute top-4 left-4"
                onClick={handleFavClick}>
                {isFavorit ? <FavoriteIcon className="!fill-slate-600" /> : <FavoriteBorderIcon className="!fill-slate-600" />}
                </button>
            <a href={`/produkt/${product.id}`} >
                <img src={product.photos?.[0].src} alt={product.photos?.[0].alt} className="md:h-96 rounded-lg" />
            </a>
            <p>
                {product.title} <br />
                {product.color} <br />
                {product.price} $
            </p>
        </div>
    );
}
