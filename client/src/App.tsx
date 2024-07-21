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

      <div className="iframely-embed h-20 w-20">
        <div className="iframely-responsive " >
          <a
            href="https://capable-market-7af.notion.site/5005d44ec96b42a6af762dba62d3c26a"
            data-iframely-url="//iframely.net/Kd0oPeF"
          ></a>
        </div>
      </div>
      <script async src="//iframely.net/embed.js"></script>

      <RetroGrid />
    </main>
  );
}
