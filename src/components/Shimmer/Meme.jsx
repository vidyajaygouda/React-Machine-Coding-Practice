

function Meme({data}) {
  return (
    <div>
      <img src={data.url} alt="mem-img" className="w-64 h-64 object-cover"/>
      <p className="wrap-break-word">{data.title}</p>
    </div>
  )
}

export default Meme