import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsersGear } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    // /users/admin/:id
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${user.name} is Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = (_id) => {
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
                axiosSecure.delete(`/user/${_id}`)
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
            <div>
                <div className="flex justify-center items-center mt-4">
                    <h2 className="md:text-4xl text-xl font-semibold text-center">All Users</h2>
                </div>

                {/* all add to cart */}
                <div className="mt-4">
                    <div className="overflow-x-auto ">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Mark</th>
                                    <th>User Image</th>
                                    <th>User Name</th>
                                    <th>User email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(item => <tr key={item._id || item.email}>
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
                                                        src={item.photo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.email}
                                    </td>
                                    <th>
                                        {item.role === 'admin' ? 'Admin' : <><p><FaUsersGear onClick={() => handleMakeAdmin(item)} className="text-orange-400 text-3xl" /></p></>}
                                    </th>
                                    <th>
                                        <p><MdDelete onClick={() => handleDeleteUser(item._id)} className="text-orange-400 text-3xl" /></p>
                                    </th>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;