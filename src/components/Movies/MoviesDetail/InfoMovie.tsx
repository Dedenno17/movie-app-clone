import React, { ReactNode } from 'react';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { detailMovieProductionCompanies } from '../../../models/detailMovieData';

interface LayoutProps {
  overview: string;
  productionCompanies: detailMovieProductionCompanies[];
  image: string;
  title: string;
  originalTitle: string;
  voteAverage: number;
  voteCount: number;
}

const InfoMovie: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <h2 className="text-lg text-slate-200">Sinopsis</h2>
      <p className="text-ternaryGrey my-3 text-md">{props.overview}</p>
      <ul className="w-full flex flex-wrap items-center">
        {props.productionCompanies.map(
          (item): ReactNode => (
            <li
              key={item.id + ''}
              className="px-2 py-1 bg-black text-primaryRed text-md rounded-sm mr-2 mt-1"
            >
              {item.name}
            </li>
          )
        )}
      </ul>
      <div className="w-full py-5 border-t-[1px] border-t-secondaryGrey mt-5">
        <div className="relative h-[210px]">
          <Image
            src={`https://www.themoviedb.org/t/p/original${props.image}`}
            alt={props.title}
            fill
            sizes="true"
            priority
          />
        </div>
      </div>
      <ul className="w-full flex flex-col items-center">
        <li className="w-full py-3 flex flex-col border-t-[1px] border-t-secondaryGrey">
          <span className="w-[40%] py-1 text-sm text-slate-200">
            Original Title
          </span>
          <span className="w-[50%] py-1 text-ternaryGrey text-xs">
            {props.originalTitle}
          </span>
        </li>
        <li className="w-full py-3 flex flex-col border-t-[1px] border-t-secondaryGrey">
          <span className="w-[40%] py-1 text-sm text-slate-200">
            TMDB Rating
          </span>
          <span className="w-[50%] py-1 flex items-center text-xs">
            <span className="bg-secondaryGrey py-1 px-2 text-slate-200 flex items-center rounded-sm mr-3">
              <AiFillStar className="mr-2" /> {props.voteAverage.toFixed(1)}
            </span>
            <span className="text-ternaryGrey">{props.voteCount} Votes</span>
          </span>
        </li>
      </ul>
    </>
  );
};

export default React.memo(InfoMovie);
