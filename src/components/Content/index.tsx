import { ReactNode } from "react";
import "./Content.css";

interface contentProps {
    children: ReactNode;
}

function Content(props: contentProps){
    
    return(
        <div className="content">
            {
                props.children
            }
        </div>
    );
}

export default Content;