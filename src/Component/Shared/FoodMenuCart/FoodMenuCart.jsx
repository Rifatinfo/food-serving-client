import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const FoodMenuCart = ({ item }) => {
    const {_id, price, image, name, category} = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const handleAddToCart = food => {
        if (user && user.email) {
            // TODO : send cart item to the database
            const cartItem = {
                menuItem: _id,
                email: user.email,
                name,
                image,
                category,
                price
            }
            axiosSecure.post('/cards', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Login?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send user to login page 
                    navigate('/sign-in', { state: { from: location }, replace : true});
                }
            });
        }
        console.log(food, user.email);
    }
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
                <button onClick={() => handleAddToCart(item)} className="btn mt-4 w-full bg-black text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default FoodMenuCart;