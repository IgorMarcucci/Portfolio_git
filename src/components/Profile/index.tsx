import Typewriter from "typewriter-effect";
import { useState, useEffect } from 'react';
import ConstantsValues from "../../Constants";
import "./Profile.css";

function Profile() {
    const constants: ConstantsValues = new ConstantsValues();
    const [flexDirection, setFlexDirection] = useState('flex-row');

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 800px)');

        function handleScreenChange(event: any) {
            if (event.matches) {
                setFlexDirection('flex-col');
            } else {
                setFlexDirection('flex-row');
            }
        }

        mediaQuery.addEventListener('change', handleScreenChange);

        handleScreenChange(mediaQuery);

        return () => {
            mediaQuery.removeEventListener('change', handleScreenChange);
        };
    }, []);

    return (
        <div className="mt-10 mb-10 w-[calc(100vw-17px)] items-center flex flex-col justify-evenly">
            <div className="text-center text-white text-3xl sm:text-5xl m-3 flex justify-evenly items-center font-['Poppins']">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Sejam bem vindos")
                            .pauseFor(3000)
                            .deleteAll()
                            .typeString("Engenheiro de Software")
                            .start();
                    }
                    }
                />
            </div>
            <div className={`mt-16 flex ${flexDirection} flex-row justify-center items-center w-[calc(100vw-17px)]`}>
                <div className="flex flex-col justify-evenly items-center min-w-[250px] p-5">
                    {constants.techList.slice(0, Math.ceil(constants.techList.length / 2)).map((value, i) => {
                        return (
                            <div className="heightButton" key={i}>
                                <p className="letter font-['Poppins']">
                                    {value.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <img alt="image_perfil" className="w-[250px] shadow-md rounded-full justify-center p-3 bg-[#101010]" src="logo.jpg" />
                <div className="flex flex-col justify-evenly items-center min-w-[250px] p-5">
                    {constants.techList.slice(Math.ceil(constants.techList.length / 2)).map((value, i) => {
                        return (
                            <div className="heightButton" key={i}>
                                {/* <i className={value.icon}></i> */}
                                <p className="letter font-['Poppins']">
                                    {value.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
}

export default Profile;