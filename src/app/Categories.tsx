import Link from "next/link";
import { products } from "./products";


export default function Categories({ category }: { category: string }) {
    const categories = products.flatMap(product => product.categories)
    const uniqueCategories = [...new Set(categories)]

    return (
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            <Link
                href="/"
                className={`${category == "" && "!bg-gray-400"} text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800`}>
                All
                categories
            </Link>
            {uniqueCategories.map((uniqueCategory) => (
                <Link
                    key={uniqueCategory}
                    href={`/?category=${uniqueCategory}`}
                    className={`${category == uniqueCategory && "!bg-gray-400"} text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800`}>
                    {uniqueCategory}
                </Link>
            ))}
        </div>
    );
}