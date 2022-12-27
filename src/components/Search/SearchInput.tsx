import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { useAppSelector } from '../../store/hooks';

interface layoutProps {
  searchValue: string;
  changeInputHandler: (event: { target: HTMLInputElement }) => void;
}

const SearchInput: React.FC<layoutProps> = ({
  searchValue,
  changeInputHandler,
}) => {
  const initialSearchValue = useAppSelector((state) => state.searchValue.value);

  return (
    <div className="w-full p-3 mb-5">
      <span className="px-3 py-1 w-full text-xl text-slate-200 border-l-[3px] border-l-primaryRed">
        Result found: {initialSearchValue}
      </span>
      <div className="w-full flex justify-between items-center bg-black mt-5">
        <input
          type="text"
          placeholder="Search ..."
          value={searchValue}
          onChange={changeInputHandler}
          className="w-[87%] px-4 py-3 text-xl bg-transparent placeholder:text-secondaryGrey outline-none border-none text-slate-200"
        />
        <BiSearch className="w-[13%] p-1 text-4xl text-slate-200 bg-transparent" />
      </div>
    </div>
  );
};

export default React.memo(SearchInput);
