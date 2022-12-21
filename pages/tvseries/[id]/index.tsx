import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useFetch from '../../../src/hooks/useFetch';
import TrailerVideo from '../../../src/components/UI/TrailerVideo';
import ProfileSeries from '../../../src/components/TvSeries/SeriesDetail/ProfileSeries';
import SkeletonLoadingContentsDetail from '../../../src/components/UI/SkeletonLoadingContentsDetail';
import CastsContent from '../../../src/components/UI/CastsContent';
import SocialMedia from '../../../src/components/UI/SocialMedia';
import SimilarContent from '../../../src/components/UI/SimilarContent';
import ButtonCategory from '../../../src/components/TvSeries/SeriesDetail/ButtonCategory';
import InfoSeries from '../../../src/components/TvSeries/SeriesDetail/InfoSeries';
import detailSeriesInterface from '../../../src/models/detailSeriesData';
import detailSeriesVideoInterface from '../../../src/models/detailMovieVideo';
import detailMovieSimilarInterface from '../../../src/models/detailMovieSimilar';
import EpisodesOfSeasonList from '../../../src/components/TvSeries/SeriesDetail/EpisodesOfSeasonList';

const TvSeries: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const idAddress = id?.toString().split(' ')[1];

  // state detail movie data
  const [detailSeriesData, setDetailSeriesData] = useState<
    detailSeriesInterface | undefined
  >(undefined);

  // state trailer data
  const [detailVideoTrailer, setDetailVideoTrailer] = useState<
    detailSeriesVideoInterface | undefined
  >(undefined);

  // state similar data
  const [detailSimilarSeries, setDetailSimilarSeries] = useState<
    detailMovieSimilarInterface | undefined
  >(undefined);

  // state of kind of category
  const [category, setCategory] = useState<string>('episodes');

  // function to change category info
  const changeCategoryHandler = (cat: string) => {
    setCategory(cat);
  };

  // fetching detail series data
  const { isLoading: loadingSeries } = useFetch(
    `https://api.themoviedb.org/3/tv/${idAddress}?api_key=639d75e6b806c03213815ae9aa5a9376&language=en-US`,
    idAddress,
    setDetailSeriesData
  );

  // fetching detail movie trailer video
  const { isLoading: loadingTrailer } = useFetch(
    `https://api.themoviedb.org/3/tv/${idAddress}/videos?api_key=639d75e6b806c03213815ae9aa5a9376&language=en-US`,
    idAddress,
    setDetailVideoTrailer
  );

  // fetching detail similar movies
  const { isLoading: loadingSimilarSeries } = useFetch(
    `https://api.themoviedb.org/3/tv/${idAddress}/similar?api_key=639d75e6b806c03213815ae9aa5a9376&language=en-US&page=1`,
    idAddress,
    setDetailSimilarSeries
  );

  return (
    <div className="w-full">
      <Head>
        <title>{detailSeriesData ? detailSeriesData.name : 'TV Series'}</title>
        <meta
          name={
            detailSeriesData
              ? detailSeriesData.tagline
              : 'Kumpulan Series-Series Populer dari berbagai genre dan berbagai production house ternama di dunia, seperti Disney, FOX, dan lain-lain'
          }
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {detailSeriesData &&
        detailVideoTrailer &&
        detailSimilarSeries &&
        !loadingSeries &&
        !loadingTrailer &&
        !loadingSimilarSeries && (
          <>
            <TrailerVideo
              id={detailVideoTrailer.id}
              results={detailVideoTrailer.results}
            />

            <ProfileSeries
              image={detailSeriesData.poster_path}
              name={detailSeriesData.name}
              firstAirDate={detailSeriesData.first_air_date}
              productionCompanies={detailSeriesData.production_companies}
              genres={detailSeriesData.genres}
              voteAverage={detailSeriesData.vote_average}
              voteCount={detailSeriesData.vote_count}
            />

            <ButtonCategory
              onChange={changeCategoryHandler}
              category={category}
            />

            <div className="w-full px-10 py-8">
              {category === 'episodes' && (
                <>
                  <h2 className="text-lg mb-3 text-slate-200">
                    Seasons and Episodes
                  </h2>
                  {detailSeriesData.seasons
                    .sort((a, b) => b.season_number - a.season_number)
                    .map((item, i) => (
                      <EpisodesOfSeasonList
                        seasonData={item}
                        key={item.id + ''}
                        index={i}
                        idSeries={id}
                        idAddress={idAddress}
                      />
                    ))}
                </>
              )}
              {category === 'info' && (
                <InfoSeries
                  overview={detailSeriesData.overview}
                  name={detailSeriesData.name}
                  originalName={detailSeriesData.original_name}
                  image={detailSeriesData.backdrop_path}
                  voteAverage={detailSeriesData.vote_average}
                  voteCount={detailSeriesData.vote_count}
                  firstAirDate={detailSeriesData.first_air_date}
                  lastAirDate={detailSeriesData.last_air_date}
                  seasons={detailSeriesData.seasons}
                />
              )}
              {category === 'cast' && (
                <CastsContent id={idAddress} typeContent="tv" />
              )}
            </div>
            <SocialMedia />
            <SimilarContent data={detailSimilarSeries} />
          </>
        )}

      {!detailSeriesData &&
        !detailVideoTrailer &&
        !detailSimilarSeries &&
        loadingSeries &&
        loadingTrailer &&
        loadingSimilarSeries && <SkeletonLoadingContentsDetail />}
    </div>
  );
};

export default TvSeries;
