import { useState } from "react";
import pomodoro from "../../assets/images/pomodoro.svg";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative w-full h-full transition-transform duration-500 ${
        isFlipped ? "flip-animation" : "flip-back-animation"
      }`}
      onClick={handleFlip}
    >
      {/* Front Side */}
      <div
        className={`absolute w-full h-full  text-white text-2xl rounded-xl backface-hidden ${
          isFlipped ? "hidden" : ""
        }`}
      >
        <img src={pomodoro} className="h-full w-full rounded-2xl" alt="" />
      </div>

      {/* Back Side */}
      <div
        className={`absolute w-full h-full bg-red-500  text-white text-2xl rounded-xl backface-hidden ${
          isFlipped ? "" : "hidden"
        }`}
      >
        Back
      </div>
    </div>
  );
};

export default FlipCard;
