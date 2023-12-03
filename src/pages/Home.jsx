import About from "../components/pages/About";
import Banner from "../components/pages/Banner";
import Brands from "../components/pages/Brands";
import Contact from "../components/pages/Contact";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Brands></Brands>
            <Contact></Contact>
        </div>
    );
};

export default Home;