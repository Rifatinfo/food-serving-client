import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import uesAxiosPublic from "../../../hooks/uesAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateItem = () => {
    const axiosPublic = uesAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { image, recipe, name, price, recipeDetails ,category, _id} = useLoaderData();
    // console.log(updateData);

    const {
        register,
        handleSubmit,
        reset
    } = useForm()


    const onSubmit = async (data) => {
        console.log(data);

        const image_hosting_api = `https://api.imgbb.com/1/upload?key=3803c18a2c0ecfe8a7f09c848fcc3742`;
        const imageFile = new FormData();
        imageFile.append("image", data.image[0]);
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log("Image uploaded:", res.data);

        if (res.data.success) {
            const menuItem = {
                name: data.name,
                price: data.price,
                recipe: data.recipe,
                recipeDetails: data.recipeDetails,
                image: res.data.data.display_url
            }

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                // reset();
                // success toast 
                Swal.fire({
                    title: `Successful ${data.recipe} Updated!`,
                    icon: "success",
                    draggable: true
                });
            }
        }
    };

    return (
        <div>
            <div className="px-4">
                <div className="flex justify-center items-center mt-4">
                    <h2 className="md:text-4xl text-xl font-semibold text-center">Update Item </h2>
                </div>

                {/* Add New Item filed */}
                <div className="mt-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
                        <div>
                            <label>Recipe name*</label>
                            <input defaultValue={name} {...register("name")} type="text" placeholder="Type here" className="input w-full" />
                        </div>
                        <div>
                            <label>Recipe Item*</label>
                            <input defaultValue={recipe}  {...register("recipe")} type="text" placeholder="Type here" className="input w-full" />
                        </div>
                        <div className="flex  gap-2 md:flex-row   md:gap-4 mt-2">
                            <div className="w-full">
                                <label htmlFor="">Category*</label>
                                <input
                                    defaultValue={category}
                                    {...register("category")}
                                    type="text"
                                    placeholder="Type here"
                                    className="input w-full"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="">Price*</label>
                                <input
                                    defaultValue={price}
                                    {...register("price")}
                                    type="number"
                                    placeholder="Type here"
                                    className="input w-full"
                                />
                            </div>
                        </div>
                        <div>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Recipe Details*</legend>
                                <textarea
                                    defaultValue={recipeDetails}
                                    {...register("recipeDetails")}
                                    className="textarea h-24 w-full"
                                    placeholder="Recipe Details"
                                ></textarea>
                            </fieldset>
                        </div>
                        <div className="mt-2">
                            <input type="file" accept="image/*" {...register("image", { required: true })} className="file-input file-input-ghost" />
                        </div>
                        <div className="mt-2">
                            <button type="submit" className="btn">Add Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;
