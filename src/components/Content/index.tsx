import "./Content.css";
import Projects from "../Projects";
import About from "../About";
import Contact from "../Contact";
import Profile from "../Profile";

function Content(){
    
    return(
       
            <div className="content">
                <Profile />
                <About />
                <Projects />
                <Contact />
            </div>
    );
}

export default Content;