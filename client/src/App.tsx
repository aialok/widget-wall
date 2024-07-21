import Profile from "./Profile";
import ReponsiveGrid from "./ReponsiveGrid";
import RetroGrid from "@/components/magicui/retro-grid";
export default function App() {
  return (
    <main className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="flex justify-between font-mont w-full z-10 whitespace-pre-wrap bg-gradient-to-b  bg-clip-text text-7xl font-bold ">
        <Profile />
        <ReponsiveGrid />
      </span>
    

      <RetroGrid />
    </main>
  );
}
