import React, { ReactNode } from 'react';
import ContentCard from './ContentCard';
import { resultsMoviesData } from '../../models/popularMoviesData';
import SkeletonLoading from './SkeletonLoadingContentsLayout';

interface layoutProps {
  dataFirstLoad: resultsMoviesData[];
  isFirstLoad: boolean;
  dataNextLoad: resultsMoviesData[];
  isLoading: boolean;
}

const MoviesContent: React.FC<layoutProps> = ({
  dataFirstLoad,
  isFirstLoad,
  dataNextLoad,
  isLoading,
}) => {
  return (
    <div className="w-full border-b-[1px] border-b-secondaryGrey mb-5 pb-3">
      <span className="px-3 py-1 w-full text-xl text-slate-200 border-l-[3px] border-l-primaryRed">
        <span>Featured Movies</span>
      </span>
      <ul className="grid grid-cols-3 gap-3 mt-6 md:grid-cols-4 lg:grid-cols-6 lg:gap-7">
        {dataFirstLoad &&
          isFirstLoad &&
          dataFirstLoad.map(
            (item): ReactNode => (
              <ContentCard
                key={item.id + ''}
                title={item['original_title']}
                img={item['poster_path']}
                rating={item['vote_average']}
                date={item['release_date'].slice(0, 4)}
                typeContent="movies"
                featured={false}
              />
            )
          )}
        {!isFirstLoad && isLoading && <SkeletonLoading />}
        {!isFirstLoad &&
          !isLoading &&
          dataNextLoad.map(
            (item): ReactNode => (
              <ContentCard
                key={item['id'] + ''}
                title={item['original_title']}
                img={item['poster_path']}
                rating={item['vote_average']}
                date={item['release_date']}
                typeContent="movies"
                featured={false}
              />
            )
          )}
      </ul>
    </div>
  );
};

export default React.memo(MoviesContent);
