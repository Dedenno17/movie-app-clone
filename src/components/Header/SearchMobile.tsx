import React from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchMobile: React.FC = () => {
  return (
    <form className="w-full flex justify-between items-center bg-black">
      <input
        type="text"
        placeholder="Search ..."
        className="w-[87%] px-4 py-3 text-2xl bg-transparent placeholder:text-secondaryGrey outline-none border-none text-slate-200"
      />
      <BiSearch className="w-[13%] p-1 text-4xl text-slate-200 bg-transparent" />
    </form>
  );
};

export default React.memo(SearchMobile);
