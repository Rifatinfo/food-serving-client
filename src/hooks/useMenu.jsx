// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import uesAxiosPublic from "./uesAxiosPublic";

const useMenu = () => {
    const axiosPublic = uesAxiosPublic();
    //  const [menu, setMenu] = useState([]);
    //  const [loading, setLoading] = useState(true);
    //     useEffect(() => {
    //         fetch('http://localhost:5000/menu')
    //             .then(res => res.json())
    //             .then(data => {
    //                 setLoading(false);
    //                 setMenu(data);
    //             })
    //     },[]);
       const {data : menu = [], isPending : loading, refetch} = useQuery({
        queryKey : ['menu'],
        queryFn : async () => {
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
       })

        return [menu, loading, refetch];

};

export default useMenu;