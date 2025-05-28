import { useLoaderData } from "react-router-dom";

const UpdateItem = () => {
    const updateData = useLoaderData();
    console.log(updateData); 

    return (
        <div>
            <h1>Update Item {length.updateData}</h1>
        </div>
    );
};

export default UpdateItem;
