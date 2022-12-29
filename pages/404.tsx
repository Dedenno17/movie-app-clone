import { NextPage } from 'next';
import Link from 'next/link';
import { GiClapperboard } from 'react-icons/gi';

const NotFoundPage: NextPage = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] min-h-[100vh] px-8 pt-8 mx-auto items-center">
        <div className="w-full flex justify-center items-center mb-8">
          <GiClapperboard className="text-[20rem] text-primaryRed m-auto" />
        </div>
        <div className="max-w-[600px] mx-auto h-1/2">
          <h1 className="text-4xl mb-3 text-center text-slate-200 font-bold">
            {`Something's wrong here.`}
          </h1>
          <p className="text-center text-sm text-slate-200 font-semibold">
            {`This is a 404 error, which means you've clicked on a bad link or
            entered a invalid url. Maybe the content what you are looking for
            can't be found or there is no data of the content yet`}
          </p>
          <Link href="/">
            <span className="flex w-full justify-center items-center mt-4 text-2xl font-bold text-primaryGrey hover:text-primaryRed">
              BACK TO HOME
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
