import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" bg-tonic-dark h-screen transition-all duration-200">
      {children}
    </div>
  );
};
