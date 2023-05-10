import About from "../About/About";
import Banner from "../Banner/Banner";
import BannerContact from "../Banner/BannerContact";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <BannerContact></BannerContact>
        </div>
    );
};

export default Home;