import "./HomePage.css";
import Header from "./homePageComponents/Header";
import Header_two from "./homePageComponents/Header_two";
import Sidebar from "./homePageComponents/Sidebar";
import MainContent from "./homePageComponents/MainContent";

const HomePage = () => {
    return (
        <div className="home_wrapper">
            <Header />
            <Header_two />
            <Sidebar />
            <MainContent />
        </div>
    )
}

export default HomePage;