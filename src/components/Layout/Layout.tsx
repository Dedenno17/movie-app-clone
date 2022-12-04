import React, {
  ReactNode,
  useEffect,
  useRef,
  useCallback,
  useState,
} from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { appScreenWidthActions } from '../../slices/appScreenWidth';
import Header from '../Header/Header';
import NavMobile from '../Header/NavMobile';

interface BaseLayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<BaseLayoutProps> = (props) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const screenWidthHandler = useCallback(() => {
    dispatch(
      appScreenWidthActions.setScreenWidth(headerRef.current?.offsetWidth)
    );
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('resize', screenWidthHandler);

    return () => {
      window.removeEventListener('resize', screenWidthHandler, true);
    };
  }, [screenWidthHandler]);

  useEffect(() => {
    dispatch(
      appScreenWidthActions.setScreenWidth(headerRef.current?.offsetWidth)
    );
  }, [dispatch]);

  const [isShowNavMobile, setIsShowNavMobile] = useState<boolean>(false);

  const showNavMobileHandler = (): void => {
    setIsShowNavMobile((prevState) => !prevState);
  };

  return (
    <div className="w-full min-h-screen bg-primaryBlack" ref={headerRef}>
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
