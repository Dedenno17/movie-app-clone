import React, { ReactNode } from 'react';
import { FaPinterestP } from 'react-icons/fa';
import { ImFacebook, ImTwitter, ImWhatsapp } from 'react-icons/im';

interface SocMed {
  color: string;
  icon: ReactNode;
  id: number;
}

const SocMedList: SocMed[] = [
  {
    color: '#4861A3',
    icon: <ImFacebook />,
    id: Math.random() + 1,
  },
  {
    color: '#03A9F4',
    icon: <ImTwitter />,
    id: Math.random() + 1,
  },
  {
    color: '#CA212A',
    icon: <FaPinterestP />,
    id: Math.random() + 1,
  },
  {
    color: '#51CE60',
    icon: <ImWhatsapp />,
    id: Math.random() + 1,
  },
];

const SocialMedia: React.FC = () => {
  return (
    <div className="p-3 flex border-y-4 border-y-secondaryGrey">
      <ul className="w-[60%] m-auto flex items-center justify-between">
        {SocMedList.map((item) => (
          <li
            className="px-4 py-2 rounded-md text-slate-200 cursor-pointer"
            key={item.id}
            style={{ backgroundColor: `${item.color}` }}
          >
            {item.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(SocialMedia);
