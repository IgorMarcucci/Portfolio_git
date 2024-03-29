import { Link } from "react-scroll";
import { MdPerson } from "react-icons/md"
import { MdPermPhoneMsg } from "react-icons/md"
import { FaInfo } from "react-icons/fa"
import { RiGitRepositoryFill } from "react-icons/ri"
import { useSelector } from "react-redux";

function NavBar() {
    const themeData = useSelector((state: any) => state.theme);

    const getTheme = () => {
        if (themeData['theme'] === 'dark') {
            return 'bg-black/80 shadow-md '
        } else {
            return 'bg-[#929292B4] shadow-md my-2'
        }
    }

    const getFontTheme = () => {
        if (themeData['theme'] === 'dark') {
            return 'hover:text-[#7B7B7B] active:text-[#525252]'
        } else {
            return ' hover:text-[#134CB6] active:text-[#134CB6] hover:scale-105'
        }
    }

    return (
        <nav className="fixed bottom-4 lg:bottom-5 w-full overflow-hidden z-50">
            <div className="container mx-auto">
                <div className={`w-full ${getTheme()}  h-[80px] backdrop-blur-2x1 rounded-full max-w-[380px] mx-auto px-6 flex justify-between items-center text-2x1 `}>
                    <Link smooth={true} className={`cursor-pointer flex items-center justify-center text-white ${getFontTheme()}`} to="profile">
                        <MdPerson className="w-[30px] h-[30px]" />
                    </Link>
                    <Link smooth={true} className={`cursor-pointer flex items-center justify-center text-white ${getFontTheme()}`} to="about">
                        <FaInfo className="w-[25px] h-[25px]" />
                    </Link>
                    <Link smooth={true} className={`cursor-pointer flex items-center justify-center text-white ${getFontTheme()}`} to="projects">
                        <RiGitRepositoryFill className="w-[30px] h-[30px]" />
                    </Link>
                    <Link smooth={true} className={`cursor-pointer flex items-center justify-center text-white ${getFontTheme()}`} to="contact">
                        <MdPermPhoneMsg className="w-[30px] h-[30px]" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;