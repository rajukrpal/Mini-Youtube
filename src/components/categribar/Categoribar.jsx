// import React from 'react'

// const Categoribar = () => {

//   const Categoribar = [
//     "All",
//     "ReactJS",
//     "AngularJS",
//     "React Native",
//     "Use Of API",
//     "Redux",
//     "Music",
//     "Algorithm Art",
//     "Guitar",
//     "Bengali Song",
//     "Bhojpuri Song",
//     "Cricket",
//     "Football",
//     "NodeJS",
//     "Redux",
//     "Firebase",
//   ]
//   return (
//     <>
//     <div className='overflow-x-auto'>
//     <div className='flex gap overflow-x-auto w-full'>
//       {
//         Categoribar.map((item,index)=>(
//           <span className='overflow-x-auto' key={index}>{item}</span>
//         ))
//       }
//     </div>
//     </div>
//     </>
//   )
// }

// export default Categoribar

import React from "react";

const Categoribar = () => {
  const categories = [
    "All",
    "ReactJS",
    "AngularJS",
    "React Native",
    "Use Of API",
    "Redux",
    "Music",
    "Algorithm Art",
    "Guitar",
    "Bengali Song",
    "Bhojpuri Song",
    "Cricket",
    "Football",
    "NodeJS",
    "Redux",
    "Firebase",
  ];

  return (
    <div className="overflow-x-auto hide-scrollbar debug-scroll py-3">
      <div className="flex gap-4 whitespace-nowrap ">
        {categories.map((item, index) => (
          <span
            className="inline-block px-3 py-1 bg-gray-900 rounded-md cursor-pointer hover:bg-slate-700 active:bg-slate-500 transition-colors duration-150"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categoribar;
