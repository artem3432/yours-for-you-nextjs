import Sizebutton from "@/Sizebutton";
import Buttonbuy from "../../Buttonbuy";
import { products } from "../../products";


export default async function Home({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    const product = products.find((product) => product.id === id)

    if (!product) {
        return <div className="C1">Product not found</div>
    }

    return (
        <div className="md:flex flex-row pad1 bg-white rounded-sm">
            <div className="basis-1/3">
                <div className="p-3">
                    <img src={product.photos?.[0].src} alt={product.photos?.[0].alt} className="h-96 rounded-lg" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <img className="rounded-lg" src={product.photos?.[1].src} alt={product.photos?.[1].alt} />
                    </div>
                    <div>
                        <img className="rounded-lg" src={product.photos?.[2].src} alt={product.photos?.[2].alt} />
                    </div>
                    <div>
                        <img className="rounded-lg" src={product.photos?.[3].src} alt={product.photos?.[3].alt} />
                    </div>
                </div>
            </div>
            <div className="basis-2/3 pad1">
                <div className="pb-10">
                    <h2 className="pb-4 mb-3 text-s4">{product.title}</h2>
                    <p>Color: {product.color?.[0]}</p>
                    <span className="text-lg font-medium">${product.price}</span>
                    {product.oldprice && <span className="p-3 text-lg font-medium line-through">${product.oldprice}</span>}
                </div>
                <div>
                    <div className="pb-5">
                        <p className="pb-2">Size</p>
                        <div className="flex flex-row flex-nowrap">
                            {product.sizes.map((size) => (
                                <Sizebutton size={size} key={size} />
                            ))}
                        </div>
                    </div>
                    <div className="pb-5">
                        <p className="pb-2">Quantity</p>


                        <div className="inline-flex rounded-md shadow-xs" role="group">
                            <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
                                -
                            </button>
                            <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
                                1
                            </button>
                            <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
                                +
                            </button>
                        </div>

                    </div>
                </div>
                <div className="pb-20">
                    <Buttonbuy />
                </div>
            </div>
        </div>

    );
}
