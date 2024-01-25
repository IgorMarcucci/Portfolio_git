import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Switch from "../Switch";
import { useSelector } from "react-redux";

interface headerProps {
    indexHeader: number;
}

function Header(props: headerProps) {
    const navigate = useNavigate();
    const themeData = useSelector((state: any) => state.theme);

    const getTheme = () => {
        if (themeData['theme'] === 'dark') {
            return 'bg-[#171717]'
        } else {
            return 'bg-[#ADADAD52] shadow-md shadow-[#00000011]'
        }
    }

    const getFontTheme = () => {
        if (themeData['theme'] === 'dark') {
            return 'hover:text-[#9a9a9a]'
        } else {
            return ' hover:text-[#134CB6]'
        }
    }

    const redirectToGitHub = (value: string) => {
        return window.location.href = value;
    }

    return (
        <div id="profile" className={`flex flex-row justify-center ${getTheme()} items-center h-[100px] w-[100%]`}>
            {
                props.indexHeader === 1
                    ? <div className="fixed left-0 p-2 md:p-3 cursor-pointer flex items-center" onClick={() => { navigate(-1) }}>
                        <MdArrowBack className={`h-[36px] w-[36px]  md:h-[42px] md:w-[42px] items-center flex justify-evenly text-white ${getFontTheme()}`} />
                    </div>
                    : null
            }
            <div className={` h-[100px] md:w-[85%] w-[70%] flex flex-row justify-between items-center text-lg font-['Poppins']`}>
                <div className="w-1/2 flex flex-row items-center justify-start">
                    <button className={`mr-10 h-[46px] flex flex-row items-center text-white ${getFontTheme()}`} onClick={() => { redirectToGitHub('https://www.linkedin.com/in/igor-marcucci/') }}>
                        <i className="devicon-linkedin-plain"></i>
                        <p className="m-2">
                            Igor Marcucci
                        </p>
                    </button>
                    <button className={`h-[46px] flex flex-row items-center text-white ${getFontTheme()}`} onClick={() => { redirectToGitHub('https://github.com/IgorMarcucci') }}>
                        <i className="devicon-github-original"></i>
                        <p className="m-2">
                            GitHub
                        </p>
                    </button>
                </div>
                <div className="w-1/2 min-w-[100px] flex flex-row items-center justify-end">
                    <Switch />
                </div>
            </div>

        </div>
    );
}

export default Header;