import React, { ReactNode } from 'react';

interface BaseLayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<BaseLayoutProps> = (props) => {
  return (
    <div className="w-full min-h-screen bg-primaryBlack">
      <header className="w-full h-40 p-12 text-slate-200">FELIX</header>
      <main>{props.children}</main>
      <footer className="w-full p-10 text-center text-slate-200">
        All Right Reserved
      </footer>
    </div>
  );
};

export default Layout;
