import SpotifyWidget from "./widgets/Spotify/SpotifyWidget";

const Block = ({ keyProp }: { keyProp: string }) => {
    return (
      <div className="h-full w-full flex flex-col justify-center items-center  bg-white text-[var(--black-1)] rounded-2xl text-3xl uppercase">
        {keyProp == "spotify" ?<SpotifyWidget/> : keyProp}
        
      </div>
    );
  };

  export default Block;