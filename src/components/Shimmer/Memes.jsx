import { useEffect, useState } from 'react'
import Meme from './Meme';
import Shimmer from './Shimmer';

function Memes() {
  const [memes, setMemes] = useState([]);
  const [loading , setLoading] = useState(false)


  const fetchMemes = async() =>{
     setLoading(true)
    const jsonData = await fetch("https://meme-api.com/gimme/10");
    const data = await jsonData.json();
    const memesData = data?.memes
    setMemes((memes) => [...memes , ...memesData]);
    setLoading(false)
  }

  const handleScroll = () =>{
    
    // window.innerhiegth :- height of the window which is visible 
    // window.scrolly :- how much i scrolled to an vertically 
    // document.documentElement.scrollheight :- the complete  height of web page
      if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        fetchMemes();
      }

  }

  useEffect(() => {
   
    fetchMemes();
    window.addEventListener("scroll" , handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


 



  return (
    <div className="flex flex-wrap mt-5 mx-2 my-2 gap-2 mb-2">
       { memes.map((item) => <Meme data = {item}/>)}
       {loading && <Shimmer/>}
    </div>
  )
}

export default Memes