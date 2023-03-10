import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import { allGenres } from '../src/models/genres';

interface GenreProps {
  data: allGenres;
}

// prerendered function
export const getStaticProps: GetStaticProps<GenreProps> = async (): Promise<
  GetStaticPropsResult<GenreProps> | any
> => {
  try {
    const res = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=639d75e6b806c03213815ae9aa5a9376&language=en-US'
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

const Genre: NextPage<GenreProps> = ({ data }) => {
  return (
    <div className="w-full p-5">
      <Head>
        <title>Genre - FELIX</title>
        <meta
          name="Semua genre atau kategori Film-film serta Series-series ternama dunia mulai dari Action, Romance, Comedy, Horror, dan sebagainya."
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <span className="block text-3xl text-slate-200 py-3 border-b-[1px] border-b-ternaryGrey w-full ">
        GENRE
      </span>

      <div className="w-full p-5">
        <h2 className="font-semibold text-2xl text-primaryGrey text-center">
          FELIX PILIHAN GENRE TERLENGKAP
        </h2>
        <ul className="w-full grid grid-cols-1 gap-3 mt-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {data.genres.map(
            (item): ReactNode => (
              <li
                className=" relative w-full p-6 border-[1px] border-primaryRed flex justify-center items-center text-[27px] text-primaryRed font-bold rounded-lg cursor-pointer btn-genre-gradient overflow-hidden hover:btn-genre-shadow"
                key={item.id + ''}
              >
                <span className="absolute left-0 top-0 right-0 h-1/2 bg-slate-200/20 rounded-b-[50%]" />
                {item.name.toUpperCase()}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Genre;
