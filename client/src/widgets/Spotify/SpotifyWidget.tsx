import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw, Loader2, AlertCircle } from "lucide-react";

function SpotifyWidget() {
  const [playlist, setPlaylist] = useState<string>(
    "https://open.spotify.com/playlist/2bcSVCNr1AtyVrB3YP9dLl"
  );
  const [error, setError] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isValidSpotifyUrl = (url: string) => {
    const regex =
      /^https:\/\/open\.spotify\.com\/(playlist|track|album|artist|episode)\/[a-zA-Z0-9]+(\?si=[a-zA-Z0-9]+)?$/;
    return regex.test(url);
  };

  useEffect(() => {
    if (isValidSpotifyUrl(playlist)) {
      setError("");
    } else {
      setError("Invalid Spotify URL");
    }
  }, [playlist]);

  const getEmbeddedUrl = (url: string) => {
    const types = ["playlist", "track", "album", "artist", "episode"];
    for (const type of types) {
      if (url.includes(type)) {
        return url.replace(type, `embed/${type}`);
      }
    }
    return url;
  };

  const embeddedPlaylistUrl = getEmbeddedUrl(playlist);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue) {
      setIsLoading(true);
      if (isValidSpotifyUrl(inputValue)) {
        setTimeout(() => {
          setPlaylist(inputValue);
          setInputValue("");
          setIsLoading(false);
        }, 1000);
      } else {
        setError("Invalid Spotify URL");
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col p-2 bg-gray-100 rounded-lg shadow-md relative">
      <div className="flex-grow relative w-full mb-4">
        {error ? (
          <div className="absolute inset-0 w-full h-full rounded-lg bg-red-50 border-2 border-red-200 flex flex-col items-center justify-center text-red-500 p-4">
            <AlertCircle className="w-12 h-12 mb-2" />
            <p className="text-lg font-semibold">Oops! Something went wrong</p>
            <p className="text-sm">{error}</p>
          </div>
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg shadow-sm"
            src={embeddedPlaylistUrl}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        )}
      </div>
      <div className="flex flex-col space-y-2 visible">
        <div className="flex space-x-2">
          <Input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter Spotify URL"
            className="flex-grow text-sm"
          />
          <Button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-600 text-white transition-colors duration-200"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
          </Button>
        </div>
        {error && (
          <p className="text-sm text-red-500 bg-red-50 p-2 rounded-md flex items-center">
            <AlertCircle className="w-4 h-4 mr-2" />
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default SpotifyWidget;
