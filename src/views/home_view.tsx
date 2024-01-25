import About from "../components/About";
import Contact from "../components/Contact";
import Content from "../components/Content";
import Header from "../components/Header/Index";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import Projects from "../components/Projects";

function HomeView() {
    return (
        <>
            <Content>
                <Header indexHeader={0} />
                <Profile />
                <About />
                <Projects />
                <Contact />
            </Content>
            <NavBar />
        </>
    );
}

export default HomeView;