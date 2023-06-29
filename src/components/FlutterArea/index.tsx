import Typewriter from "typewriter-effect";

function FlutterArea() {
    return (
        <div className="m-10">
            <div className="text-white text-3xl sm:text-5xl m-10 justify-evenly items-center">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Flutter")
                            .start();
                    }
                    }
                />
            </div>
        </div>
    );
}

export default FlutterArea;