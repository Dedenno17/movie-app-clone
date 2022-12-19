import Image from 'next/image';
import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import detailMovieCastsInterface from '../../models/detailMovieCasts';
import SkeletonLoadingContentsCasts from './SkeletonLoadingContentsCasts';

const CastsMovie: React.FC<{
  id: string | string[] | undefined;
  typeContent: string;
}> = ({ id, typeContent }) => {
  // state trailer data
  const [detailMovieCasts, setDetailMovieCasts] = useState<
    detailMovieCastsInterface | undefined
  >(undefined);

  // fetching data of movie casts
  const { isLoading: loadingCasts } = useFetch(
    `https://api.themoviedb.org/3/${typeContent}/${id}/credits?api_key=639d75e6b806c03213815ae9aa5a9376&language=en-US`,
    id,
    setDetailMovieCasts
  );

  return (
    <>
      {detailMovieCasts && !loadingCasts && (
        <div className="w-full">
          <span className="w-full py-2 text-slate-200 text-xl">Director</span>
          <ul className="w-full grid grid-cols-1">
            {detailMovieCasts.crew
              .filter(
                (item) =>
                  item.job === 'Director' ||
                  item.known_for_department === 'Directing'
              )
              .map((item) => (
                <li
                  key={Math.random() + 1 + ''}
                  className="flex items-center py-3 border-b-[1px] border-b-ternaryGrey"
                >
                  <div className="w-[20%] h-[85px] relative md:w-[10%] lg:w-[7%] xl:h-[110px]">
                    <Image
                      src={`https://www.themoviedb.org/t/p/original${item.profile_path}`}
                      alt={item.name}
                      fill
                      sizes="true"
                      priority
                    />
                  </div>
                  <div className="w-[80%] px-3">
                    <h4 className="text-md text-primaryGrey mb-1">
                      {item.original_name}
                    </h4>
                    <p className="text-sm text-ternaryGrey">
                      {item.known_for_department}
                    </p>
                  </div>
                </li>
              ))}
          </ul>
          <span className="w-full py-2 text-slate-200 text-xl">Casts</span>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {detailMovieCasts.cast.slice(0, 10).map((item) => (
              <li
                key={Math.random() + 1 + ''}
                className="flex items-center py-3 border-b-[1px] border-b-ternaryGrey"
              >
                <div className="w-[20%] h-[85px] relative xl:h-[110px]">
                  <Image
                    src={`https://www.themoviedb.org/t/p/original${item.profile_path}`}
                    alt={item.name}
                    fill
                    sizes="true"
                    priority
                  />
                </div>
                <div className="w-[80%] px-3">
                  <h4 className="text-md text-primaryGrey mb-1">
                    {item.original_name}
                  </h4>
                  <p className="text-sm text-ternaryGrey">{item.character}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!detailMovieCasts && loadingCasts && <SkeletonLoadingContentsCasts />}
    </>
  );
};

export default React.memo(CastsMovie);
