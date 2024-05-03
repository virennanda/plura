import Navigation from "@/components/site/navigation";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-full">
      <Navigation />
      {children}
    </main>
  );
};

export default Layout;
