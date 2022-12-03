import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import SearchMobile from './SearchMobile';

const Header: React.FC = () => {
  return (
    <header className="w-full ">
      <div className="flex justify-between items-center text-slate-200 py-1 px-3 border-b-[1px] border-b-secondaryGrey">
        <GiHamburgerMenu className="text-2xl cursor-pointer" />
        <span className="cursor-pointer">
          <h1 className="text-4xl font-bold text-primaryRed">FELIX</h1>
        </span>
        <BiSearch className="text-2xl cursor-pointer" />
      </div>
      <SearchMobile />
    </header>
  );
};

export default React.memo(Header);
