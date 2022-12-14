import React from 'react';

const ButtonCategory: React.FC<{
  onChange: (cat: string) => void;
  category: string;
}> = (props) => {
  return (
    <div className="p-3 flex justify-between items-center border-y-4 border-y-secondaryGrey">
      <button
        onClick={() => props.onChange('info')}
        type="button"
        className={`w-[46%] rounded-md px-2 py-1 text-slate-200 text-md ${
          props.category === 'info' ? 'bg-primaryRed' : 'bg-ternaryGrey'
        }`}
      >
        Info
      </button>
      <button
        onClick={() => props.onChange('cast')}
        type="button"
        className={`w-[46%] rounded-md px-2 py-1 text-slate-200 text-md ${
          props.category === 'cast' ? 'bg-primaryRed' : 'bg-ternaryGrey'
        }`}
      >
        Cast
      </button>
    </div>
  );
};

export default React.memo(ButtonCategory);
