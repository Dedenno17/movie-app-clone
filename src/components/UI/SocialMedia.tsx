import React, { ReactNode } from 'react';
import { FaPinterestP } from 'react-icons/fa';
import { ImFacebook, ImTwitter, ImWhatsapp } from 'react-icons/im';

interface SocMed {
  color: string;
  icon: ReactNode;
  id: number;
  name: string;
}

const SocMedList: SocMed[] = [
  {
    color: '#4861A3',
    icon: <ImFacebook />,
    id: Math.random() + 1,
    name: 'Facebook',
  },
  {
    color: '#03A9F4',
    icon: <ImTwitter />,
    id: Math.random() + 1,
    name: 'Twitter',
  },
  {
    color: '#CA212A',
    icon: <FaPinterestP />,
    id: Math.random() + 1,
    name: 'Pinterest',
  },
  {
    color: '#51CE60',
    icon: <ImWhatsapp />,
    id: Math.random() + 1,
    name: 'Whatsapp',
  },
];

const SocialMedia: React.FC = () => {
  return (
    <div className="p-3 flex border-y-4 border-y-secondaryGrey">
      <ul className="w-[60%] m-auto flex items-center justify-between md:m-0 lg:justify-start">
        {SocMedList.map((item) => (
          <li
            className="px-4 py-2 rounded-md text-slate-200 cursor-pointer flex items-center md:rounded-sm md:mr-2"
            key={item.id}
            style={{ backgroundColor: `${item.color}` }}
          >
            <span>{item.icon}</span>
            <span className="hidden ml-1 md:inline">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(SocialMedia);
