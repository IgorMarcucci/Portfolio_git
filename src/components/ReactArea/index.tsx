import Typewriter from "typewriter-effect";

function ReactArea() {
    return (
        <div className="m-10">
            <div className="text-white text-3xl sm:text-5xl m-10 justify-evenly items-center text-center">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("React.js")
                            .start();
                    }
                    }
                />
            </div>
        </div>
    );
}

export default ReactArea;