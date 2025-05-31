import { type IconType } from "react-icons"
import { BsNintendoSwitch } from "react-icons/bs"
import { FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa"
import { IoLogoAndroid } from "react-icons/io"
import { MdPhoneIphone } from "react-icons/md"

export default function Platform({name}: {name: string}){
  const mapping: {[key: string]: IconType} = {
    "PC": FaWindows,
    "PlayStation": FaPlaystation,
    "Xbox": FaXbox,
    "Apple Macintosh": FaApple,
    "Nintendo": BsNintendoSwitch,
    "Linux": FaLinux,
    "Android": IoLogoAndroid,
    "iOS": MdPhoneIphone,
  }
  const IconComponent = mapping[name];
  
  return IconComponent && <IconComponent size={15}/>;
}