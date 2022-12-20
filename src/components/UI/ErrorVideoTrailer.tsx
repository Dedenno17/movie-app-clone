import React from 'react';
import { TbMovieOff } from 'react-icons/tb';

const ErrorVideoTrailer: React.FC<{ screenWidth: number | undefined }> = (
  props
) => {
  return (
    <div
      className="bg-black flex flex-col justify-center items-center"
      style={{
        width:
          props.screenWidth && props.screenWidth < 1080
            ? props.screenWidth + 'px'
            : '1080px',
        height: props.screenWidth
          ? props.screenWidth < 480
            ? props.screenWidth - 185 + 'px'
            : props.screenWidth > 480 && props.screenWidth < 768
            ? 480 + 'px'
            : 580 + 'px'
          : 0 + 'px',
      }}
    >
      <TbMovieOff className="text-primaryRed text-[110px] font-light mb-4" />
      <span className="text-4xl text-primaryRed font-light text-center">
        {"Can't play the Video!"}
      </span>
    </div>
  );
};

export default React.memo(ErrorVideoTrailer);
