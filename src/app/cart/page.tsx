export default function Home() {
  return (
    <div className="text-white md:flex-col pad1">
      <div className="pad1">
        <h1 className="text-white">Cart</h1>
      </div>


      <div className="grid grid-flow-col grid-rows-3 gap-4">
        <div className="col-span-2 row-span-3">
          <div className="flex-row pad1 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <img src="#" alt="Photo" />
            </div>
            <div>
              <p>Text</p>
            </div>
            <div>
              <p>Preis</p>
            </div>
          </div>
          <div className="flex-row pad1 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <p>Remove</p>
            </div>
            <div className="flex flex-row">
              <div className="pr-4">
                <p>Update</p>
              </div>
              <div>
                <p>Addbutton</p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="pad1 flex flex-row">
            <div className="pr-2">
              <p>Total</p>
            </div>
            <div>
              <p>Preis</p>
            </div>
          </div>
          <div className="pad1">
            <p>Checkout</p>
          </div>
        </div>


      </div>
    </div>
  )
}
