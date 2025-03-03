import ClientStorageWrapper from "./ClientStorageWrapper";

export default function Cart() {

  return (
    <div className="text-black bg-white rounded-sm md:p-10 font-dangrek min-h-[88vh]">
      <div className="md:pl-4 pt-2 pl-6 text-[4vb]">
        <h1>Cart</h1>
      </div>
 

      <div className="md:flex flex-row p-6">
        <ClientStorageWrapper />
   



      </div>
    </div>
  )
}
