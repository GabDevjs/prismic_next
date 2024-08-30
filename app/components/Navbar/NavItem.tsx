import clsx from "clsx"

export const NavItem = ({ children, isAsPath } : { children: React.ReactNode[] | React.ReactNode, isAsPath: boolean  } ) => {
  return (
    <li className={clsx("mt-2 border-b-2  px-4 pb-1 pt-2  text-left font-bold tracking-wider transition-colors duration-200", isAsPath ? "border-p-gold" : "border-transparent hover:border-p-gold")}>
      {children}
    </li>
  );
};
