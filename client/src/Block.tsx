import Test from "./Test";
import Pomodoro from "./widgets/Pomodoro/Pomodoro";
import SpotifyWidget from "./widgets/Spotify/SpotifyWidget";
import GoogleSlide from "./widgets/GoogleSlide/GoogleSlide";

const Block = ({ keyProp }: { keyProp: string }) => {
  let content;

  switch (keyProp) {
    case "spotify":
      content = <SpotifyWidget />;
      break;
    case "pomodoro":
      content = <Pomodoro />;
      break;
    case "test":
      content = <Test />;
      break;
    case "googleSlide":
      content = <GoogleSlide />;
      break;
    case "e":
      content = <div>Block E</div>;
      break;
    case "a":
      content = <div>Block A</div>;
      break;
    default:
      content = <div>Block</div>;
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-white text-[var(--black-1)] rounded-2xl text-3xl uppercase">
      {content}
    </div>
  );
};

export default Block;
