import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return <div className="h-80 md:h-[500px] 2xl:h-[700px] mb-8">{children}</div>;
}

export default Layout;
