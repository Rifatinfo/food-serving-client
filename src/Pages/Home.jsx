import HomePageBanner from "../Component/HomePageBanner/HomePageBanner";
import PopularMenu from "../Component/PopularMenu/PopularMenu";
import Cover from "../Component/Shared/TopbarPageCover/Cover";
import image from "../assets/menu/banner3.jpg"
import MenuCategory from "../Component/MenuCategory/MenuCategory"
const Home = () => {
    return (
        <div>
            <HomePageBanner />
            <PopularMenu />
            <Cover image={image} title="Our Menu" subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, voluptatum."/>
            <MenuCategory/>
        </div>
    );
};

export default Home;
