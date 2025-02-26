'use client'
import { useState } from "react";

export default function Navbar() {
    const [itemCount, setItemCount] = useState(1);

    function addoneitem() {
        if (itemCount < 99) {
            setItemCount(itemCount + 1)
        }
    }

    function removeoneitem() {
        if (itemCount > 1) {
            setItemCount(itemCount - 1)
        }
    }

    return (
        <div className="inline-flex rounded-md shadow-xs" role="group">
            <button onClick={removeoneitem}
                type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
                -
            </button>
            <input
                type="number"
                min={1}
                max={99}
                onChange={
                    function addtextitem(event) {
                        const newValue = Number(event.target.value)
                        setItemCount(newValue)
                    }
                }
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white" value={itemCount} />
            <button onClick={addoneitem}
                type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
                +
            </button>
        </div>
    )
}