import { clsx } from "clsx";

export function Header() {
  return (
    <h1 className={clsx(
      'text-xl', 'font-bold', 'bg-blue-900'
    )}>
      Welcome to the Home Page
    </h1>
  );
}