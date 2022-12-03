import React, { ReactNode } from 'react';
import Header from '../Header/Header';
import NavMobile from '../Header/NavMobile';

interface BaseLayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<BaseLayoutProps> = (props) => {
  return (
    <div className="w-full min-h-screen bg-primaryBlack">
      <Header />
      <main>{props.children}</main>
      <footer className="w-full p-10 text-center text-slate-200">
        All Right Reserved
      </footer>
      <NavMobile />
    </div>
  );
};

export default Layout;
