import { useSelector } from 'react-redux';
import ConstantsValues from './../../Constants';
import './Projects.css';

function Projects() {
    const constant: ConstantsValues = new ConstantsValues();
    const themeData = useSelector((state: any) => state.theme);

    const getCardColor = () => {
        if (themeData['theme'] === 'dark') {
            return 'bg-[#171717]'
        } else {
            return 'bg-[#ADADAD34]'
        }
    }

    function openLink(link: string) {
        window.location.href = link;
    }

    return (
        <div id="projects" className="m-10">
            <p className={`font-['Poppins'] text-4xl sm:text-3xl text-white m-10 flex justify-center items-center`}>
                Projetos
            </p>
            <div className="m-10 cardContainer">
                {constant.projectsList.map((value, index) => value.link === "" ?
                    <div key={index} className={`w-[190px] h-[280px] sm:h-[320px] sm:w-[230px] m-[20px] flex flex-col justify-evenly items-center ${getCardColor()} transform transition-all duration-300 hover:scale-105 overflow-hidden rounded-3xl shadow-md`}>
                        <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] flex flex-col justify-evenly items-center font-['Poppins']">
                            <h3 className=" text-center text-white text-xs sm:text-lg font-semibold">{value.name}</h3>
                            <p className="mt-[30px] text-center text-white text-xs sm:text-sm">{value.description}</p>
                        </div>
                    </div> :
                    <button onClick={()=> {openLink(value.link)}} key={index} className={`w-[190px] h-[280px] sm:h-[320px] sm:w-[230px] m-[20px] flex flex-col justify-evenly items-center ${getCardColor()} transform transition-all duration-300 hover:scale-105 overflow-hidden rounded-3xl shadow-md`}>
                        <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] flex flex-col justify-evenly items-center font-['Poppins']">
                            <h3 className=" text-center text-white text-xs sm:text-lg font-semibold">{value.name}</h3>
                            <p className="mt-[30px] text-center text-white text-xs sm:text-sm">{value.description}</p>
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Projects;
