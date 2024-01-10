import { useNavigate } from "react-router-dom";
import ConstantsValues from "../../Constants";
import { Fragment, useEffect } from "react";

function About() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      const navigateRoute = (route: any) => {
        window.scrollTo(0, 0);
        navigate(route);
      };

    return (
        <div id="about" className="m-10">
            <div className="mt-5 flex flex-col justify-evenly">
            {
                ConstantsValues.aboutList.map((value, index) => (
                    <Fragment key={index} >
                        <p className="text-3xl sm:text-3xl text-white mt-5 mb-5 font-['Poppins'] flex justify-center items-center text-center">
                            {value.title}
                        </p>
                        <p className="pl-5 pr-5 text-md sm:text-xl text-white mt-5 mb-5 font-['Poppins'] flex justify-center items-center text-justify">
                            {value.description}
                        </p>
                        <p onClick={() => { navigateRoute(value.route) }} className="pl-5 pr-5 text-md sm:text-xl text-[#6392ff] hover:text-[#9CBAFF] mt-2 mb-10 font-['Poppins'] flex justify-center items-center text-center">
                            Ver mais...
                        </p>
                    </Fragment>
                ))
            }
        </div>
        </div>
        
    );
}

export default About;