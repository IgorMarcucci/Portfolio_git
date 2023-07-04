import Header from "../components/Header/Index";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Content from "../components/Content";
import CareerArea from "../components/CareerArea";
import ConstantsValues from "../Constants";

function CareerView() {
    return (
        <>
            <Header indexHeader={1} />
            <Content>
                <CareerArea />
                <VerticalTimeline>
                    {
                        ConstantsValues.workHistory.map((value, index) => (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work font-['Poppins']"
                                contentStyle={{ background: '#171717', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #171717' }}
                                date={value.date}
                                iconStyle={{ background: '#171717', color: '#fff' }}
                                icon={<value.icon/>}
                            >
                                <h3 className="vertical-timeline-element-title text-lg sm:text-2xl">{value.role}</h3>
                                <h4 className="vertical-timeline-element-subtitle text-sm sm:text-md">{value.companyName}</h4>
                                <p className="text-md sm:text-lg">
                                    {value.description}
                                </p>
                            </VerticalTimelineElement>
                        ))
                    }
                </VerticalTimeline>
            </Content>
        </>
    );
}

export default CareerView;
