import { ReactNode } from "react";

function Component({ children }: { children: ReactNode }) {
  return (
    <p className={`text-white font-space-grotest font-medium text-base`}>
      {children}
    </p>
  );
}

export default Component;
