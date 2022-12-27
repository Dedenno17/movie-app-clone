import React from 'react';

const SkeletonLoadingContent: React.FC = () => {
  return (
    <ul className="w-full flex flex-col animate-pulse">
      {[1, 2, 3, 4, 5].map((item: number) => (
        <li
          className="w-full flex py-3 border-b-[1px] border-b-secondaryGrey"
          key={Math.random() + ''}
        >
          <div className="w-[25%] h-[130px] md:w-[20%] md:h-[210px] lg:w-[15%] xl:h-[240px] bg-ternaryGrey" />
          <div className="ml-5 w-[55%]">
            <div className="w-[90%] bg-ternaryGrey py-4" />
            <div className="flex items-center my-2">
              <span className="px-6 py-2 mr-3 bg-black text-[10px] font-bold" />
              <span className="px-8 py-2 mr-3 bg-ternaryGrey text-[10px] font-bold" />
            </div>
            <div className="py-2 bg-ternaryGrey mb-2 w-full" />
            <div className="py-2 bg-ternaryGrey mb-2 w-full" />
            <div className="py-2 bg-ternaryGrey mb-2 w-full" />
            <div className="py-2 bg-ternaryGrey mb-2 w-full" />
            <div className="py-2 bg-ternaryGrey mb-2 w-full" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(SkeletonLoadingContent);
