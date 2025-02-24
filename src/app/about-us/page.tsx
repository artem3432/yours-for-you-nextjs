import Buttonshop from "../Buttonshop";

export default function Home() {
    return (
        <div className="">
            <div className="pad1">
                <h3 className="text-s2 text-red-600">SHOPING</h3><br />
                <h1 className="text-s3 text-white font-bold">ABOUT US</h1><br />
                <h2 className="text-s4 text-white">buy . make a new style</h2><br />
                <p className="text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo in ipsam consectetur adipisci eos. Voluptate, provident, voluptatibus aliquid molestias, adipisci iste quas possimus cupiditate laudantium accusamus officia asperiores necessitatibus deleniti.</p>
            </div><br />
            <div className="flex flex-wrap pad1 bg-white rounded-sm">
                <div className="foto3-h w-full md:w-1/3 p-2">
                    <img className="rounded-lg foto3-h w-full" src="foto3.jpeg" alt="Foto3" />
                </div>
                <div className="w-full md:w-2/3 p-2">
                    <h2 className="text-s2 text-red-600">ABOUT OUR SHOP</h2>
                    <h2 className="text-s3 text-black font-bold">WE MAKE YOUR LIFE MORE COLORFUL</h2>
                    <h2 className="text-s4 text-white">buy . make a new style</h2><br />
                    <p className="text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo in ipsam consectetur adipisci eos. Voluptate, provident, voluptatibus aliquid molestias, adipisci iste quas possimus cupiditate laudantium accusamus officia asperiores necessitatibus deleniti.</p><br />
                    <ul className="pad1">
                        <li className="text-violet-700 list-disc">Neil Armstrong</li>
                        <li className="text-violet-700 list-disc">Alan Bean</li>
                        <li className="text-violet-700 list-disc">Peter Conrad</li>
                        <li className="text-violet-700 list-disc">Edgar Mitchell</li>
                        <li className="text-violet-700 list-disc">Alan Shepard</li>
                    </ul>
                </div>

                <div className="w-full p-2">
                    <Buttonshop />
                </div>
            </div>
        </div>
    );
}
