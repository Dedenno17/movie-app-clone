import React, { ReactNode, useState } from 'react';
import { useScreenResponsive } from '../../hooks/useScreenResponsive';
import Header from '../Header/Header';
import NavMobile from '../Header/NavMobile';
import Footer from '../Footer/Footer';

interface BaseLayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<BaseLayoutProps> = (props) => {
  const { elementRef } = useScreenResponsive('resize');
  useScreenResponsive('scroll');

  const [isShowNavMobile, setIsShowNavMobile] = useState<boolean>(false);

  const showNavMobileHandler = (): void => {
    setIsShowNavMobile((prevState) => !prevState);
  };

  return (
    <div className="w-full min-h-screen bg-primaryBlack" ref={elementRef}>
      <Header onShow={showNavMobileHandler} />
      <main className="max-w-[1440px] mx-auto h-[2000px]">
        {props.children}
      </main>
      <Footer />
      <NavMobile isShow={isShowNavMobile} />
    </div>
  );
};

export default Layout;
