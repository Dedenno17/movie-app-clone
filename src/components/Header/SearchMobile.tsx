import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useAppDispatch } from '../../store/hooks';
import { setSearchValue } from '../../slices/searchValue';

const SearchMobile: React.FC<{ onShow: () => void }> = (props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // state of search value
  const [searchValue, changeSearchValue] = useState<string>('');

  // function when form submited
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(setSearchValue(searchValue));
    router.push('/search');
    props.onShow();
  };

  return (
    <form
      className="w-full flex justify-between items-center bg-black lg:hidden"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        placeholder="Search ..."
        value={searchValue}
        onChange={(e) => changeSearchValue(e.target.value)}
        className="w-[87%] px-4 py-3 text-2xl bg-transparent placeholder:text-secondaryGrey outline-none border-none text-slate-200"
      />
      <BiSearch className="w-[13%] p-1 text-4xl text-slate-200 bg-transparent" />
    </form>
  );
};

export default React.memo(SearchMobile);
