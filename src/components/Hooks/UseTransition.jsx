import { startTransition, useState } from "react"

function TransitionHook () {
    const [list , setList] = useState(["Abc" , "xyz"]);
    const [search , setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
        const data = [];
        startTransition(() => {
             for(let i= 0 ; i <= 50000 ; i++) {
            data.push(e.target.value);
        }
            setList(data)
        })
    }

    console.log(list)

    return (
        <div className="ml-20 mt-10">
            <div><input value={search} onChange={handleSearch} placeholder="Search" /></div>
            <ul>
                {
                    list?.map ((data) => (
                        <li >{data}</li>
                    ))
                }

            </ul>
        </div>
    )
}

export default TransitionHook;