export default function Home() {

    return (
        <div className="font-dangrek md:flex flex-row-reverse justify-center bg-blue-50 ">
            <div className="p-10 w-full">
                <div className="bg-gray-200 m-4 p-4 shadow-sm rounded-lg inline-block">
                    <div>
                        <h2 className="text-3xl">Order Summary</h2>
                    </div>
                    <div className="flex flex-row">
                        <div>
                            <p className="pr-5 text-xl">
                                Total
                            </p>
                        </div>
                        <div>
                            <p className="text-xl"> $66</p>
                        </div>
                    </div>
                </div>
            </div>
            <form className="p-10 bg-white w-full flex justify-end">
                <div className="p-4 pt-10 h-[90vh] ">
                    <div>
                        <div>
                            <h2 className="text-2xl">Contrackt Info</h2>
                        </div>
                        <div className="flex-col pb-8">
                            <div className="pb-2">
                                <label htmlFor="email" className="text-xl block mb-2 font-medium text-gray-900">Email address</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="your-email@gmail.com" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="text-xl block mb-2 font-medium text-gray-900">Phone number</label>
                                <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                            </div>
                        </div>

                    </div><hr />
                    <div className="pt-4">
                        <div>
                            <h2 className="text-2xl">Shipping Address</h2>
                        </div>
                        <div>
                            <div className="flex flex-col">
                                <div className="flex flex-row">
                                    <div className="pr-2">
                                        <label htmlFor="first_name" className="block mb-2 text-xl font-medium text-gray-900">First name</label>
                                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                                    </div>
                                    <div>
                                        <label htmlFor="last_name" className="block mb-2 text-xl font-medium text-gray-900">Last name</label>
                                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                                    </div> <br />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block mb-2 text-xl font-medium text-gray-900">Address line</label>
                                    <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <div className="pr-2">
                                    <label htmlFor="website" className="block mb-2 text-xl font-medium text-gray-900">Country</label>
                                    <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                                </div>
                                <div>
                                    <label htmlFor="website" className="block mb-2 text-xl font-medium text-gray-900">Postal Code</label>
                                    <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                                </div>
                            </div>
                            <div className="flex flex-row pb-8">
                                <div className="pr-2">
                                    <label htmlFor="website" className="block mb-2 text-xl font-medium text-gray-900">City</label>
                                    <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                                </div>
                                <div className="pr-2">
                                    <label htmlFor="website" className="block mb-2 text-xl font-medium text-gray-900">Region</label>
                                    <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                                </div>
                            </div>
                        </div>
                    </div>{/* grid */} <hr />
                    <div className="pt-4">
                       <div className="pb-4">
                        <div>
                            <h2 className="text-2xl">Shipping Method</h2>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="">
                                <p className="text-xl">International</p>
                            </div>
                            <div>
                                <p className="text-xl">$5</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>.</label>
                        </div>
                        <div>
                           <button type="submit" className="text-2xl focus:outline-none bg-blue-400 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2">Continue to Payment</button> 
                        </div>
                    </div> 
                    </div>
                </div>
            </form>
        </div>
    );
}