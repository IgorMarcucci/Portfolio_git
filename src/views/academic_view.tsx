import Header from "../components/Header/Index";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Content from "../components/Content";
import ConstantsValues from "../Constants";
import TopNameArea from "../components/TopNameArea";
import { useSelector } from "react-redux";

function AcademicView() {
    const constants: ConstantsValues = new ConstantsValues();
    const themeData = useSelector((state: any) => state.theme);

    const getTheme = () => {
        if (themeData['theme'] === 'dark') {
            return '#171717'
        } else {
            return '#ADADAD34'
        }
    }
    
    return (
        <Content>
            <Header indexHeader={1} />
            <TopNameArea value="Formação Acadêmica" />
            <VerticalTimeline>
                {
                    constants.academicHistory.map((value, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work font-['Poppins']"
                            contentStyle={{ background: `${getTheme()}`, color: '#fff' }}
                            contentArrowStyle={{ borderRight: `7px solid  ${getTheme()}` }}
                            date={value.date}
                            iconStyle={{ background: `#fff`, color: '#134CB6' }}
                            icon={<value.icon/>}
                        >
                            <h3 className="vertical-timeline-element-title text-lg sm:text-2xl">{value.role}</h3>
                            <h4 className="vertical-timeline-element-subtitle text-sm sm:text-md">{value.companyName}</h4>
                            {
                                value.description &&
                                <p className="text-md sm:text-lg">
                                    {value.description}
                                </p>
                            }
                        </VerticalTimelineElement>
                    ))
                }
            </VerticalTimeline>
        </Content>
    );
}

export default AcademicView;
