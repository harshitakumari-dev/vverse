import Image from "next/image";
import userIcon from '../../public/icon-user.png'
import audioIcon from '../../public/Audio Status.png'
import videoIcon from '../../public/Video Status.png'
export default function Home() {
  const data =[
    {
      "text":"Personal Profile Builder",
      "name":"DR. Ahmed Hasan"
    },
    {
      "text":"Entity Profile Builder",
      "name":"Animalz story zoo"
    },
    {
      "text":"New Entity Builder",
      "name":""
    },

  ]
  return (
    <main className="p-8 bg-gray-100">
      <section className="p-3 bg-gray-100">
        <div className="py-7 flex items-center justify-between space-x-2">
        {/* <div className="text-5xl bg-clip-text font-extrabold ...">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
    Hello world
  </span>
</div> */}
  <h1 className="whitespace-nowrap">MY PROFILES</h1>
  <div className="w-[1323px] h-[1px] bg-gradient-to-r from-blue-500 to-violet-600"></div>
        </div>

        <div className="space-y-8 bg-white">
        <div className="flex items-center ">
          <div className="w-[1450px] p-5 h-[70px] bg-[linear-gradient(90deg,#016DEA_0%,#003B7E_100%)]">
             <h2 className="text-[20px] font-bold text-white">Profiles Builders</h2>
          </div>
        </div>

        <div className="flex items-center space-x-4 border p-4 rounded-md border-gray-200">
        {data.map((item, index) => (
  <div className="w-[460px] h-[240px] rounded-md border border-gray-200  shadow-md flex items-center justify-center" key={index}>
    <div className="text-center">
      <h3 className="text-[20px] font-bold">{item.text}</h3>
      <div className="h-[125px] w-[125px] rounded-full bg-[linear-gradient(90deg,#FA0101_0%,#016DEA_100%)] mx-auto my-4"></div>
      <p className="text-[14px] font-bold">{item.name}</p>
    </div>
  </div>
))}

</div>
        </div>
      </section>


      <section className="p-3  border-gray-200">
        <div className="py-7 flex items-center justify-between space-x-2">
        {/* <div className="text-5xl bg-clip-text font-extrabold ...">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
    Hello world
  </span>
</div> */}
  <h1 className="whitespace-nowrap">Chat</h1>
  <div className="w-[1323px] h-[1px] bg-gradient-to-r from-blue-500 to-violet-600"></div>
        </div>
    <div className="bg-white border p-4 rounded-lg border-gray-200">
      <div className="flex items-center space-x-3">
        <img src={userIcon.src}/>
        <div className="">
          <h1 className="text-[14px] font-bold text-black">Dr. Sofia Ibrahim</h1>
          <p className="text-[12px] text-gray-500">Business Development Director</p>
        </div>
        <hr />

      
      </div>
      <div className="shadow-lg ">
            <div className="flex space-x-3 ">
              <div className="w-[677px] rounded-lg h-[475px] bg-gray-300">
                <div className="flex justify-end">
         <img src={audioIcon.src}/>
         <img src={videoIcon.src}/>
                </div>
                <div className="flex flex-col h-full">
                  <button className="w-[133px] mt-auto mb-16  h-[28px] rounded-2xl bg-gray-400 text-white font-bold text-[12px]">Dr. Ahmed Hassan</button>
                </div>
              </div>
              <div className="w-[677px] rounded-lg bg-gray-300 h-[475px]">
              <div className="flex justify-end">
         <img src={audioIcon.src}/>
         <img src={videoIcon.src}/>
                </div>

                <div className="relative">

  <div className=" h-[125px] w-[125px]  bg-[linear-gradient(90deg,#FA0101_0%,#016DEA_100%)] rounded-full flex items-center justify-end">
   
    <div className="absolute border border-white  w-[30px] h-[30px] bg-green-400 rounded-full "></div>
  </div>
</div>




                <div className="flex flex-col h-full">
                  <button className="w-[133px] mt-auto mb-16  h-[28px] rounded-2xl bg-gray-400 text-white font-bold text-[12px]">Dr. Ahmed Hassan</button>
                </div>
              </div>
            </div>
        </div>
    </div>
     
      </section>







     
    </main>
  );
};

