import { useEffect, useState } from "react";

const usePagination = () => {
    const [paginationMenu, setPaginationMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/menuCount')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setPaginationMenu(data);
            })
    }, []);
    console.log(paginationMenu);
    
    return [paginationMenu, loading];
};

export default usePagination;