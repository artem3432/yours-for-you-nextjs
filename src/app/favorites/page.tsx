import ClientStorageFavorites from "./ClientStorageFavorites";

export default function Favorites() {

  return (
    <div className="text-black bg-white rounded-sm md:p-10 font-dangrek min-h-[88vh]">
      <div className="md:pl-4 pt-2 pl-6 text-[4vb]">
        <h1>Favorites</h1>
      </div>
 

      <div className="md:flex flex-row p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        <ClientStorageFavorites />


      </div>
    </div>
  )
}
