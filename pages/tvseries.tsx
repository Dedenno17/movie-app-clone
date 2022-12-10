import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import popularTvSeriesData from '../src/models/popularTvSeriesData';
import TvSeriesContent from '../src/components/TvSeries/TvSeriesContent';
import Pagination from '../src/components/UI/Pagination';
import PaginationMobile from '../src/components/UI/PaginationMobile';

interface MoviesProps {
  data: popularTvSeriesData;
}

// prerendered function
export const getStaticProps: GetStaticProps<MoviesProps> = async (): Promise<
  GetStaticPropsResult<MoviesProps> | any
> => {
  try {
    const res = await fetch(
      'https://api.themoviedb.org/3/tv/popular?api_key=639d75e6b806c03213815ae9aa5a9376&language=en-US&page=1'
    );
    if (!res.ok) {
      throw new Error();
    }
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (err) {
    alert(err);
  }
};

const Movies: NextPage<MoviesProps> = ({ data }) => {
  // state first load
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  // state isLoading
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // new movie data when click the page
  const [seriesDataForAnotherTenPages, setSeriesDataForAnotherTenPages] =
    useState<[]>([]);

  // current 10 pages
  const [pageNumber, setPageNumber] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  //   current page
  const [currPage, setCurrPage] = useState<number>(pageNumber[0]);

  //   function click page
  const clickPageHandler = (page: number) => {
    setIsFirstLoad(false);
    setCurrPage(page);
  };

  //   function click next page button
  const clickNextTenPageHandler = () => {
    setIsFirstLoad(false);
    if (currPage === pageNumber[pageNumber.length - 1]) {
      setPageNumber((prevState): number[] => {
        return prevState.map((num: number) => num + 10);
      });
      return;
    }

    setCurrPage((prevState) => prevState + 1);
  };

  //   function click prev page button
  const clickPrevTenPageHandler = () => {
    setIsFirstLoad(false);
    if (currPage === pageNumber[0]) {
      setPageNumber((prevState): number[] => {
        return prevState.map((num: number) => num - 10);
      });
      return;
    }

    setCurrPage((prevState) => prevState - 1);
  };

  //   current page will be a first item automatically in current 10 pages when click next 10 page button
  useEffect(() => {
    setCurrPage(pageNumber[0]);
  }, [pageNumber]);

  //   it'll fetch movie data again based on the current page if it wasn't first load
  useEffect(() => {
    setIsLoading(true);
    const fetchTvSeriesData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=639d75e6b806c03213815ae9aa5a9376&language=en-US&page=${currPage}`
        );
        if (!res.ok) {
          throw new Error('Failed to Fetch');
        }
        const data = await res.json();
        setSeriesDataForAnotherTenPages(data.results);
        setIsLoading(false);
      } catch (err) {
        alert(err);
      }
    };

    if (!isFirstLoad) {
      fetchTvSeriesData();
    }
  }, [currPage, isFirstLoad]);

  return (
    <div className="w-full p-5">
      <Head>
        <title>Popular TV Series</title>
        <meta
          name="Kumpulan Series-series Populer dari berbagai genre dan berbagai production house ternama di dunia, seperti Disney, FOX, dan lain-lain"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full flex items-center justify-center py-2">
        <span className="p-[2px] bg-ternaryGrey w-[35%] rounded-full md:w-[40%]"></span>
        <span className="text-lg text-slate-200 w-[25%] text-center md:text-2xl md:w-[20%] lg:text-3xl xl:text-4xl">
          TV SERIES
        </span>
        <span className="p-[2px] bg-ternaryGrey w-[35%] rounded-full md:w-[40%]"></span>
      </div>

      <TvSeriesContent
        dataFirstLoad={data.results}
        isFirstLoad={isFirstLoad}
        dataNextLoad={seriesDataForAnotherTenPages}
        isLoading={isLoading}
      />

      <Pagination
        currPage={currPage}
        pageNumber={pageNumber}
        onClickPage={clickPageHandler}
        onClickNextTenPage={clickNextTenPageHandler}
        onClickPrevTenPage={clickPrevTenPageHandler}
      />

      <PaginationMobile
        onClickNextTenPage={clickNextTenPageHandler}
        onClickPrevTenPage={clickPrevTenPageHandler}
      />
    </div>
  );
};

export default Movies;
