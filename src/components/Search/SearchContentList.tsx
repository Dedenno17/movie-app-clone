import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GiFilmSpool } from 'react-icons/gi';

const SearchContentList: React.FC<{ content: any | undefined }> = ({
  content,
}) => {
  return (
    <ul className="w-full flex flex-col">
      {content &&
        content.results
          .filter(
            (item: any) =>
              item.media_type === 'movie' || item.media_type === 'tv'
          )
          .map((item: any) => (
            <li
              className="w-full flex py-3 border-b-[1px] border-b-secondaryGrey"
              key={item.id + ''}
            >
              <div className="w-[25%] h-[130px] flex relative md:w-[20%] md:h-[210px] lg:w-[15%] xl:h-[240px] bg-ternaryGrey">
                {item.poster_path && (
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
                )}
                {!item.poster_path && (
                  <GiFilmSpool className="text-primaryRed m-auto text-6xl " />
                )}
              </div>
              <div className="ml-5 w-[55%]">
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
                >
                  <h2 className="text-xl text-slate-200 active:text-primaryRed">
                    {item.media_type === 'tv'
                      ? item.original_name
                      : item.original_title}
                  </h2>
                </Link>
                <div className="flex items-center text-sm text-slate-200 my-2">
                  <span className="px-3 py-[2px] mr-3 bg-black text-[10px] font-bold">
                    TMDB {item.vote_average}
                  </span>
                  {item.media_type === 'tv'
                    ? item.first_air_date.split('-')[0]
                    : item.release_date.split('-')[0]}
                </div>
                <p className="text-sm text-ternaryGrey">
                  {item.overview.slice(0, 180) + ' ...'}
                </p>
              </div>
            </li>
          ))}
    </ul>
  );
};

export default React.memo(SearchContentList);
