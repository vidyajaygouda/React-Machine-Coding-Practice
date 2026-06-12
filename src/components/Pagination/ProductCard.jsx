
function ProductCard({product}) {
  return (
    <div className="border-2 border-black m-4 p-4 ">
        <img className="h-40 w-50 object-fill" src= {product.picture.medium}/>
        <p>{product.name.first}</p>
    </div>
  )
}

export default ProductCard