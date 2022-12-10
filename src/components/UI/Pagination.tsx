import React, { ReactNode } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

interface layoutProps {
  children?: ReactNode;
  currPage: number;
  pageNumber: number[];
  onClickPage: (arg: number) => void;
  onClickNextTenPage: () => void;
  onClickPrevTenPage: () => void;
}

const Pagination: React.FC<layoutProps> = ({
  currPage,
  pageNumber,
  onClickPage,
  onClickNextTenPage,
  onClickPrevTenPage,
}) => {
  return (
    <div className="w-full py-4 flex">
      <div className="w-[10%] flex items-center">
        <p className="text-primaryGrey text-sm">Page {currPage}</p>
      </div>
      <ul className="w-[85%] flex items-center justify-start">
        <li
          className={`w-12 h-9 flex justify-center items-center mr-5 border-[1px] border-black text-primaryGrey cursor-pointer rounded-sm text-xs ${
            currPage === 1 ? 'opacity-0 pointer-events-none' : ''
          }`}
          onClick={onClickPrevTenPage}
        >
          <AiFillCaretLeft />
        </li>
        {pageNumber.map(
          (item: number, i: number): ReactNode => (
            <li
              key={item + i + ''}
              className={`w-12 h-9 flex justify-center items-center mr-3 border-[1px] text-xs ${
                item === currPage
                  ? 'border-primaryRed text-primaryRed bg-black'
                  : 'border-black text-primaryGrey'
              } cursor-pointer rounded-sm`}
              onClick={() => onClickPage(item)}
            >
              {item}
            </li>
          )
        )}
        <li
          className="w-12 h-9 flex justify-center items-center mr-5 border-[1px] border-black text-primaryGrey cursor-pointer rounded-sm text-xs"
          onClick={onClickNextTenPage}
        >
          <AiFillCaretRight />
        </li>
      </ul>
    </div>
  );
};

export default React.memo(Pagination);
