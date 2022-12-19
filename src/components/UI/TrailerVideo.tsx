import React from 'react';
import detailMovieVideoInterface from '../../models/detailMovieVideo';
import { useAppSelector } from '../../store/hooks';
import ErrorVideoTrailer from './ErrorVideoTrailer';

const TrailerVideo: React.FC<detailMovieVideoInterface> = ({ id, results }) => {
  // filter a trailer video
  const videoTrailer = results.filter(
    (vid) => vid.type === 'Trailer' && vid.name.includes('Official')
  )[0];

  // get screenWidth value
  const screenWidth = useAppSelector((state) => state.appScreenWidth.value);

  return (
    <div className="w-full flex py-8 border-b-4 border-b-secondaryGrey">
      <div className="max-w-[1080px] m-auto">
        {videoTrailer && videoTrailer.key && (
          <iframe
            width={screenWidth ? (screenWidth < 1080 ? screenWidth : 1080) : 0}
            height={
              screenWidth
                ? screenWidth < 480
                  ? screenWidth - 185
                  : screenWidth > 480 && screenWidth < 768
                  ? 480
                  : 580
                : 0
            }
            src={`https://www.youtube.com/embed/${videoTrailer.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        {!videoTrailer && <ErrorVideoTrailer screenWidth={screenWidth} />}
      </div>
    </div>
  );
};

export default React.memo(TrailerVideo);
