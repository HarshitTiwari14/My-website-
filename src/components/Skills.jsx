import React from 'react'

const Skills = () => {
  return (
    <div className = "border-b border-neutral-900 pb-6">   
    <h1 className="my-20 text-center text-4xl text-white">Skills</h1>
    <div className="flex flex-wrap items-center justify- gap-4">
    <h2 className="my-2 max-w-xl text-4xl py-6 font-light text-white px-8">
      Hardware
        </h2>
        <div className=''>     
        <p className=' text-2xl py-4 font-light text-white '> Arduino, Raspberry Pi, ESP32, NodeMCU, Sensors, Transducers </p>
        </div>
        
    <div className= "rounded-2xl border-4 border-teal-900 p-4 mx-2">
      <div className="text-xl text-cyan-400"/>
      <div className="flex justify-end">
      <img src={'./images/arduino14.png'}
      className="rounded-lg"/>
      </div>
      </div>



        <div className="flex flex-wrap items-center justify- gap-4">
    <h2 className="my-2 max-w-xl text-4xl py-6 font-light text-white px-8">
      Software
        </h2>
        <div className=''>     
        <p className=' text-2xl py-4 font-light text-white '> React, Node.js, Express.js, Node-RED</p>
        </div>
    </div>

      <div className= "rounded-2xl border-4 border-sky-800 p-4 mx-2">
      <div className="text-xl text-cyan-400"/>
      <div className="flex justify-end">
      <img src={'./images/Images14.png'}
      className="rounded-lg"/>
      </div>
      </div>

      <div className= "rounded-2xl border-4 border-green-500 p-4 mx-2">
      <div className="text-xl text-lime-600"/>
      <div className="flex justify-end">
      <img src={'./images/nodejs14.png'}
      className="rounded-lg"/>
      </div>
      </div>
  
      <div className= "rounded-2xl border-4 border-rose-900 p-4 mx-2">
      <div className="text-xl text-rose-900"/>
      <div className="flex justify-end">
      <img src={'./images/nodered14.png'}
      className="rounded-lg"/>
      </div>
      </div>
  
  
    
    <div className="flex flex-wrap items-center justify- gap-4">
    <span className="my-2 max-w-xl text-4xl py-6 font-light text-white px-8">
      Database
        </span>
        <div className=''>     
        <p className=' text-2xl py-4 font-light text-white '> MongoDB (DataBase), My SQL
        </p>
        </div>
        </div>

      <div className= "rounded-2xl border-4 border-green-800 p-4 mx-2">
      <div className="text-xl text-cyan-400"/>
      
      <div className="flex justify-end">
      <img src={'./images/Mongodb14.png'}
      className="rounded-lg"/>
      </div>
      </div>
      

      <div className= "rounded-2xl border-4 border-amber-200 p-4 mx-2">
      <div className="text-xl text-cyan-400"/>
      <div className="flex justify-end">
      <img src={'./images/sql14.png'}
      className="rounded-lg"/>
      </div>
      </div>
  
  


        <div className="flex flex-wrap items-center justify- gap-4">
    <h2 className="my-2 max-w-xl text-4xl py-6 font-light text-white px-8">
      Data visulaization 
        </h2>
        <div className=''>     
        <p className=' text-2xl py-4 font-light text-white '> Power BI,Thinkspeak (CloudBase visulaization) </p>
        </div>
        </div>



      
      <div className= "rounded-2xl border-4 border-amber-500 p-4 mx-2">
      <div className="text-xl text-cyan-400"/>
      <div className="flex justify-end">
      <img src={'./images/power-bi-icon14.png'}
      className="rounded-lg"/>
      </div>
      </div>
      </div>
</div>    
  )
}

export default Skills