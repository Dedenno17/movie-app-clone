import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { GiFilmSpool } from 'react-icons/gi';
import { season } from '../../../models/detailSeriesData';
import detailSeriesSeasonInterface from '../../../models/detailSeriesSeason';
import SkeletonLoadingEpisode from '../../UI/SkeletonLoadingEpisode';
import { dateFormat } from '../../../helpers/dateFormat';
import { cutTitle } from '../../../helpers/cutTitle';
import { useAppSelector } from '../../../store/hooks';
import Link from 'next/link';

interface LayoutProps {
  seasonData: season;
  index: number;
  idSeries: string | string[] | undefined;
  idAddress: string | string[] | undefined;
}

const EpisodesOfSeasonList: React.FC<LayoutProps> = ({
  seasonData,
  index,
  idSeries,
  idAddress,
}) => {
  // get the value of screenWidth
  const screenWidth = useAppSelector((state) => state.appScreenWidth.value);

  // state of toggle list
  const [isOpen, setIsOpen] = useState<boolean>(index === 0 ? true : false);

  //   state of detail season data
  const [detailSeasonData, setDetailSeasonData] = useState<
    detailSeriesSeasonInterface | undefined
  >(undefined);

  //   state when loading
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //   fetching detail season data
  useEffect(() => {
    const getDetailSeasonData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/${idAddress}/season/${seasonData.season_number}?api_key=639d75e6b806c03213815ae9aa5a9376&language=en-US`
        );
        if (!res.ok) {
          throw new Error('Failed Fetching data');
        }
        const data = await res.json();
        setDetailSeasonData(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    if (isOpen && !detailSeasonData) {
      getDetailSeasonData();
    }
  }, [isOpen, idAddress, seasonData.season_number, detailSeasonData]);

  return (
    <>
      <div
        className={`w-full flex items-center text-lg mb-2 ${
          isOpen ? 'bg-black' : 'bg-black/50'
        }`}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <div
          className={`h-14 w-[90px] flex justify-center items-center text-slate-200 ${
            isOpen ? 'bg-primaryRed' : 'bg-black'
          }`}
        >
          {index + 1}
        </div>
        <div className="h-8 w-24 flex justify-center items-center text-sm text-slate-200">
          {seasonData.name}
        </div>
        <div className="h-14 w-[40%] pl-4 flex justify-start items-center text-xs text-ternaryGrey ">
          {dateFormat(seasonData.air_date)}
        </div>
      </div>
      {detailSeasonData && !isLoading && isOpen && (
        <ul className={`w-full ${isOpen ? 'block' : 'hidden'}`}>
          {detailSeasonData.episodes.map((item) => (
            <li
              key={item.id + ''}
              className="w-full flex items-center mb-2 bg-black"
            >
              <div className="h-14 w-[90px] relative flex bg-secondaryGrey">
                {item.still_path && (
                  <Image
                    src={`https://www.themoviedb.org/t/p/original${item.still_path}`}
                    alt={item.name}
                    fill
                    sizes="true"
                    priority
                  />
                )}
                {!item.still_path && (
                  <GiFilmSpool className="text-primaryRed m-auto text-4xl " />
                )}
              </div>
              <div className="h-8 w-24 flex justify-center items-center text-sm text-primaryGrey border-r-[1px] border-r-secondaryGrey">
                {item.season_number} - {item.episode_number}
              </div>
              <div className="h-14 w-[40%] pl-4 flex flex-col items-start justify-evenly ">
                <Link
                  href={`/tvseries/${idSeries}/season-${
                    item.season_number === 0 ? 'specials' : item.season_number
                  }-episode-${item.episode_number} ${idAddress}`}
                >
                  <span className="text-slate-200 text-sm hover:text-primaryRed cursor-pointer">
                    {screenWidth && screenWidth < 768
                      ? cutTitle(item.name)
                      : item.name}
                  </span>
                </Link>
                <span className="text-ternaryGrey text-[11px]">
                  {dateFormat(item.air_date)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!detailSeasonData && isLoading && isOpen && <SkeletonLoadingEpisode />}
    </>
  );
};

export default React.memo(EpisodesOfSeasonList);
