import clsx from "clsx";

export function Container({ className, children }: { className?: string, children: React.ReactNode[] | React.ReactNode }) {
  return (
    <div
      className={clsx(
        "mx-auto max-w-7xl px-2 text-gray-900  sm:px-6 xl:max-w-[85rem] 2xl:max-w-[90rem] ",
        className
      )}
    >
      {children}
    </div>
  );
}
