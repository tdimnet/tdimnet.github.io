import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-5 mb-10">
      {children}
    </ul>
  );
}

export default Layout;
