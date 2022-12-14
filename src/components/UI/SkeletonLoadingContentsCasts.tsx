import React from 'react';

const SkeletonLoadingContentsCasts: React.FC = () => {
  return (
    <div className="w-full animate-pulse">
      <div className="w-[30%] py-3 bg-primaryGrey" />
      <ul className="w-full grid grid-cols-1">
        <li className="flex items-center py-3">
          <div className="w-[20%] h-[85px] bg-primaryGrey" />
          <div className="w-[40%] px-3">
            <div className="py-3 bg-primaryGrey mb-1" />
            <div className="py-2 bg-primaryGrey" />
          </div>
        </li>
      </ul>
      <div className="w-[30%] py-3 bg-primaryGrey" />
      <ul className="w-full grid grid-cols-1">
        <li className="flex items-center py-3">
          <div className="w-[20%] h-[85px] bg-primaryGrey" />
          <div className="w-[40%] px-3">
            <div className="py-3 bg-primaryGrey mb-1" />
            <div className="py-2 bg-primaryGrey" />
          </div>
        </li>
        <li className="flex items-center py-3 border-t-[1px] border-t-ternaryGrey">
          <div className="w-[20%] h-[85px] bg-primaryGrey" />
          <div className="w-[40%] px-3">
            <div className="py-3 bg-primaryGrey mb-1" />
            <div className="py-2 bg-primaryGrey" />
          </div>
        </li>
        <li className="flex items-center py-3 border-t-[1px] border-t-ternaryGrey">
          <div className="w-[20%] h-[85px] bg-primaryGrey" />
          <div className="w-[40%] px-3">
            <div className="py-3 bg-primaryGrey mb-1" />
            <div className="py-2 bg-primaryGrey" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(SkeletonLoadingContentsCasts);
