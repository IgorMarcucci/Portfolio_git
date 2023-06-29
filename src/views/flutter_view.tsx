import Content from "../components/Content";
import FlutterArea from "../components/FlutterArea";
import Header from "../components/Header/Index";

function FlutterView() {
    return (
        <>
            <Header indexHeader={1} />
            <Content>
                <FlutterArea />
            </Content>
        </>
    );
}

export default FlutterView;