import React, { ReactNode } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

interface layoutProps {
  children?: ReactNode;
  onClickNextTenPage: () => void;
  onClickPrevTenPage: () => void;
}

const PaginationMobile: React.FC<layoutProps> = ({
  onClickNextTenPage,
  onClickPrevTenPage,
}) => {
  return (
    <div className="flex justify-between py-4 w-full lg:hidden">
      <FaAngleLeft
        className="w-[40%] h-10 bg-ternaryGrey text-slate-200 md:w-[30%]"
        onClick={onClickPrevTenPage}
      />
      <FaAngleRight
        className="w-[40%] h-10 bg-ternaryGrey text-slate-200 md:w-[30%]"
        onClick={onClickNextTenPage}
      />
    </div>
  );
};

export default React.memo(PaginationMobile);
