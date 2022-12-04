import React, { ReactNode } from 'react';
import Link from 'next/link';

interface link {
  name: string;
  slug: string;
}

const navLinks: link[] = [
  { name: 'Movies', slug: 'movies' },
  { name: 'TV Series', slug: 'tvseries' },
  { name: 'Genre', slug: 'genre' },
];

const NavMobile: React.FC<{ isShow: boolean }> = (props) => {
  return (
    <div
      className={`w-full block bg-primaryBlack/95 absolute right-0 left-0 transition-all duration-500 lg:hidden ${
        props.isShow ? 'top-12 opacity-1 visible' : 'top-0 opacity-0 invisible'
      }`}
    >
      <ul className="w-full flex flex-col justify-between items-center">
        {navLinks.map((item: link, i: number): ReactNode => {
          return (
            <li
              key={Math.random() + i + ''}
              className={`flex-grow-1 w-full flex justify-center items-center text-slate-200 text-lg p-4 ${
                i !== 0 ? 'border-t-[1px] border-t-secondaryGrey' : ''
              } ${
                i === navLinks.length - 1
                  ? 'border-b-[1px] border-b-secondaryGrey'
                  : ''
              }`}
            >
              <Link href={`/${item.slug}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default React.memo(NavMobile);
