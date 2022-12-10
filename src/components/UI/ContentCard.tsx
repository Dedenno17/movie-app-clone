import React, { ReactNode } from 'react';
import Image from 'next/image';
import { BsPlayCircle } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { cutTitle } from '../../helpers/cutTitle';

interface layoutProps {
  children?: ReactNode;
  title: string;
  date: string;
  rating: number;
  img: string;
  typeContent: string;
  featured: boolean;
}

const ContentCard: React.FC<layoutProps> = (props) => {
  return (
    <li className="flex flex-col">
      <div className="relative h-[200px] overflow-hidden rounded-xl cursor-pointer group md:h-[240px] lg:h-[200px] xl:h-[240px]">
        <Image
          src={`https://image.tmdb.org/t/p/w185${props.img}`}
          alt={props.title}
          fill
          sizes="true"
          priority
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/70 opacity-0 transition duration-500 group-hover:opacity-100" />
        <BsPlayCircle className="text-5xl text-slate-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-125 transition duration-500 group-hover:opacity-100 group-hover:scale-100" />
        {props.featured && (
          <span className="absolute top-0 left-0 bg-primaryRed text-slate-200 p-[6px] text-[10px]">
            FEATURED
          </span>
        )}
        <span className="absolute -bottom-12 right-0 p-1 flex items-center text-xs text-slate-200 bg-ternaryGrey/75  transition-all duration-500 group-hover:bottom-0">
          <AiFillStar className="mr-[6px]" />
          {props.rating.toFixed(1)}
        </span>
      </div>
      <div className="h-[20%] mt-2">
        <h2 className=" text-primaryGrey text-md hover:text-primaryRed cursor-pointer my-1">
          {cutTitle(props.title)}
        </h2>
        <p className="text-ternaryGrey text-sm">{props.date}</p>
      </div>
    </li>
  );
};

export default React.memo(ContentCard);
