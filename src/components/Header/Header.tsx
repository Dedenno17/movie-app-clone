import React, { useState, ReactNode } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import { BiCameraMovie } from 'react-icons/bi';
import { BiMoviePlay } from 'react-icons/bi';
import { AiFillFolderOpen } from 'react-icons/ai';
import { AiFillCaretDown } from 'react-icons/ai';
import SearchMobile from './SearchMobile';
import Link from 'next/link';

interface links {
  name: string;
  slug: string;
  icon: ReactNode;
}

const navigationLinks: links[] = [
  { name: 'Movies', slug: 'movies', icon: <BiCameraMovie /> },
  { name: 'TV Series', slug: 'tvseries', icon: <BiMoviePlay /> },
  { name: 'Genre', slug: 'genre', icon: <AiFillFolderOpen /> },
];

const Header: React.FC<{ onShow: () => void }> = (props) => {
  const [isShowSearchMobile, setIsShowSearchMobile] = useState<boolean>(false);

  const showSearchMobileHandler = () => {
    setIsShowSearchMobile((prevState) => !prevState);
  };

  return (
    <header className="max-w-[1440px] mx-auto">
      <div className="flex justify-between items-center text-slate-200 py-1 px-3 border-b-[1px] border-b-secondaryGrey lg:py-4 lg:px-8">
        <GiHamburgerMenu
          className="text-2xl cursor-pointer lg:hidden"
          onClick={props.onShow}
        />
        <span className="cursor-pointer lg:flex lg:items-center">
          <h1 className="text-4xl font-bold text-primaryRed lg:text-5xl">
            FELIX
          </h1>
          {navigationLinks.map(
            (item: links, i: number): ReactNode => (
              <Link href={`/${item.slug}`} key={Math.random() + i + ''}>
                <span className="hidden text-primaryGrey text-lg lg:flex items-center ml-8 cursor-pointer hover:text-primaryRed">
                  <span>{item.icon}</span>
                  <span className="mx-2">{item.name}</span>
                  <span>
                    <AiFillCaretDown />
                  </span>
                </span>
              </Link>
            )
          )}
        </span>
        <BiSearch
          className="text-2xl cursor-pointer lg:hidden"
          onClick={showSearchMobileHandler}
        />
        <form className="hidden lg:flex lg:justify-between items-center bg-ternaryGrey pr-4 rounded-md">
          <input
            type="text"
            className="w-[85%] pl-4 py-2 text-lg font-semibold bg-transparent border-none outline-none text-primaryGrey placeholder:text-secondaryGrey placeholder:font-light"
            placeholder="Search ..."
          />
          <BiSearch className="text-2xl cursor-pointer bg-transparent text-primaryGrey " />
        </form>
      </div>
      {isShowSearchMobile && <SearchMobile />}
    </header>
  );
};

export default React.memo(Header);
