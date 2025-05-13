import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuItemCart from "./MenuItemCart";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItem = menu.filter(item => item.category === 'popular');
    return (
        <section className="max-w-7xl mx-auto">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Item"
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 mt-10 px-4">
                {
                    popularItem.map(item => <MenuItemCart
                        key={item._id}
                        item={item} />)
                }
            </div>
            <div className="mt-10 mb-10 text-center">
                <button className="btn btn-outline border-0 border-b-4 mt-4 hover:border-b-yellow-600 hover:bg-black hover:text-white">View Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;