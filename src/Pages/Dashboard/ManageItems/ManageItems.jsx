import { RiEdit2Fill } from "react-icons/ri";
import useMenu from "../../../hooks/useMenu";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, loading, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    console.log(menu);
    const handleDeleteItem = (_id) => {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        axiosSecure.delete(`/menu/${_id}`)
                            .then(res => {
                                console.log("Delete response:", res);
                                if (res.data.deletedCount > 0) {
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Your item has been deleted.",
                                        icon: "success"
                                    });
                                    refetch(); // refetch your cart data here
                                } else {
                                    Swal.fire({
                                        title: "Failed",
                                        text: "Item could not be deleted.",
                                        icon: "error"
                                    });
                                }
                            })
                            .catch(err => {
                                console.error("Delete failed:", err);
                                Swal.fire({
                                    title: "Error",
                                    text: "Something went wrong!",
                                    icon: "error"
                                });
                            });
                    }
                });
    }
    return (
        <div>
            <div className="flex justify-center items-center mt-4">
                <h2 className="md:text-4xl text-xl font-semibold text-center">Manage ALL Item</h2>
            </div>
            <div className="mt-4">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <p>Mark</p>
                                    </label>
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th> price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu.map(item => <tr key={item._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <Link to={`/dashboard/updateItem/${item._id}`}><RiEdit2Fill className="text-2xl text-orange-500" /></Link>
                                </th>
                                <th>
                                    <MdDelete onClick={() => handleDeleteItem(item._id)} className="text-2xl text-orange-500" />
                                </th>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;