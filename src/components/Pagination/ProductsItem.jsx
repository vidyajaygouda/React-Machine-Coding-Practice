import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";

const limit = 10;
function ProductsItem() {
    const [products , setProducts] = useState([]);
    const [noOfPages, setNoOfPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    

    const fetchProducts = async() => {
        const data = await fetch(`https://api.freeapi.app/api/v1/public/randomusers?page=${currentPage}&limit=${limit}`);
        const products = await data.json();
        setProducts(products.data);
        // set the no of the page :- total / limit
        setNoOfPages(products.data.totalPages/ limit);
        setCurrentPage(products.data.page)
    }

    useEffect(() => {
        fetchProducts();
        console.log(currentPage, "currentPage")
    }, [currentPage ]);

  
    const handleNext = () => {
        setCurrentPage((currentPage) => currentPage + 1)
    }

     const handlePrev = () => {
        setCurrentPage((currentPage) => currentPage - 1)
    }
  return (
    <>
    <div className="flex flex-wrap">
        {products?.data?.map((product) => (
            // <ProductCard key={product.id}  {...product}/>
            <ProductCard key={product.id}  product = {product}/>
        ))} 
    </div>
    <div className="flex m-4 items-center justify-center cursor-pointer">
       {currentPage > 1 && <p onClick={handlePrev}>Prev</p> }
            {[...Array(noOfPages).keys()].map((page) => (
                <div className={`border-2 border-solid border-black m-2 p-1 ${(page + 1) === currentPage && "bg-amber-50 font-bold"}`}>
                     <p onClick={() =>setCurrentPage(page + 1)}>{page +1}</p>
                </div>
            ))}
        { currentPage < noOfPages  &&  <p onClick={handleNext}>Next</p>}
    </div>
    </>
  )
}

export default ProductsItem