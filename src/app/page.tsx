import { clsx } from "clsx";

export default function HomePage() {
  return (
    <h1 className={clsx(
      'text-xl', 'font-bold', 'bg-blue-900'
    )}>
      Welcome to the Home Page
    </h1>
  );
}
