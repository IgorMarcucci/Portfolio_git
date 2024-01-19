import { useNavigate } from "react-router-dom";
import ConstantsValues from "../../Constants";
import { Fragment, useEffect } from "react";
import { AboutInterface } from "../../interfaces/about_interface";
import { useDispatch } from "react-redux";
import { setLang } from "../../redux/lang_slice";
import { setName } from "../../redux/name_slice";
import { LangService } from "../../services/lang_service";

function About() {
    const langService: LangService = new LangService();
    const constants: ConstantsValues = new ConstantsValues();
    const navigate = useNavigate();
    

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const navigateRoute = (route: string) => {
        window.scrollTo(0, 0);
        navigate(route);
    };
    
    const sendDataToService = (value: AboutInterface) => {
        switch (value.title) {
            case 'Flutter':
                langService.setData("Flutter", constants.flutterSkills);
                break;
            case 'React.js':
                langService.setData("React.js", constants.reactSkills);
                break;
            case 'Angular':
                langService.setData("Angular", constants.angularSkills);
                break;
            default:
                break;
        }
        navigateRoute(value.route);
    }

    return (
        <div id="about" className="m-10">
            <div className="mt-5 flex flex-col justify-evenly">
            {
                constants.aboutList.map((value, index) => (
                    <Fragment key={index} >
                        <p className="text-3xl sm:text-3xl text-white mt-5 mb-5 font-['Poppins'] flex justify-center items-center text-center">
                            {value.title}
                        </p>
                        <p className="pl-5 pr-5 text-md sm:text-xl text-white mt-5 mb-5 font-['Poppins'] flex justify-center items-center text-justify">
                            {value.description}
                        </p>
                        <button 
                            onClick={() => {
                                sendDataToService(value); 
                                
                            }} className="pl-5 pr-5 text-md sm:text-xl text-[#6392ff] hover:text-[#9CBAFF] mt-2 mb-10 font-['Poppins'] flex justify-center items-center text-center">
                            Ver mais...
                        </button>
                    </Fragment>
                ))
            }
        </div>
        </div>
        
    );
}

export default About;