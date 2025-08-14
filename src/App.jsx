import { useState } from 'react'
import './App.css'

import img1 from './assets/download (9).jpeg';
import img2 from './assets/download (10).jpeg';
import img3 from './assets/download (11).jpeg';
import img4 from './assets/download (12).jpeg';
import img5 from './assets/download (13).jpeg';
import img6 from './assets/flowers background Flowers, Pretty flowers.jpeg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <div className="max-w-7xl mx-auto p-6">
          <h2 className="text-4xl font-extrabold  text-center text-white">Nature Gallery</h2>
<h6 className="text-xl italic font-extrabold text-white text-center drop-shadow-md mb-6">
  flip and get your Quat
</h6>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 justify-items-center">

            <div className="group perspective w-[400px]">
              <div className="relative w-full h-64 transition-transform duration-1200 transform-style preserve-3d group-hover:rotate-y-180">
                <div className="absolute w-full h-full backface-hidden bg-gray-900 rounded-lg shadow-[0_0_15px_4px_#f59e0b] overflow-hidden flex flex-col">
                  <img src={img1} alt="nature" className="h-48 w-full object-cover" />
                  <div className="p-4 text-center font-bold text-white bg-gray-900 flex-1 flex items-center justify-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure.
                  </div>
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-amber-500 flex items-center justify-center text-white font-bold text-xl rounded-lg shadow-[0_0_15px_4px_#f59e0b]">
                  Code is like humor. When you have to explain it, it’s bad." – Cory House
                </div>
              </div>
            </div>

            <div className="group perspective w-[400px]">
              <div className="relative w-full h-64 transition-transform duration-1200 transform-style preserve-3d group-hover:rotate-y-180">
                <div className="absolute w-full h-full backface-hidden bg-gray-900 rounded-lg shadow-[0_0_15px_4px_#f59e0b] overflow-hidden flex flex-col">
                  <img src={img2} alt="lake" className="h-48 w-full object-cover" />
                  <div className="p-4 text-center font-bold text-white bg-gray-900 flex-1 flex items-center justify-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                  </div>
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-amber-500 flex items-center justify-center text-white font-bold text-xl rounded-lg shadow-[0_0_15px_4px_#f59e0b]">
                  "Simplicity is the soul of efficiency." – Austin Freeman
                </div>
              </div>
            </div>

            <div className="group perspective w-[400px]">
              <div className="relative w-full h-64 transition-transform duration-1200 transform-style preserve-3d group-hover:rotate-y-180">
                <div className="absolute w-full h-full backface-hidden bg-gray-900 rounded-lg shadow-[0_0_15px_4px_#f59e0b] overflow-hidden flex flex-col">
                  <img src={img3} alt="flower" className="h-48 w-full object-cover" />
                  <div className="p-4 text-center font-bold text-white bg-gray-900 flex-1 flex items-center justify-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-amber-500 flex items-center justify-center text-white font-bold text-xl rounded-lg shadow-[0_0_15px_4px_#f59e0b]">
                  "First, solve the problem. Then, write the code." – John Johnson
                </div>
              </div>
            </div>

            <div className="group perspective w-[400px]">
              <div className="relative w-full h-64 transition-transform duration-1200 transform-style preserve-3d group-hover:rotate-y-180">
                <div className="absolute w-full h-full backface-hidden bg-gray-900 rounded-lg shadow-[0_0_15px_4px_#f59e0b] overflow-hidden flex flex-col">
                  <img src={img4} alt="lake" className="h-48 w-full object-cover" />
                  <div className="p-4 text-center font-bold text-white bg-gray-900 flex-1 flex items-center justify-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis?
                  </div>
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-amber-500 flex items-center justify-center text-white font-bold text-xl rounded-lg shadow-[0_0_15px_4px_#f59e0b]">
                  "Programs must be written for people to read, and only incidentally for machines to execute." – Harold Abelson
                </div>
              </div>
            </div>

            <div className="group perspective w-[400px]">
              <div className="relative w-full h-64 transition-transform duration-1200 transform-style preserve-3d group-hover:rotate-y-180">
                <div className="absolute w-full h-full backface-hidden bg-gray-900 rounded-lg shadow-[0_0_15px_4px_#f59e0b] overflow-hidden flex flex-col">
                  <img src={img5} alt="lake" className="h-48 w-full object-cover" />
                  <div className="p-4 text-center font-bold text-white bg-gray-900 flex-1 flex items-center justify-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </div>
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-amber-500 flex items-center justify-center text-white font-bold text-xl rounded-lg shadow-[0_0_15px_4px_#f59e0b]">
                  "Debugging is like being the detective in a crime movie where you are also the murderer." – Filipe Fortes
                </div>
              </div>
            </div>

            <div className="group perspective w-[400px]">
              <div className="relative w-full h-64 transition-transform duration-1200 transform-style preserve-3d group-hover:rotate-y-180">
                <div className="absolute w-full h-full backface-hidden bg-gray-900 rounded-lg shadow-[0_0_15px_4px_#f59e0b] overflow-hidden flex flex-col">
                  <img src={img6} alt="flower" className="h-48 w-full object-cover" />
                  <div className="p-4 text-center font-bold text-white bg-gray-900 flex-1 flex items-center justify-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, itaque.
                  </div>
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-amber-500 flex items-center justify-center text-white font-bold text-xl rounded-lg shadow-[0_0_15px_4px_#f59e0b]">
                  "Experience is the name everyone gives to their mistakes." – Oscar Wilde
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
