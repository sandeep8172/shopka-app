import "./HomePage.css";
import Header from "./homePage components/Header";
import Header_two from "./homePage components/Header_two";
import Sidebar from "./homePage components/Sidebar";
import MainContent from "./homePage components/MainContent";

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