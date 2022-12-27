import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../src/store/hooks';
import PaginationMobile from '../src/components/UI/PaginationMobile';
import SearchInput from '../src/components/Search/SearchInput';
import SearchContentList from '../src/components/Search/SearchContentList';
import SkeletonLoadingContent from '../src/components/Search/SkeletonLoadingContent';

const Search: NextPage = () => {
  const initialSearchValue = useAppSelector((state) => state.searchValue.value);

  // state of search value
  const [searchValue, changeSearchValue] = useState<string>(initialSearchValue);

  //   state of results content that looking for
  const [content, setContent] = useState<any | undefined>(undefined);

  // state of loading
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // change input handler
  const changeInputHandler = (event: { target: HTMLInputElement }) => {
    changeSearchValue(event.target.value);
  };

  // state of current page
  const [currentPage, setCurrentPage] = useState<number>(1);

  // function next page
  const clickNextPageHandler = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  // function prev page
  const clickPrevPageHandler = () => {
    currentPage !== 1
      ? setCurrentPage((prevState) => prevState - 1)
      : setCurrentPage(1);
  };

  // fetching content
  useEffect(() => {
    setIsLoading(true);
    const getContentToSearch = async (query: string) => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=639d75e6b806c03213815ae9aa5a9376&language=en-US&query=${query}&page=${currentPage}&include_adult=false`
        );
        if (!res.ok) {
          throw new Error('Failed to Fetched!');
        }
        const data = await res.json();
        setContent(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    const timeout = setTimeout(() => {
      searchValue.length !== 0 && getContentToSearch(searchValue);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchValue, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue]);

  return (
    <div className="w-full p-5">
      <SearchInput
        searchValue={searchValue}
        changeInputHandler={changeInputHandler}
      />

      {!isLoading && <SearchContentList content={content} />}
      {isLoading && <SkeletonLoadingContent />}

      <PaginationMobile
        onClickNextPage={clickNextPageHandler}
        onClickPrevPage={clickPrevPageHandler}
        currPage={currentPage}
      />
    </div>
  );
};

export default Search;
