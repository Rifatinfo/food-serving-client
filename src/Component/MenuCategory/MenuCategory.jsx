import { useEffect, useState } from "react";
// import useMenu from "../../hooks/useMenu";
import usePagination from "../../hooks/usePagination";
import Pagination from "../Pagination/Pagination";
import FoodMenuCart from "../Shared/FoodMenuCart/FoodMenuCart";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const MenuCategory = () => {
    // const [menu] = useMenu();
    const [menu, setMenu] = useState([]);
    const [paginationMenu] = usePagination();
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(36);
    const [category, setCategory] = useState("salad");

    console.log(paginationMenu);
    useEffect(() => {
        fetch(`http://localhost:5000/menu?page=${currentPage}&size=${itemPerPage}&category=${category}`)
            .then(res => res.json())
            .then(data => {
                // setLoading(false);
                setMenu(data);
                setCategory(data);
            })
    }, [currentPage, itemPerPage]);
    // const itemPerPage = 8;
    const numberOfPages = Math.ceil(paginationMenu / itemPerPage);
    const pages = [];
    for (let i = 0; i < numberOfPages; i++) {
        pages.push(i)
    }
    console.log(pages);
    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }
    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

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
                    <div className="tab-content mt-8"><div className="grid gap-2 grid-cols-1 md:grid-cols-4 md:gap-3"> {popular.map(item => <FoodMenuCart item={item} key={item._id}></FoodMenuCart>)}</div>
                        {/* pagination */}
                        <div className="flex justify-center items-center">
                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                handleNext={handleNext}
                                handlePrevious={handlePrevious}
                                pages={pages}
                                itemPerPage={itemPerPage}
                                setItemPerPage={setItemPerPage}
                            />
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_2" className="tab text-xl text-black" aria-label="salad" defaultChecked />
                    <div className="tab-content  mt-8">
                        <div className="grid gap-2 grid-cols-1 md:grid-cols-4 md:gap-3">
                            {salad.map(item => <FoodMenuCart item={item} key={item._id}></FoodMenuCart>)}
                        </div>
                        {/* pagination */}
                        <div className="flex justify-center items-center">
                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                handleNext={handleNext}
                                handlePrevious={handlePrevious}
                                pages={pages}
                                itemPerPage={itemPerPage}
                                setItemPerPage={setItemPerPage}
                            />
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_2" className="tab text-xl text-black" aria-label="drinks" />
                    <div className="tab-content  mt-8"><div className="grid gap-2 grid-cols-1 md:grid-cols-4 md:gap-3"> {offered.map(item => <FoodMenuCart item={item} key={item._id}></FoodMenuCart>)}</div>
                        {/* pagination */}
                        <div className="flex justify-center items-center">
                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                handleNext={handleNext}
                                handlePrevious={handlePrevious}
                                pages={pages}
                                itemPerPage={itemPerPage}
                                setItemPerPage={setItemPerPage}
                            />
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_2" className="tab text-xl text-black" aria-label="pizza" />
                    <div className="tab-content  mt-8"><div className="grid gap-2 grid-cols-1 md:grid-cols-4 md:gap-3"> {drinks.map(item => <FoodMenuCart item={item} key={item._id}></FoodMenuCart>)}</div></div>

                    <input type="radio" name="my_tabs_2" className="tab text-xl text-black" aria-label="soup" />
                    <div className="tab-content  mt-8"><div className="grid gap-2 grid-cols-1 md:grid-cols-4 md:gap-3"> {pizza.map(item => <FoodMenuCart item={item} key={item._id}></FoodMenuCart>)}</div>
                        {/* pagination */}
                        <div className="flex justify-center items-center">
                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                handleNext={handleNext}
                                handlePrevious={handlePrevious}
                                pages={pages}
                                itemPerPage={itemPerPage}
                                setItemPerPage={setItemPerPage}
                            />
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_2" className="tab text-xl text-black" aria-label="offered" />
                    <div className="tab-content  mt-8"><div className="grid gap-2 grid-cols-1 md:grid-cols-4 md:gap-3"> {soup.map(item => <FoodMenuCart item={item} key={item._id}></FoodMenuCart>)}</div>
                        {/* pagination */}
                        <div className="flex justify-center items-center">
                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                handleNext={handleNext}
                                handlePrevious={handlePrevious}
                                pages={pages}
                                itemPerPage={itemPerPage}
                                setItemPerPage={setItemPerPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;