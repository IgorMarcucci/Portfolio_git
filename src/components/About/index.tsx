// import { useNavigate } from "react-router-dom";
import ConstantsValues from "../../Constants";
import { Fragment } from "react";

function About() {
    // const navigate = useNavigate();
    return (
        <div className="m-10 flex flex-col justify-evenly">
            {
                ConstantsValues.aboutList.map((value, index) => (
                    <Fragment key={index} >
                        <p className="text-3xl sm:text-3xl text-white mt-5 mb-5 font-['Poppins'] flex justify-center items-center text-justify">
                            {value.title}
                        </p>
                        <p className="pl-5 pr-5 text-md sm:text-xl text-white mt-5 mb-5 font-['Poppins'] flex justify-center items-center text-justify">
                            {value.description}
                        </p>
                        {/* <p onClick={() => { navigate(value.route) }} className="pl-5 pr-5 text-xs sm:text-base text-[#6392ff] hover:text-[#9CBAFF] mt-2 mb-10 font-['Poppins'] flex justify-center items-center text-justify">
                            Ver mais...
                        </p> */}
                    </Fragment>
                ))
            }
        </div>
    );
}

export default About;