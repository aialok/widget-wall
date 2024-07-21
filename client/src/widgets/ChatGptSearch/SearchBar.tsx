import { Input } from "@/components/ui/input";
import chatgpt from "../../assets/images/chatgpt.svg";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { SlPicture } from "react-icons/sl";
import { PiHeadphonesBold } from "react-icons/pi";
import { TiMicrophoneOutline } from "react-icons/ti";

const SearchBar = () => {
  return (
    <div className="bg-[#1c1b20] w-full h-full flex flex-col justify-center items-center px-4 rounded-2xl">
      <div className="w-full bg-[#343338] rounded-3xl flex px-2">
        <img src={chatgpt} className="w-8 " alt="" />
        <Input
          className=" bg-transparent w-full outline-none focus:outline-none focus:border-none focus:ring-0 border-none flex justify-center items-center "
          type="email"
          placeholder="Message ChatGPT..."
        />
      </div>

      <div className="flex justify-evenly w-full my-3">
        <div className="rounded-xl p-2 bg-[#343338] ">
          <MdOutlinePhotoCamera className="text-gray-200" size={29} />
        </div>

        <div className="rounded-xl p-2 bg-[#343338] ">
          <SlPicture className="text-gray-200" size={28} />
        </div>

        <div className="rounded-xl p-2 bg-[#343338] ">
          <PiHeadphonesBold className="text-gray-200" size={29} />
        </div>

        <div className="rounded-xl p-2 bg-[#343338] ">
          <TiMicrophoneOutline className="text-gray-200" size={29} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
