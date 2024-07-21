import Announcements from "./widgets/Announcements/Announcements";
import GoogleSlide from "./widgets/GoogleSlide/GoogleSlide";
import NotionPreview from "./widgets/Notion/NotionPreview";
import PomodoroPreview from "./widgets/Pomodoro/PomodoroPreview";
import SpotifyWidget from "./widgets/Spotify/SpotifyWidget";
import BookQuoteWidget from "./widgets/ Bookquote/bookquote";

const Block = ({ keyProp }: { keyProp: string }) => {
  const bookData = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    quote:
      "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.",
    readBy: 18000000,
  };

  let content;

  switch (keyProp) {
    case "spotify":
      content = <SpotifyWidget />;
      break;
    case "pomodoro":
      content = <PomodoroPreview />;
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
    case "bookQuote":
      content = <BookQuoteWidget book={bookData} />;
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
