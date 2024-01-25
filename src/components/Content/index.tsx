import { ReactNode } from "react";
import "./Content.css";
import { useSelector } from "react-redux";

interface contentProps {
    children: ReactNode;
}

function Content(props: contentProps){
    const themeData = useSelector((state: any) => state.theme);

    return(
        <div className={themeData['theme'] === 'dark' ? `content` : 'content-light'}>
            {
                props.children
            }
        </div>
    );
}

export default Content;