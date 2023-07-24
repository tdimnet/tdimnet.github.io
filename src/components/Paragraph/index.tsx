import { ReactNode } from "react";

function Component({ css, children }: { css?: string, children: ReactNode }) {
  return (
    <p className={`${css} text-white font-space-grotest font-medium text-base`}>
      {children}
    </p>
  );
}

export default Component;
