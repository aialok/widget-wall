import Announcements from "./widgets/Announcements/Announcements";
import SearchBar from "./widgets/ChatGptSearch/SearchBar";
import GoogleSlide from "./widgets/GoogleSlide/GoogleSlide";
import NotionPreview from "./widgets/Notion/NotionPreview";
import Pomodoro from "./widgets/Pomodoro/Pomodoro";
import PomodoroPreview from "./widgets/Pomodoro/PomodoroPreview";
import SpotifyWidget from "./widgets/Spotify/SpotifyWidget";

const Block = ({ keyProp }: { keyProp: string }) => {


  let content;

  switch (keyProp) {
    case "spotify":
      content = <SpotifyWidget />;
      break;
    case "pomodoro":
      content = <Pomodoro />;
      break;
    case "googleSlide":
      content = <GoogleSlide />;
      break;
    case "announcements":
      content = <Announcements />;
      break;
    case "notion":
      content = <NotionPreview />;
      break;
      case "searchBar":
        content = <SearchBar />;
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
