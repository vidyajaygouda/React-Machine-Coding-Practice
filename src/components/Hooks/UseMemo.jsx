



import { useMemo, useState } from "react"

function ProductList ({products}){
    const [search , setSearch] = useState("");

    // problem with function is 
    /// we have 20,000 items render filter 20,000 resnder Ui it's decreases a performance of ui when we use 
    // useMemo :- filtering happens only when products changes and search changes not for every render

    const filteredProducts = useMemo(() => {
        console.log("filtering")
      return products.filter((product) => product?.name?.toLowerCase().includes(search.toLowerCase()))
    }, [products, search])

    //   const filteredProducts =  () => {
    //     console.log("filtering")
    //     const data =  products.filter((product) => product?.name?.toLowerCase().includes(search.toLowerCase()));
    //     return data;
    //   }

    //  console.log(filteredProducts())

    return(
        <>
            <input value={search} onChange={(e) => setSearch(e.target.value)}/>
            {   
              filteredProducts?.length > 0&&  filteredProducts.map((product) => (
                    <div key={product.id}>{product.name}</div>
                ))

            }
        </>
    )
}

export default ProductList