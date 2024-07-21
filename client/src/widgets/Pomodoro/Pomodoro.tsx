import { useState } from "react";
import pomodoro from "../../assets/images/pomodoro.svg";
import Test from "@/Test";
import { FaRotate } from "react-icons/fa6";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative w-full h-full transition-transform duration-500 ${
        isFlipped ? "flip-animation" : "flip-back-animation"
      }`}
    >
      {/* Front Side */}
      <div
        // onClick={handleFlip}
        className={`relative  w-full h-full  text-white text-2xl rounded-xl backface-hidden ${
          isFlipped ? "hidden" : ""
        }`}
      >
        <img src={pomodoro} className="h-full w-full rounded-2xl" alt="" />
        <FaRotate
          onClick={() => setIsFlipped(true)}
          className="cursor-pointer absolute top-2 right-2"
        />
      </div>

      {/* Back Side */}
      <div
        className={`absolute w-full h-full text-white text-2xl rounded-xl backface-hidden ${
          isFlipped ? "" : "hidden"
        }`}
      >
        <FaRotate
          onClick={() => setIsFlipped(false)}
          className="cursor-pointer absolute top-2 right-2"
        />
        <Test />
      </div>
    </div>
  );
};

export default FlipCard;
