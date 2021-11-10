import React from 'react';

const Social = ({ img, name }) => {
  return (
    <div className="flex bg-gray-100 mt-6 p-4 items-start w-4/5 mx-auto justify-around">
      <img src={img} className="h-14 w-14 rounded-full" alt={name} />
      <li className="text-xl font-semibold text-center">{name}</li>
    </div>
  );
};

export default Social;
