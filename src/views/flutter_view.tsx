import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import Content from "../components/Content";
import FlutterArea from "../components/FlutterArea";
import Header from "../components/Header/Index";
import ConstantsValues from "../Constants";
import { BiLogoFlutter } from "react-icons/bi"

function FlutterView() {
    return (
        <>
            <Header indexHeader={1} />
            <Content>
                <FlutterArea />
                <VerticalTimeline>
                    {
                        ConstantsValues.flutterSkills.map((value, index) => (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work font-['Poppins']"
                                contentStyle={{ background: '#171717', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #171717' }}
                                iconStyle={{ background: '#171717', color: '#fff' }}
                                icon={<BiLogoFlutter/>}
                            >
                                <h3 className="vertical-timeline-element-title mb-3 text-lg sm:text-2xl text-center">{value.name}</h3>
                                {
                                    value.options.map((valueOptions) => (
                                        <li className="text-md sm:text-lg text-center">
                                            {
                                                valueOptions
                                            }
                                        </li>
                                    ))
                                }
                                
                            </VerticalTimelineElement>
                        ))
                    }
                </VerticalTimeline>
            </Content>
        </>
    );
}

export default FlutterView;