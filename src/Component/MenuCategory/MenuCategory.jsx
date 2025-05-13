import useMenu from "../../hooks/useMenu";
import FoodMenuCart from "../Shared/FoodMenuCart/FoodMenuCart";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const MenuCategory = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div className="max-w-6xl mx-auto">
            <SectionTitle
                heading="Order Food"
                subHeading="All Item Menu"
            >
            </SectionTitle>
            <div className="mt-10">
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-border ">
                    <input type="radio" name="my_tabs_2" className="tab text-xl text-black" aria-label="popular" />
                    <div className="tab-content mt-8"><div className="grid gap-2 grid-cols-1 md:grid-cols-4 md:gap-3"> {popular.map(item => <FoodMenuCart item={item} key={item._id}></FoodMenuCart>)}</div></div>

                    <input type="radio" name="my_tabs_2" className="tab text-xl text-black" aria-label="salad" defaultChecked />
                    <div className="tab-content  mt-8">
                        <div className="grid gap-2 grid-cols-1 md:grid-cols-4 md:gap-3"> 
                            {salad.map(item => <FoodMenuCart item={item} key={item._id}></FoodMenuCart>)}
                            </div>
                        {/* pagination */}
                        <div className="text-center">
                            <p>pagination</p>
                        </div>
                            </div>

                    <input type="radio" name="my_tabs_2" className="tab text-xl text-black" aria-label="drinks" />
                    <div className="tab-content  mt-8"><div className="grid gap-2 grid-cols-1 md:grid-cols-4 md:gap-3"> {offered.map(item => <FoodMenuCart item={item} key={item._id}></FoodMenuCart>)}</div></div>

                    <input type="radio" name="my_tabs_2" className="tab text-xl text-black" aria-label="pizza" />
                    <div className="tab-content  mt-8"><div className="grid gap-2 grid-cols-1 md:grid-cols-4 md:gap-3"> {drinks.map(item => <FoodMenuCart item={item} key={item._id}></FoodMenuCart>)}</div></div>

                    <input type="radio" name="my_tabs_2" className="tab text-xl text-black" aria-label="soup" />
                    <div className="tab-content  mt-8"><div className="grid gap-2 grid-cols-1 md:grid-cols-4 md:gap-3"> {pizza.map(item => <FoodMenuCart item={item} key={item._id}></FoodMenuCart>)}</div></div>

                    <input type="radio" name="my_tabs_2" className="tab text-xl text-black" aria-label="offered" />
                    <div className="tab-content  mt-8"><div className="grid gap-2 grid-cols-1 md:grid-cols-4 md:gap-3"> {soup.map(item => <FoodMenuCart item={item} key={item._id}></FoodMenuCart>)}</div></div>
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;