import Image from 'next/image';
import React, { ReactNode } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { HiUserCircle } from 'react-icons/hi';
import { dateFormat } from '../../../helpers/dateFormat';
import { productionCompany, genre } from '../../../models/detailSeriesData';

interface LayoutProps {
  image: string;
  name: string;
  firstAirDate: string;
  productionCompanies: productionCompany[];
  genres: genre[];
  voteAverage: number;
  voteCount: number;
}

const ProfileSeries: React.FC<LayoutProps> = (props) => {
  return (
    <div className="w-full p-6 flex items-start">
      <div className="w-[30%] h-[170px] relative md:w-[20%] md:h-[210px] lg:w-[15%] xl:h-[240px]">
        <Image
          src={`https://www.themoviedb.org/t/p/original${props.image}`}
          alt={props.name}
          fill
          sizes="true"
          priority
        />
      </div>
      <div className="w-[60%] ml-5 md:w-[70%] lg:w-[75%]">
        <h1 className="text-4xl text-white font-extralight">{props.name}</h1>
        <div className="w-full flex flex-wrap items-center my-2">
          <span className="w-[65%] text-ternaryGrey text-xs md:w-[20%] lg:w-[13%]">
            {dateFormat(props.firstAirDate)},
          </span>
          <ul className="w-[65%] flex flex-wrap items-center text-ternaryGrey md:w-[35%] lg:w-[20%]">
            {props.productionCompanies.map((item) => (
              <li
                key={item.id + ''}
                className={`text-primaryRed text-xs mr-1 mt-2 md:mt-0`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex w-full py-3 border-y-[1px] border-y-secondaryGrey my-2 items-center lg:my-4">
          <div className="flex justify-center items-center bg-secondaryGrey text-2xl text-slate-200 rounded-sm px-3 py-2">
            {props.voteAverage.toFixed(1)}
          </div>
          <div className="ml-3">
            <div className="w-full flex items-center mb-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <AiFillStar
                  key={Math.random() + item + ''}
                  className={`text-2xl ${
                    item <= props.voteAverage
                      ? 'text-primaryRed'
                      : 'text-ternaryGrey'
                  }`}
                />
              ))}
            </div>
            <div className="w-full flex items-center text-slate-200">
              <HiUserCircle className="text-md mr-1" />
              <span className="text-xs">{props.voteCount} Votes</span>
            </div>
          </div>
        </div>
        <ul className="w-full flex flex-wrap items-center">
          {props.genres.map(
            (item, i): ReactNode => (
              <li
                key={item.id + ''}
                className={`pr-[6px] pl-[6px] text-white text-sm mt-2 ${
                  i === 0
                    ? 'border-l-none pl-0'
                    : 'border-l-[1px] border-l-secondaryGrey'
                } md:mt-0`}
              >
                {item.name}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(ProfileSeries);
