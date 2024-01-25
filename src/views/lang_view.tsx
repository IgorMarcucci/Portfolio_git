import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import Content from "../components/Content";
import TopNameArea from "../components/TopNameArea";
import Header from "../components/Header/Index";
import { useSelector } from "react-redux";
import { LangInterface } from "../interfaces/lang_interface";
import { MdWork } from "react-icons/md";
import { useEffect } from "react";

function LangView () {
    const langData = useSelector((state: any) => state.lang);
    const langName = useSelector((state: any) => state.name);
    const themeData = useSelector((state: any) => state.theme);

    const getTheme = () => {
        if (themeData['theme'] === 'dark') {
            return '#171717'
        } else {
            return '#ADADAD34'
        }
    }

    useEffect(() => {
        langData["lang"] === undefined || langData["lang"] === null || langName['name'] === '' || langName === undefined ? window.location.href = "/" : null;
    }, [langData, langName]);

    return (
        <>
            {
                langData["lang"] && langName['name'] ?
                    <Content>
                        <Header indexHeader={1} />
                        <TopNameArea value={langName['name']}/>
                        <VerticalTimeline>
                            {
                                (langData["lang"] as LangInterface[]).map((value, index) => (
                                    <VerticalTimelineElement
                                        key={index}
                                        className="vertical-timeline-element--work font-['Poppins']"
                                        contentStyle={{ background: `${getTheme()}`, color: '#fff' }}
                                        contentArrowStyle={{ borderRight: `7px solid  ${getTheme()}` }}
                                        iconStyle={{ background: `#fff`, color: '#134CB6' }}
                                        icon={<MdWork/>}
                                    >
                                        <h3 className="vertical-timeline-element-title mb-3 text-lg sm:text-2xl text-center" key={index}>{value.name}</h3>
                                        {
                                            value.options.map((valueOptions, i) => (
                                                <li className="text-md sm:text-lg text-center" key={i}>
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
                    </Content>: <div className="w-[100vw] h-[100vh] bg-[#1a1a1a] flex flex-col items-center justify-center">
                        <p className="text-white font-['Poppins']">
                            Erro ao carregar a página
                        </p>
                </div>
            }
        </>
    );
}

export default LangView;