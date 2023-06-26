import   { Link } from "react-scroll";
import { MdPerson } from "react-icons/md"
import { MdPermPhoneMsg } from "react-icons/md"
import { FaInfo } from "react-icons/fa"
import { RiGitRepositoryFill } from "react-icons/ri"

function NavBar(){
    return(
        <nav className="fixed bottom-4 lg:bottom-5 w-full overflow-hidden z-50">
            <div className="container mx-auto">

                <div className="w-full bg-black/80 shadow-md h-[80px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-6 flex justify-between items-center text-2x1 text-white">
                    <Link smooth={true} className="cursor-pointer flex items-center justify-center" to="profile">
                        <MdPerson className="w-[30px] h-[30px]" />
                    </Link>
                    <Link smooth={true} className="cursor-pointer flex items-center justify-center" to="about">
                        <FaInfo className="w-[25px] h-[25px]"/>
                    </Link>
                    <Link smooth={true} className="cursor-pointer flex items-center justify-center" to="projects">
                        <RiGitRepositoryFill className="w-[30px] h-[30px]"/>
                    </Link>
                    <Link smooth={true} className="cursor-pointer flex items-center justify-center" to="contact">
                        <MdPermPhoneMsg className="w-[30px] h-[30px]"/>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;