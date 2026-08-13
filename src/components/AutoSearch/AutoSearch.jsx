import { useEffect, useRef, useState } from "react";

function AutoSearch() {

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const cache = useRef({})

  // const handleSearch  = (e) => {

  // }


   const fetchData = async () => {
      // if cache has a data send it from here 
      if(cache.current.searchText){
        setSearchResults(cache.current.searchText);
        return;
      }else{
        // if cache does't have a data API call and update the data 
              const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
              const data = res.json();

             cache.current = data;
              setSearchResults(data?.products);
      }

     
    }


 useEffect(() => {
  
   const  timer = setTimeout(() => {
     fetchData();
   } , 3000);
   return () => clearTimeout(timer);
 }, [searchText])



  
  return (
    <div className="mt-4  ml-6">
      <input 
        className="border border-black p-2 w-96" type="text" value={searchText} 
        onChange={(e) =>  setSearchText(e.target.value)}
        onFocus={() => setShowSearchResults(true)}
        onBlur={() => setShowSearchResults(false)}
        />
        {
          searchResults?.length > 1 && showSearchResults && 
          <>
            <ul className="p-2 border border-black w-96">
              <li>Hello World</li>
              <li>Hello World</li>
            </ul>
          </>
        }
    </div>
  )
}

export default AutoSearch;