import Content from "../components/Content";
import Header from "../components/Header/Index";
import NavBar from "../components/NavBar";

function HomeView(){
  return (
    <div className="App">
      <Header/>
      <Content />
      <NavBar/>
    </div>
  );
}

export default HomeView;