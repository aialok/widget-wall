import { useState } from "react";
import { FaRotate } from "react-icons/fa6";
import Notion from "./Notion";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`relative w-full h-full card ${isFlipped ? "cardFlip" : ""}`}>
      {/* Front Side */}
      <div
        // onClick={handleFlip}
        className={`relative  w-full h-full front  text-white text-2xl rounded-xl ${
          isFlipped ? "hidden" : ""
        }`}
      >
        <img
          src="https://creatorspace.imgix.net/users/cle5pruit003glt0ymyt6f3v1/e0F1N8BdKn9GfEfr-gumroad-0.png?w=750&h=750"
          className="h-full w-full  rounded-2xl"
          alt=""
        />
        <FaRotate
          onClick={() => setIsFlipped(true)}
          className="cursor-pointer absolute top-2 right-2"
        />
      </div>

      {/* Back Side */}
      <div
        className={`relative w-full back h-full text-white text-2xl rounded-xl ${
          isFlipped ? "" : "hidden"
        }`}
      >
        <FaRotate
          onClick={() => setIsFlipped(false)}
          className="cursor-pointer absolute top-2 right-2"
        />
        <Notion />
      </div>
    </div>
  );
};

export default FlipCard;
