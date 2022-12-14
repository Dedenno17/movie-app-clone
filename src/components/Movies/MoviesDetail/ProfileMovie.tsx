import React, { ReactNode } from 'react';
import Image from 'next/image';
import { dateFormat } from '../../../helpers/dateFormat';
import {
  detailMovieProductionCountry,
  detailMovieGenres,
} from '../../../models/detailMovieData';

interface layoutProps {
  image: string;
  title: string;
  tagline: string;
  releaseDate: string;
  productionCountries: detailMovieProductionCountry[];
  runtime: number;
  genres: detailMovieGenres[];
}

const ProfileMovie: React.FC<layoutProps> = (props) => {
  return (
    <div className="w-full p-6 flex items-start">
      <div className="w-[30%] h-[170px] relative">
        <Image
          src={`https://www.themoviedb.org/t/p/original${props.image}`}
          alt={props.title}
          fill
          sizes="true"
          priority
        />
      </div>
      <div className="w-[60%] ml-5">
        <h1 className="text-4xl text-white font-extralight">{props.title}</h1>
        <p className="text-md text-primaryGrey">{props.tagline}</p>
        <div className="w-full flex items-center my-2">
          <span className="w-[35%] text-ternaryGrey text-xs">
            {dateFormat(props.releaseDate)},
          </span>
          <span className="w-[65%] text-ternaryGrey text-xs">
            {props.productionCountries[0].name}
          </span>
        </div>
        <p className="my-1 text-xs text-primaryGrey mb-2">
          {props.runtime} Min
        </p>
        <ul className="w-full flex items-center">
          {props.genres.map(
            (item, i): ReactNode => (
              <li
                key={item.id + ''}
                className={`pr-[6px] pl-[6px] text-white text-sm ${
                  i === 0
                    ? 'border-l-none pl-0'
                    : 'border-l-[1px] border-l-secondaryGrey'
                }`}
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

export default React.memo(ProfileMovie);
