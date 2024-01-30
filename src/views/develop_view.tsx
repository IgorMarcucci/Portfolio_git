import Contact from "../components/Contact";
import Content from "../components/Content";
import Header from "../components/Header/Index";

function DevelopView() {
    
    return (
        <>
            <Content>
            <Header indexHeader={1} />
                <div className="h-[40vh] w-[90vw] flex flex-col items-center justify-evenly">
                    <h1 className={`text-4xl text-center text-white font-['Poppins']`}>Em desenvolvimento</h1>
                </div>
                <Contact />
            </Content>
        </>
    );
}

export default DevelopView;