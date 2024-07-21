import { Input } from "@/components/ui/input";
import chatgpt from "../../assets/images/chatgpt.svg";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { SlPicture } from "react-icons/sl";
import { PiHeadphonesBold } from "react-icons/pi";
import { TiMicrophoneOutline } from "react-icons/ti";

const SearchBar = () => {
  return (
    <div className="bg-black w-full h-full flex flex-col justify-center items-center px-4 rounded-2xl">
      <div className="w-full bg-white rounded-3xl flex px-2">
        <img src={chatgpt} className="w-8 " alt="" />
        <Input
          className=" bg-transparent w-full border-none flex justify-center items-center "
          type="email"
          placeholder="Message ChatGPT..."
        />
      </div>

      <div className="flex justify-evenly w-full my-2">
        <div className="rounded-lg p-2 bg-slate-900 ">
          <MdOutlinePhotoCamera className="text-white" size={29} />
        </div>

        <div className="rounded-lg p-2 bg-slate-900 ">
          <SlPicture className="text-white" size={28} />
        </div>

        <div className="rounded-lg p-2 bg-slate-900 ">
          <PiHeadphonesBold className="text-white" size={29} />
        </div>

        <div className="rounded-lg p-2 bg-slate-900 ">
          <TiMicrophoneOutline className="text-white" size={29} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
