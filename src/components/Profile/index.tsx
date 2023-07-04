import Typewriter from "typewriter-effect";
import { useState, useEffect } from 'react';

function Profile() {

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
        <div className="m-10">
            <div className="text-white text-3xl sm:text-5xl m-5 justify-evenly items-center">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Sejam bem vindos")
                            .pauseFor(3000)
                            .deleteAll()
                            .typeString("Desenvolvedor Web e Mobile")
                            .start();
                    }
                    }
                />
            </div>
            <div className={`mt-16 flex ${flexDirection} justify-center items-center`}>
                <div className="flex flex-row justify-center p-5">
                    <img alt="image_perfil" className="w-[250px] shadow-md rounded-full justify-center p-3 bg-[#101010]" src="logo.jpg" />
                </div>
                <div className="flex flex-col justify-evenly">
                    <div className="heightButton">
                        <i className="devicon-flutter-plain colored"></i>
                        <p className="text-white text-2xl sm:text-2xl m-5 font-['Poppins']">
                            Flutter
                        </p>
                    </div>
                    <div className="heightButton">
                        <i className="devicon-react-original colored"></i>
                        <p className="text-white text-2xl sm:text-2xl m-5 font-['Poppins']">
                            React.js
                        </p>
                    </div>
                    <div className="heightButton">
                        <i className="devicon-tailwindcss-plain colored"></i>
                        <p className="text-white text-2xl sm:text-2xl m-5 font-['Poppins']">
                            Tailwind
                        </p>
                    </div>
                    <div className="heightButton">
                        <i className="devicon-bootstrap-plain colored"></i>
                        <p className="text-white text-2xl sm:text-2xl m-5 font-['Poppins']">
                            Bootstrap
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Profile;