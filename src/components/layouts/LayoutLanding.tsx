import React, { ReactNode, useEffect } from "react";
import Cursor from "@/src/components/shared/Cursor/Cursor";
import GradientSpheres from "@components/shared/GradientSpheres/GradientSpheres";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-landing">
      <GradientSpheres />
      <div className="content-wrapper">{children}</div>
      <Cursor />
    </div>
  );
};

export default Layout;
