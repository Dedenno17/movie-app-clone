import Image from 'next/image';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { season } from '../../../models/detailSeriesData';
import { dateFormat } from '../../../helpers/dateFormat';

interface LayoutProps {
  overview: string;
  image: string;
  name: string;
  originalName: string;
  voteAverage: number;
  voteCount: number;
  firstAirDate: string;
  lastAirDate: string;
  seasons: season[];
}

const InfoSeries: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <h2 className="text-lg text-slate-200">Sinopsis</h2>
      <p className="text-ternaryGrey my-3 text-md">{props.overview}</p>
      <div className="w-full py-5 border-t-[1px] border-t-secondaryGrey mt-5">
        <div className="relative h-[210px] md:h-[360px] lg:h-[480px] xl:h-[640px]">
          <Image
            src={`https://www.themoviedb.org/t/p/original${props.image}`}
            alt={props.name}
            fill
            sizes="true"
            priority
          />
        </div>
      </div>
      <ul className="w-full flex flex-col items-center">
        <li className="w-full py-3 flex flex-col border-t-[1px] border-t-secondaryGrey md:flex-row">
          <span className="w-[40%] py-1 text-sm text-slate-200 md:w-[20%]">
            Original Title
          </span>
          <span className="w-[50%] py-1 text-ternaryGrey text-xs">
            {props.originalName}
          </span>
        </li>
        <li className="w-full py-3 flex flex-col border-t-[1px] border-t-secondaryGrey md:flex-row">
          <span className="w-[40%] py-1 text-sm text-slate-200 md:w-[20%]">
            TMDB Rating
          </span>
          <span className="w-[50%] py-1 flex items-center text-xs">
            <span className="bg-secondaryGrey py-1 px-2 text-slate-200 flex items-center rounded-sm mr-3">
              <AiFillStar className="mr-2" /> {props.voteAverage.toFixed(1)}
            </span>
            <span className="text-ternaryGrey">{props.voteCount} Votes</span>
          </span>
        </li>
        <li className="w-full py-3 flex flex-col border-t-[1px] border-t-secondaryGrey md:flex-row">
          <span className="w-[40%] py-1 text-sm text-slate-200 md:w-[20%]">
            First air date
          </span>
          <span className="w-[50%] py-1 text-ternaryGrey text-xs">
            {!props.firstAirDate && ''}
            {props.firstAirDate && dateFormat(props.firstAirDate.toString())}
          </span>
        </li>
        <li className="w-full py-3 flex flex-col border-t-[1px] border-t-secondaryGrey md:flex-row">
          <span className="w-[40%] py-1 text-sm text-slate-200 md:w-[20%]">
            Last air date
          </span>
          <span className="w-[50%] py-1 text-ternaryGrey text-xs">
            {dateFormat(props.lastAirDate)}
          </span>
        </li>
        <li className="w-full py-3 flex flex-col border-t-[1px] border-t-secondaryGrey md:flex-row">
          <span className="w-[40%] py-1 text-sm text-slate-200 md:w-[20%]">
            Seasons
          </span>
          <span className="w-[50%] py-1 text-ternaryGrey text-xs">
            {props.seasons.length}
          </span>
        </li>
      </ul>
    </>
  );
};

export default React.memo(InfoSeries);
