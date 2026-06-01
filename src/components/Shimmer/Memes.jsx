import { useEffect, useState } from 'react'
import Meme from './Meme';
import Shimmer from './Shimmer';

function Memes() {
  const [memes, setMemes] = useState(null);


  const fetchMemes = async() =>{
    const jsonData = await fetch("https://meme-api.com/gimme/10");
    const data = await jsonData.json();
    console.log(data)
    setMemes(data?.memes)
  }

  useEffect(() => {
    fetchMemes();
  }, [])


  return (
    <div className="flex flex-wrap mt-5 mx-2 my-2 gap-2">
      {!memes ? <Shimmer/> : memes.map((item) => <Meme data = {item}/>)}
    </div>
  )
}

export default Memes