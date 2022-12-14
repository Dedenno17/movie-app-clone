import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper';
import detailMovieSimilarInterface from '../../../models/detailMovieSimilar';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useAppSelector } from '../../../store/hooks';

const SimilarMovie: React.FC<{ data: detailMovieSimilarInterface }> = ({
  data,
}) => {
  const screenWidth = useAppSelector((state) => state.appScreenWidth.value);

  return (
    <div className="w-full p-8">
      <span className="w-full py-3 text-lg text-slate-200">Film Terkait</span>
      <Swiper
        className="w-full mt-8"
        spaceBetween={20}
        slidesPerView={
          screenWidth && screenWidth > 768
            ? 6
            : screenWidth && screenWidth > 485 && screenWidth < 768
            ? 5
            : screenWidth && screenWidth < 485
            ? 3
            : 0
        }
        modules={[Autoplay, A11y]}
        autoplay={{ disableOnInteraction: false }}
        loop
        speed={700}
      >
        {data.results.map((item) => (
          <SwiperSlide key={item.id + ''}>
            <div className="cursor-pointer relative h-[180px]">
              <Image
                src={`https://www.themoviedb.org/t/p/original${item.poster_path}`}
                alt={item.title}
                fill
                sizes="true"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default React.memo(SimilarMovie);
