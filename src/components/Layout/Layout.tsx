import React, { ReactNode, useState } from 'react';
import { useScreenResponsive } from '../../hooks/useScreenResponsive';
import Header from '../Header/Header';
import NavMobile from '../Header/NavMobile';

interface BaseLayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<BaseLayoutProps> = (props) => {
  const { elementRef } = useScreenResponsive();

  const [isShowNavMobile, setIsShowNavMobile] = useState<boolean>(false);

  const showNavMobileHandler = (): void => {
    setIsShowNavMobile((prevState) => !prevState);
  };

  return (
    <div className="w-full min-h-screen bg-primaryBlack" ref={elementRef}>
      <Header onShow={showNavMobileHandler} />
      <main>{props.children}</main>
      <footer className="w-full p-10 text-center text-slate-200">
        All Right Reserved
      </footer>
      <NavMobile isShow={isShowNavMobile} />
    </div>
  );
};

export default Layout;
