import { useForm } from "react-hook-form"
import axios from "axios";
import uesAxiosPublic from "../../../hooks/uesAxiosPublic";

const AddItems = () => {
    const axiosPublic = uesAxiosPublic();
    const {
        register,
        handleSubmit,
    } = useForm()


    const onSubmit = async (data) => {
        const image_hosting_api = `https://api.imgbb.com/1/upload?key=3803c18a2c0ecfe8a7f09c848fcc3742`;
        const imageFile = new FormData();
        imageFile.append("image", data.image[0]);
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log("Image uploaded:", res.data);
    };
    return (
        <div className="px-4">
            <div className="flex justify-center items-center mt-4">
                <h2 className="md:text-4xl text-xl font-semibold text-center">Add New Item </h2>
            </div>

            {/* Add New Item filed */}
            <div className="mt-10">
                <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
                    <div>
                        <label>Recipe name*</label>
                        <input  {...register("recipe")} type="text" placeholder="Type here" className="input w-full" />
                    </div>
                    <div className="flex  gap-2 md:flex-row   md:gap-4 mt-2">
                        <div className="w-full">
                            <label htmlFor="">Category*</label>
                            <input
                                {...register("category")}
                                type="text"
                                placeholder="Type here"
                                className="input w-full"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="">Price*</label>
                            <input
                                {...register("price")}
                                type="text"
                                placeholder="Type here"
                                className="input w-full"
                            />
                        </div>
                    </div>
                    <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Recipe Details*</legend>
                            <textarea
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
    );
};

export default AddItems;
