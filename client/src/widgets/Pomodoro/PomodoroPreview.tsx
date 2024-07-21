import { useState } from "react";
import pomodoro from "../../assets/images/pomodoro.svg";
import { FaRotate } from "react-icons/fa6";
import Pomodoro from "./Pomodoro";

const PomodoroPreview = () => {
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
        <img src={pomodoro} className="h-full w-full  rounded-2xl" alt="" />
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
        <Pomodoro />
      </div>
    </div>
  );
};

export default PomodoroPreview;
