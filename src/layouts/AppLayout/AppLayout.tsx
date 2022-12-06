import React, { ReactNode } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./AppLayout.css";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default AppLayout;
