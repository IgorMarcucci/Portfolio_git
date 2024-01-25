import Typewriter from "typewriter-effect";
import { useState, useEffect } from 'react';
import ConstantsValues from "../../Constants";
import "./Profile.css";
import { useSelector } from "react-redux";

function Profile() {
    const constants: ConstantsValues = new ConstantsValues();
    const [flexDirection, setFlexDirection] = useState('flex-row');
    const themeData = useSelector((state: any) => state.theme);

    const getBorder = () => {
        if (themeData['theme'] === 'dark') {
            return 'bg-[#101010]'
        } else {
            return 'bg-[#929292B4] shadow-md my-2 shadow-[#00000034]'
        }
    }

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
            <div className="flex flex-col min-w-[300px] items-center justify-evenly">
                <p className="text-center text-white text-6xl sm:text-6xl font-['Open sans'] font-bold my-2">
                    IGOR MARCUCCI
                </p>
                <p className="text-center text-white text-3xl sm:text-3xl font-['Open sans'] font-bold my-2">
                    ENGENHEIRO DE SOFTWARE
                </p>
            </div>
            <div className={`mt-16 flex ${flexDirection} flex-row justify-center items-center w-[calc(100vw-17px)]`}>
                <div className="flex flex-col justify-evenly items-center min-w-[250px] p-5">
                    {constants.techList.slice(0, Math.ceil(constants.techList.length / 2)).map((value, i) => {
                        return (
                            <div className={`heightButton font-['Poppins'] text-3xl text-white`} key={i}>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(value.name)
                                            .pauseFor(7000)
                                            .deleteAll()
                                            .typeString(value.name)
                                            .start();
                                    }
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
                <img alt="image_perfil" className={`w-[250px] shadow-md rounded-full justify-center p-3 ${getBorder()}`} src="logo.jpg" />
                <div className="flex flex-col justify-evenly items-center min-w-[250px] p-5">
                    {constants.techList.slice(Math.ceil(constants.techList.length / 2)).map((value, i) => {
                        return (
                            <div className={`heightButton font-['Poppins'] text-3xl text-white`} key={i}>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(value.name)
                                            .pauseFor(7000)
                                            .deleteAll()
                                            .typeString(value.name)
                                            .start();
                                    }
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
}

export default Profile;