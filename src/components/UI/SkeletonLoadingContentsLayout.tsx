import React, { ReactNode } from 'react';

const SkeletonLoading: React.FC = () => {
  return (
    <>
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ].map(
        (item: number, i: number): ReactNode => (
          <li className="flex flex-col animate-pulse" key={item + i + ''}>
            <div className="bg-ternaryGrey h-[200px] overflow-hidden rounded-xl cursor-pointer md:h-[240px] lg:h-[200px] xl:h-[240px]" />
            <div className="h-[20%] mt-2">
              <span className="bg-ternaryGrey block py-[10px] w-full my-[6px]" />
              <span className="bg-ternaryGrey block py-[10px] w-[50%]" />
            </div>
          </li>
        )
      )}
    </>
  );
};

export default React.memo(SkeletonLoading);
