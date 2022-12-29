import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { GiFilmSpool } from 'react-icons/gi';
import { setSearchValue } from '../../slices/searchValue';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

const SearchContentList: React.FC = () => {
  const scrollYValue = useAppSelector((state) => state.appScrollY.value);
  const searchValue = useAppSelector((state) => state.searchValue.value);
  const [content, setContent] = useState<any | undefined>(undefined);
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(setSearchValue(''));
  };

  // fetching content
  useEffect(() => {
    const getContentToSearch = async (query: string) => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=639d75e6b806c03213815ae9aa5a9376&language=en-US&query=${query}&page=1&include_adult=false`
        );
        if (!res.ok) {
          throw new Error('Failed to Fetched!');
        }
        const data = await res.json();
        setContent(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    const timeout = setTimeout(() => {
      searchValue.length !== 0 && getContentToSearch(searchValue);
      //   searchValue.length !== 0 && console.log(searchValue);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchValue]);

  useEffect(() => {
    console.log(scrollYValue);
  }, [scrollYValue]);

  return (
    <div
      className={`fixed w-80 z-55 bg-black/90 top-[5.3rem] right-10 transition duration-150 ${
        searchValue.length === 0 ? 'invisible' : 'visible'
      } ${
        scrollYValue >= 100 && scrollYValue < 200 ? 'opacity-0' : 'opacity-1'
      }`}
    >
      <ul className="w-full">
        {content &&
          content
            .filter(
              (item: any) =>
                item.media_type === 'movie' || item.media_type === 'tv'
            )
            .slice(0, 7)
            .map((item: any) => (
              <Link
                href={
                  item.media_type === 'tv'
                    ? `/tvseries/${
                        item.original_name.split('').includes(' ')
                          ? item.original_name.split(' ').join('-')
                          : item.original_name
                      } ${item.id}`
                    : `/movies/${
                        item.original_title.split('').includes(' ')
                          ? item.original_title.split(' ').join('-')
                          : item.original_title
                      } ${item.id}`
                }
                key={item.id + ''}
              >
                <li
                  className="w-full py-2 px-3 border-b-[1px] border-b-secondaryGrey flex cursor-pointer"
                  onClick={clickHandler}
                >
                  {item.poster_path && (
                    <div className="w-16 h-24 flex relative rounded-sm">
                      <Image
                        src={`https://www.themoviedb.org/t/p/original/${item.poster_path}`}
                        alt={
                          item.media_type === 'tv'
                            ? item.original_name
                            : item.original_title
                        }
                        fill
                        sizes="true"
                        priority
                      />
                    </div>
                  )}
                  {!item.poster_path && (
                    <GiFilmSpool className="text-primaryRed m-auto text-xl " />
                  )}
                  <div className="w-[70%] ml-5">
                    <h1 className="text-slate-200 text-md mb-1 hover:text-primaryRed">
                      {item.media_type === 'tv'
                        ? item.original_name
                        : item.original_title}
                    </h1>
                    <span className="flex items-center">
                      <AiFillStar className="text-sm text-primaryYellow" />
                      <span className="text-ternaryGrey text-sm ml-2">
                        {item.vote_average}
                      </span>
                    </span>
                  </div>
                </li>
              </Link>
            ))}
      </ul>
    </div>
  );
};

export default React.memo(SearchContentList);
