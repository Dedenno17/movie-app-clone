import React from 'react';

const SkeletonLoadingEpisode: React.FC = () => {
  return (
    <ul className="w-full animate-pulse">
      {[1, 2, 3, 4, 5].map((item) => (
        <li
          key={Math.random() + item + ''}
          className="w-full flex items-center mb-2"
        >
          <div className="h-14 w-[90px]  bg-primaryGrey" />
          <div className="h-8 w-24 ml-2  bg-primaryGrey" />
          <div className="h-14 w-[40%] pl-4 flex flex-col items-start justify-evenly ">
            <span className="text-slate-200 text-sm py-1 w-[20%] bg-primaryGrey" />
            <span className="text-ternaryGrey text-xs py-1 w-[10%] bg-primaryGrey" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(SkeletonLoadingEpisode);
