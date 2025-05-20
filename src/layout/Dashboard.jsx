import { FaBook, FaCalendar, FaHome, FaRProject, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCard from "../hooks/useCard";

const Dashboard = () => {
    const [card] = useCard();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/dashboard/userHome" className="flex items-center gap-2 text-lg font-semibold text-white">
                            <FaHome />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/card" className="flex items-center gap-2 text-lg font-semibold text-white">
                            <FaShoppingCart />
                            My Card  ({card.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation" className="flex items-center gap-2 text-lg font-semibold text-white">
                            <FaCalendar />
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review" className="flex items-center gap-2 text-lg font-semibold text-white">
                            <FaRProject />
                            Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings" className="flex items-center gap-2 text-lg font-semibold text-white">
                            <FaBook />
                            My Booking
                        </NavLink>
                    </li>

                    {/* divider */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/" className="flex items-center gap-2 text-lg font-semibold text-white">
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;