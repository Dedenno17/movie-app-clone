import React, { ReactNode } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

interface layoutProps {
  children?: ReactNode;
  onClickNextPage: () => void;
  onClickPrevPage: () => void;
  currPage: number;
}

const PaginationMobile: React.FC<layoutProps> = ({
  onClickNextPage,
  onClickPrevPage,
  currPage,
}) => {
  return (
    <div className="flex justify-between py-4 w-full lg:hidden">
      <FaAngleLeft
        className={`w-[40%] h-10 bg-ternaryGrey text-slate-200 md:w-[30%] ${
          currPage === 1 ? 'invisible' : 'visible'
        }`}
        onClick={onClickPrevPage}
      />
      <FaAngleRight
        className="w-[40%] h-10 bg-ternaryGrey text-slate-200 md:w-[30%]"
        onClick={onClickNextPage}
      />
    </div>
  );
};

export default React.memo(PaginationMobile);
