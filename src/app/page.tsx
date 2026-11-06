import { SpinLoader } from "../components/SpinLoader";

export default async function HomePage() {
  return (
    <div>
      <SpinLoader componentClasses="min-h-40" />
    </div>
  );
}
