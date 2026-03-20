import type { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen max-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30 overflow-hidden flex flex-col">
      {children}
    </div>
  );
};
