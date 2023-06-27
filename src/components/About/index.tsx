import { useNavigate } from "react-router-dom";
import ConstantsValues from "../../Constants";
import { Fragment } from "react";

function About(){
    const navigate = useNavigate();
    return(
        <div className="m-10">
            {/* <p className="text-3xl sm:text-3xl text-white m-5 font-['Poppins'] flex justify-center items-center text-justify">
                Sobre mim
            </p>
            <p className="pl-5 pr-5 text-md sm:text-xl text-white mt-5 font-['Poppins'] flex justify-center items-center text-justify">
                
            </p>
            <p className="pl-5 pr-5 text-xs sm:text-base text-[#6392ff] mt-2 mb-10 font-['Poppins'] flex justify-center items-center text-justify">
                Ver mais...
            </p>
            <p className="text-3xl sm:text-3xl text-white m-5 font-['Poppins'] flex justify-center items-center text-justify">
                React.js
            </p>
            <p className="pl-5 pr-5 text-md sm:text-xl text-white mt-5 font-['Poppins'] flex justify-center items-center text-justify">
                Sou um desenvolvedor front-end com experiência em React. Possuo habilidades em responsividade, consumo de API, layouts, Bootstrap, Tailwind e outros recursos do React. Minha abordagem é focada na criação de interfaces interativas e funcionais.
            </p>
            <p className="pl-5 pr-5 text-xs sm:text-base text-[#6392ff] mt-2 mb-10 font-['Poppins'] flex justify-center items-center text-justify">
                Ver mais...
            </p>
            <p className="text-3xl sm:text-3xl text-white m-5 font-['Poppins'] flex justify-center items-center text-justify">
                Flutter
            </p>
            <p className="pl-5 pr-5 text-md sm:text-xl text-white mt-5 font-['Poppins'] flex justify-center items-center text-justify">
                Tenho expertise em desenvolvimento mobile com Flutter. Minhas habilidades incluem gerenciamento de estado, consumo de APIs, tokens, layouts e outros recursos do Flutter. Priorizo o desempenho suave e a responsividade em minhas aplicações.
            </p>
            <p onClick={() => {navigate('/flutter/*')}} className="pl-5 pr-5 text-xs sm:text-base text-[#6392ff] mt-2 font-['Poppins'] flex justify-center items-center text-justify">
                Ver mais...
            </p> */}
            {
                ConstantsValues.aboutList.map((value, index)=>(
                    <Fragment key={index} >
                        <p className="text-3xl sm:text-3xl text-white m-5 font-['Poppins'] flex justify-center items-center text-justify">
                        {value.title}
                        </p>
                        <p className="pl-5 pr-5 text-md sm:text-xl text-white mt-5 font-['Poppins'] flex justify-center items-center text-justify">
                        {value.description} 
                        </p>
                        <p onClick={()=>{navigate(value.route)}} className="pl-5 pr-5 text-xs sm:text-base text-[#6392ff] mt-2 mb-10 font-['Poppins'] flex justify-center items-center text-justify">
                            Ver mais...
                        </p>
                    </Fragment>
                ))
            }
        </div> 
    );
}

export default About;