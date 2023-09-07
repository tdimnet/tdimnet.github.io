import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <ul className="grid grid-cols-1 text-center md:text-left md:grid-cols-2 lg:grid-cols-3 gap-y-5">
      {children}
    </ul>
  );
}

export default Layout;
