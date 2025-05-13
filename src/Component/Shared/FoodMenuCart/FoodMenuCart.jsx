
const FoodMenuCart = ({ item }) => {
    return (
        <div className=" rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
            <img className="w-full h-48 object-cover" src={item.image} alt={item.name} />
            <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{item.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
                {/* <p className="mt-2 text-gray-600 dark:text-gray-300">{item.recipe}</p> */}
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold ">${item.price}/menu</span>
                    <span className="text-sm text-yellow-500 font-medium">⭐⭐ {item.rating}</span>
                </div>
                <button className="btn mt-4 w-full bg-black text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default FoodMenuCart;