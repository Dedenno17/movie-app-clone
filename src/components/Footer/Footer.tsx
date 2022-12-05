import React, { ReactNode } from 'react';
import { AiFillCaretUp } from 'react-icons/ai';

interface list {
  name: string;
  lists: string[];
}

const footerList: list[] = [
  {
    name: 'Original Series',
    lists: ['Apple TV+', 'Amazon', 'Disney+', 'HBO', 'Netflix', 'The CW'],
  },
  {
    name: 'Category',
    lists: [
      'Action',
      'Adventure',
      'Anime',
      'Animation',
      'Comedy',
      'Drama',
      'Horor',
      'Sci-fi',
    ],
  },
  {
    name: 'Felix',
    lists: ['Movies', 'TV Series', 'Genre'],
  },
];

const copyRightList: string[] = [
  'Bantuan',
  'DMCA',
  'Privacy',
  'Discord',
  'Telegram',
  'Instagram',
];

const Footer = () => {
  const scrollToTopHandler = (): void => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="max-w-[1440px] mx-auto p-8 border-y-[1px] border-y-secondaryGrey hidden lg:block">
      <div className="w-full flex justify-between py-5">
        <div className="w-[40%] pr-4">
          <h1 className="text-6xl text-primaryRed font-bold mb-4">FELIX</h1>
          <p className="text-primaryGrey text-sm leading-relaxed">
            FELIX merupakan situs penyedia layanan streaming film dan serial tv
            gratis. Sama seperti penyedia film dan serial tv lainnya seperti
            Netflix, Disney+, HBO, Apple TV+, Amazon Prime Video, dan lainnya.
            FELIX berusaha untuk menyediakan layanan streaming gratis untuk
            selamanya kepada para rakyat Indonesia yang belum mampu berlangganan
            layanan premium streaming seperti yang disebut diatas. Perlu
            diperhatikan FELIX tidak menyediakan film maupun serial tv dari
            negara Indonesia.
          </p>
        </div>
        <div className="flex justify-between items-start w-[50%]">
          {footerList.map(
            (item: list, i: number): ReactNode => (
              <div className="w-[30%]" key={Math.random() + i + ''}>
                <h2 className="text-md text-primaryGrey mb-2 font-semibold">
                  {item.name}
                </h2>
                <ul>
                  {item.lists.map(
                    (li: string, i: number): ReactNode => (
                      <li
                        key={Math.random() + i + ''}
                        className="text-primaryRed text-sm mb-2"
                      >
                        {li}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
      <div className="w-full border-t-[1px] border-t-secondaryGrey pt-5 flex justify-between items-stretch">
        <span className="text-primaryGrey text-sm flex items-center justify-center">
          Copyright &copy; {new Date().getFullYear()} by Felix. All Rights
          Reserved.
        </span>
        <ul className="w-[45%] flex justify-between">
          {copyRightList.map(
            (item: string, i: number): ReactNode => (
              <li
                key={Math.random() + i + ''}
                className={`text-primaryGrey text-sm flex-grow flex items-center justify-center ${
                  i === 0
                    ? 'border-l-none'
                    : 'border-l-[1px] border-l-secondaryGrey'
                }`}
              >
                {item}
              </li>
            )
          )}
          <li
            className="flex justify-center items-center bg-secondaryGrey rounded-lg px-3 py-2 cursor-pointer"
            onClick={scrollToTopHandler}
          >
            <AiFillCaretUp className="text-md text-primaryGrey" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
