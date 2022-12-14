import React from 'react';

const SkeletonLoadingContentsDetail: React.FC = () => {
  return (
    <>
      <div className="w-full flex py-8 border-b-4 border-b-secondaryGrey animate-pulse">
        <div className="w-full m-auto bg-primaryGrey h-[240px] md:h-[480px] lg:h-[580px]" />
      </div>
      <div className="w-full p-6 flex items-start animate-pulse">
        <div className="w-[30%] bg-primaryGrey h-[170px]" />
        <div className="w-[60%] ml-5">
          <div className="w-full py-6 bg-primaryGrey mb-3" />
          <div className="w-full py-3 bg-primaryGrey" />
          <div className="w-full flex items-center my-3">
            <span className="w-[35%] bg-primaryGrey py-1 mr-3" />
            <span className="w-[65%] bg-primaryGrey py-1" />
          </div>
          <div className="mt-1 mb-3 py-2 bg-primaryGrey w-[50%]" />
          <ul className="w-full flex items-center">
            <li className="w-[50%] bg-primaryGrey py-2 mr-3" />
            <li className="w-[50%] bg-primaryGrey py-2" />
          </ul>
        </div>
      </div>
      <div className="p-3 flex justify-between items-center border-y-4 border-y-secondaryGrey animate-pulse">
        <div className="w-[46%] rounded-md px-2 py-4 bg-primaryGrey" />
        <div className="w-[46%] rounded-md px-2 py-4 bg-primaryGrey" />
      </div>
      <div className="w-full px-10 py-8 animate-pulse">
        <div className="w-[20%] bg-primaryGrey py-2" />
        <div className="bg-primaryGrey my-2 py-1" />
        <div className="bg-primaryGrey my-2 py-1" />
        <div className="bg-primaryGrey my-2 py-1" />
        <ul className="w-full flex flex-wrap items-center mt-3">
          <li className="w-[20%] py-4 bg-primaryGrey rounded-sm mr-2" />
          <li className="w-[20%] py-4 bg-primaryGrey rounded-sm mr-2" />
        </ul>
        <div className="w-full py-5 border-t-[1px] border-t-secondaryGrey mt-5">
          <div className="bg-primaryGrey w-full h-[210px]" />
        </div>
        <ul className="w-full flex flex-col items-center">
          <li className="w-full py-3 flex flex-col border-t-[1px] border-t-secondaryGrey">
            <span className="w-[40%] bg-primaryGrey py-2 mb-3" />
            <span className="w-[50%] bg-primaryGrey py-2" />
          </li>
          <li className="w-full py-3 flex flex-col border-t-[1px] border-t-secondaryGrey">
            <span className="w-[40%] bg-primaryGrey py-2 mb-3" />
            <div className="w-full flex items-center py-2">
              <div className="w-[30%] bg-primaryGrey py-4  rounded-sm mr-3" />
              <div className="w-[40%] bg-primaryGrey py-2 " />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default React.memo(SkeletonLoadingContentsDetail);
