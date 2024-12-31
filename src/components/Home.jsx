import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="border-b border-gray-900 pd-2">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl px-5 py-8 text-slate-50"
            >
              Welcome to my Website
            </motion.h1>
            <motion.span
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent px-14"
            >
              Harshit Tiwari
            </motion.span>
            <motion.p
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light text-white px-5"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
              corrupti necessitatibus amet, rem voluptatem ea possimus nihil
              praesentium laboriosam voluptatibus obcaecati eaque dolores
              quidem excepturi minima assumenda quod ipsum a libero
              reprehenderit?
            </motion.p>
            <motion.span
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="px-10"
            >
              <button
                onClick={() => navigate('/skills')} // Navigate to Skills page
                className="text-white px-10 py-3 my-3 flex-item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                Skills
              </button>
            </motion.span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 px-8">
          <div className="flex justify-around">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              src={'./images/myimg.jpg'}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
