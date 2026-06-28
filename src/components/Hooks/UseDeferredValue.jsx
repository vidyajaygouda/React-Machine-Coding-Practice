import { useDeferredValue, useEffect, useMemo, useState } from "react"

const useDebounce = (value , delay = 3000) =>{
    const [debounceValue , setDebounceValue] = useState(value);

    useEffect(() => {
        console.log(value, "value")
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => clearTimeout(timer)
    } , [value , delay]);

    return debounceValue;
}

function ResultList ({users}) {
    return (
        <div className="h-500 overflow-scroll">
            {
               users && users?.map((user) => (
                    <div key={user.id}>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                    </div>
                ))
            }
        </div>
    )
}

function SearchPage () {
    const [query, setQuery] = useState("");
    const [loading , setLoading] = useState(false);
    const [results, setResults] = useState([]);

    const debouncedQuery = useDebounce(query, 500);


    useEffect(() => {
        async function fetchUser () {
            try{
                setLoading(true);
                const results = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await results.json();
                console.log(data, "data")
                let list = Array.from(
                    {length : 10000},
                    (_, index) => ({
                        ...data[index % data?.length],
                        id: `${data[index % data.length].id}- ${index}`
                    })
                )
                
                 setResults(list);
                 setLoading(false);
            }catch(error){
                console.error("Error:" , error);
                setLoading(false);
            }
        }
        fetchUser();
    }, [debouncedQuery])

    const deferredValue = useDeferredValue(query)

    const filteredList = useMemo(() => {
        const search = deferredValue.toLowerCase();
        return results.filter((user) => user.name.toLowerCase().includes(search));
        
    },[results, deferredValue])

     console.log(filteredList, "filteredList")


    return(
        <>
        <div>
            <h2>Search </h2>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search value" />
            {loading && <div> Loading</div>}
            <p>Found {filteredList?.length}</p>
            <ResultList users = {filteredList}/>
        </div>
        </>
    )
}

export default SearchPage;
