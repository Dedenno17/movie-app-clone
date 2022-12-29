import React, { ReactNode, useState } from 'react';
import { useScreenResponsive } from '../../hooks/useScreenResponsive';
import Header from '../Header/Header';
import NavMobile from '../Header/NavMobile';
import Footer from '../Footer/Footer';
import SearchContentList from '../Header/SearchContentList';

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
      <main className="max-w-[1280px] mx-auto min-h-screen relative">
        {props.children}
        <SearchContentList />
      </main>
      <Footer />
      <NavMobile isShow={isShowNavMobile} />
    </div>
  );
};

export default Layout;
