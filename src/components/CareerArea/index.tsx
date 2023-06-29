import Typewriter from "typewriter-effect";
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';


function CareerArea(){
    return(
        <div className="m-10">
            <div className="text-white text-3xl sm:text-5xl m-10 justify-evenly items-center">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Carreira")
                            .start();
                    }
                    }
                />

            </div>
        </div>
    );

}

export default CareerArea;