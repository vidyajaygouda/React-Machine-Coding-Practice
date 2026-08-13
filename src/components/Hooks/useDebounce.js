import { useEffect, useState } from "react";


function useDebounce(value, delay){
    const [debV , setDebV] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebV(value)
        }, delay);
        return () => {
            clearTimeout(timer)
        }
    }, [value, delay]);
    return debV;
}

export default useDebounce;

const [value] = useDebounce("zyx", 3000)