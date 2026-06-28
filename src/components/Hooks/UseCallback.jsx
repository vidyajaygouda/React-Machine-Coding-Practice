//Note that useCallback does not prevent creating the function. 
// You’re always creating a function (and that’s fine!), but React ignores it and gives you back a cached function if nothing changed.


import React, { useCallback, useState } from "react";

const ProductCard = React.memo(({product, onAddToCart}) => {
    console.log(product, "rendered");

    return (
        <>
        <ul>
            <li>{product.name}</li>
            <button onClick={onAddToCart}>Add</button>
        </ul>
        </>
    )
})


function ProductPages(){
    const [cart, setCart] = useState([]);
    const [search, setSearc] = useState("");
    const [products] = useState([{
        id: 1, 
        name: 'item 1'
    }])
        


    const handleCart = useCallback((id) => {
        setCart(prev => [...prev, id]);
        console.log("clicker")
    }, [])

    return (
        <>
        <input value={search} onChange={(e) => {setSearc(e.target.value)}}/>
        {
            products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={handleCart} />
            
            ))
        }
        </>
    )

}

export default ProductPages