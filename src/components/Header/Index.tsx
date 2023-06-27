import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

interface headerProps {
    indexHeader: number;
}

function Header(props: headerProps){
    const navigate = useNavigate();

    const redirectToGitHub = (value: string) => {
        return window.location.href = value;
    }
    
    return (
        <div id="profile" className="flex flex-row justify-center bg-[#171717] items-center h-[120px] w-[100%]">
            {
                props.indexHeader === 1 
                ?   <div className="fixed left-0 p-2 md:p-3 cursor-pointer flex items-center" onClick={()=> {navigate(-1)}}>
                        <MdArrowBack className="h-[36px] w-[36px]  md:h-[42px] md:w-[42px] items-center flex justify-evenly text-white hover:text-[#9a9a9a]"/>
                    </div> 
                : null
            }
            <div className=" h-[120px] md:w-[85%] w-[70%] bg-[#171717] flex flex-row justify-between items-center text-lg font-['Poppins']">
                
                <div className="h-[46px] flex flex-row items-center text-white hover:text-[#9a9a9a]" onClick={()=>{redirectToGitHub('https://www.linkedin.com/in/igor-marcucci/')}}>
                    <i className="devicon-linkedin-plain"></i>
                    <p className="m-2">
                        Igor Marcucci
                    </p>
                </div>
                <div className="h-[46px] flex flex-row items-center text-white hover:text-[#9a9a9a]" onClick={()=>{redirectToGitHub('https://github.com/IgorMarcucci')}}>
                    <p className="m-2">
                        GitHub
                    </p>
                    <i className="devicon-github-original"></i>
                </div>
            </div>

        </div>
    );
}

export default Header;