import ConstantsValues from './../../Constants';
import './Projects.css';

function Projects() {
    const constant: ConstantsValues = new ConstantsValues();
    return (
        <div id="projects" className="m-10">
            <p className="font-['Poppins'] text-3xl sm:text-3xl text-white m-10 font-Poppins flex justify-center items-center">
                Projetos
            </p>
            <div className="m-10 cardContainer">
                {constant.projectsList.map((value, index) => (
                    <div key={index} className="w-[190px] h-[280px] sm:h-[320px] sm:w-[230px] m-[20px] flex flex-col justify-evenly items-center bg-[#171717] rounded-lg shadow-md transform transition-all duration-300 hover:scale-110 overflow-hidden clipPathCard">
                        <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] flex flex-col justify-evenly items-center font-['Poppins']">
                            <h3 className=" text-center text-white text-xs sm:text-lg font-semibold">{value.name}</h3>
                            <p className="mt-[30px] text-center text-gray-300 text-xs sm:text-sm">{value.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
