import ConstantsValues from "../../Constants";
import { Fragment, useEffect } from "react";
import { AboutInterface } from "../../interfaces/about_interface";
import { LangService } from "../../services/lang_service";
import { useSelector } from "react-redux";
import NavigateService from "../../services/navigate_service";

function About() {
    const langService: LangService = new LangService();
    const navigateService: NavigateService = new NavigateService();
    const constants: ConstantsValues = new ConstantsValues();
    const themeData = useSelector((state: any) => state.theme);

    const getFontTheme = () => {
        if (themeData['theme'] === 'dark') {
            return 'text-[#6392ff] hover:text-[#9CBAFF] '
        } else {
            return 'text-white bg-[#ADADAD52] shadow-md shadow-[#00000011] w-[130px] h-[42px] rounded-full hover:scale-105'
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const sendDataToService = (value: AboutInterface) => {
        switch (value.title) {
            case 'Sobre mim':
                navigateService.navigateRoute('/career');
                break;
            case 'Flutter':
                langService.setData("Flutter", value.route);
                break;
            case 'React.js':
                langService.setData("React.js", value.route);
                break;
            case 'Angular':
                langService.setData("Angular", value.route);
                break;
            case 'ASP.NET Core':
                langService.setData("ASP.NET Core", value.route);
                break;
            case 'OracleSQL e PostgreSQL':
                langService.setData("OracleSQL e PostgreSQL", value.route);
                break;
            default:
                break;
        }
    }

    return (
        <div id="about" className="m-10">
            <div className="mt-5 flex flex-col justify-evenly items-center">
            {
                constants.aboutList.map((value, index) => (
                    <Fragment key={index} >
                        <p className={`text-3xl sm:text-3xl text-white mt-5 mb-5 font-['Poppins'] flex justify-center items-center text-center`}>
                            {value.title}
                        </p>
                        <p className={`pl-5 pr-5 text-md sm:text-xl text-white mt-5 mb-5 font-['Poppins'] flex justify-center items-center text-justify`}>
                            {value.description}
                        </p>
                        <button 
                            onClick={() => {
                                sendDataToService(value); 
                                
                            }} className={`text-md sm:text-md ${getFontTheme()} mt-2 mb-10 font-['Poppins'] flex flex-row justify-center items-center text-center`}>
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