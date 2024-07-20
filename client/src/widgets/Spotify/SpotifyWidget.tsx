import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function SpotifyWidget() {
  const [playlist, setPlaylist] = useState<string>("https://open.spotify.com/playlist/2bcSVCNr1AtyVrB3YP9dLl");
  const [inputValue, setInputValue] = useState<string>("");

  const embeddedPlaylistUrl = playlist.replace("playlist", "embed/playlist");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue) {
      setPlaylist(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <iframe
        className="w-full h-[352px] rounded-xl shadow-lg"
        src={embeddedPlaylistUrl}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <div className="flex space-x-4">
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter Spotify playlist URL"
          className="flex-grow"
        />
        <Button onClick={handleSubmit} className="bg-spotify-green hover:bg-spotify-green-light">
          Update Playlist
        </Button>
      </div>
    </div>
  );
}

export default SpotifyWidget;