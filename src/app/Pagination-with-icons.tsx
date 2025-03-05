import { Product } from "./products";

const productsPerPage = 6

export default function Pagination({ products, currentPage }: { products: Product[], currentPage: number }) {
    const pages = Math.ceil(products.length / productsPerPage)
    const pageNumbers = Array.from(Array(pages).keys())
    return (
        <nav aria-label="Page navigation example" className="flex justify-center">
            <ul className="pad1 flex items-center -space-x-px h-10 text-base">
                {currentPage > 0 && <li>
                    <a href={`/?page=${currentPage - 1}`}
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Previous</span>
                        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M5 1 1 5l4 4" />
                        </svg>
                    </a>
                </li>}
                {pageNumbers.map((number) => (
                    <li>
                        <a href={`/?page=${number}`}
                            className={`${number == currentPage && "!bg-gray-400"} flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-white hover:bg-gray-100 hover:text-gray-700`}>
                            {number + 1}
                        </a>
                    </li>
                ))}
                {currentPage < (pages - 1) && <li>
                    <a href={`/?page=${currentPage + 1}`}
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Next</span>
                        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                    </a>
                </li>}
            </ul>
        </nav>
    );
}