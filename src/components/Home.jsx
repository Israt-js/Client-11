const Home = () => {
    return(
        <div className="mb-5">
           <div className="relative banner">
            <img className="w-full h-[580px]" src="https://i.ibb.co/GTR1qbj/5804273.jpg" alt="" />
            <div className="absolute">
               <img src="https://i.ibb.co/FXR1yFS/438115693-1105055627375187-8194962005443155340-n-removebg-preview.png" className="mt-[-560px] ml-[500px]" alt="" />
               <h1 className="text-5xl font-extrabold mt-[-255px] pl-48">MERN stack Webdeveloper <br /> HUNTER</h1>
            </div>
           </div>
           <div className="feature">
           <div className="container mx-auto">
            <h2 className="text-4xl font-bold mt-4 text-center mb-8">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex">
                <h3 className="text-xl font-semibold mb-4 mt-14">MongoDB</h3>
                  <img className="h-32 w-32" src="https://i.ibb.co/1Z2p68y/download-removebg-preview.png" alt="" />
                </div>
                 <p className="text-gray-700">A document database that stores data in a flexible, JSON-like format. MongoDB is widely used in MERN stack applications.</p>
               </div>
               <div className="bg-white rounded-lg shadow-md p-6">
               <div className="flex">
                <h3 className="text-xl font-semibold mb-4 mt-14">Express.js</h3>
                  <img className="h-32 w-44" src="https://i.ibb.co/K252Shd/download-1-removebg-preview.png" alt="" />
                </div>
                 <p className="text-gray-700">A server-side web framework for building APIs and handling HTTP requests. This is used in MERN stack applications.</p>
               </div>
               <div className="bg-white rounded-lg shadow-md p-6">
               <div className="flex">
                <h3 className="text-xl font-semibold mb-4 mt-14">React</h3>
                  <img className="h-32 w-32 ml-5" src="https://i.ibb.co/10wWhyq/download-2-removebg-preview.png" alt="" />
                </div>
                 <p className="text-gray-700"> A client-side JavaScript framework for creating dynamic user interfaces. It allows you to build reusable UI components and manage state efficiently.</p>
               </div>
               <div className="bg-white rounded-lg shadow-md p-6">
               <div className="flex">
                <h3 className="text-xl font-semibold mb-4 mt-14">Node.js</h3>
                  <img className="h-32 w-44" src="https://i.ibb.co/wMV7z2p/download-3-removebg-preview.png" alt="" />
                </div>
                 <p className="text-gray-700"> A powerful JavaScript runtime that serves as the backend server." do this learge text. It provides the runtime environment for executing server-side JavaScript code.</p>
               </div>
            </div>
      </div>
           </div>
        </div>
    )
}
  export default Home;
