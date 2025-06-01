import { type IconType } from "react-icons"
import { BsNintendoSwitch } from "react-icons/bs"
import { FaApple, FaLinux, FaNeos, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa"
import { FaWebAwesome } from "react-icons/fa6"
import { IoLogoAndroid } from "react-icons/io"
import { MdPhoneIphone } from "react-icons/md"
import { SiAtari, SiCommodore, SiD3Dotjs, SiSega, } from "react-icons/si"


export default function PlatformMapping({name}: {name: string}){
  const mapping: {[key: string]: IconType} = {
    "PC": FaWindows,
    "PlayStation": FaPlaystation,
    "Xbox": FaXbox,
    "Apple Macintosh": FaApple,
    "Nintendo": BsNintendoSwitch,
    "Linux": FaLinux,
    "Android": IoLogoAndroid,
    "iOS": MdPhoneIphone,
    "Web": FaWebAwesome,
    "Atari": SiAtari,
    "SEGA": SiSega,
    "3DO": SiD3Dotjs,
    "Neo Geo": FaNeos,
    "Commodore / Amiga": SiCommodore,
  }
  const IconComponent = mapping[name];
  
  return IconComponent && <IconComponent size={15}/>;
}