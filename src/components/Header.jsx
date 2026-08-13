
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { setLang } from "../utils/multiLangSlice"
// import { useTheme } from "../cotext/ThemeContext"


const Header = () => {
    const dispatch = useDispatch()
    // const { theme, toggleTheme } = useTheme();
    const lang = useSelector(store => store.lang)

    return(
        <header className="sticky flex items-center p-4 justify-between top-0 z-50 backdrop-blur border-b border-slate-200 bg-white/80 text-slate-900 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-50">
            <div className=" flex items-center">
                <span>Logo</span>
            </div>
            <div  className="flex items-center gap-2 justify-between flex-wrap">
                <NavLink>
                    <Link className="px-1" to={"/"}>Home</Link>
                    <Link className="px-1" to={"/about"}>About</Link>
                    <Link className="px-1" to={"/memes"}>Memes</Link>
                    <Link className="px-1" to={"/accordion"}>Accordion</Link>
                    <Link className="px-1" to={"/comments"}>Comments</Link>
                    <Link className="px-1" to={"/imageSlider"}>Image Slider</Link>
                    <Link className="px-1" to={"/products"}>Products</Link>
                    <Link className="px-1" to={"/search"} >Search</Link>
                    <Link className="px-1" to={"/stopWatch"} >StopWatch</Link>
                    <Link className="px-1" to={"/fileExplorer"} >File Explorer</Link>
                    <Link className="px-1" to={"/progressbar"} >Progress Bar</Link>
               </NavLink>  
               <select value={lang} onChange={(e) => dispatch(setLang(e.target.value))}>
                    <option value={"en"}>English</option>
                    <option value={"hin"}>Hindi</option>
                    <option value={"french"}>French</option>
                </select> 
            </div>
              
        </header>
    //     <div className="min-h-screen flex flex-col items-center justify-center transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
      
    //   <div className="p-8 max-w-sm rounded-2xl shadow-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-800 text-center">
    //     <h1 className="text-2xl font-bold mb-4">
    //       Tailwind + Context API
    //     </h1>
    //     <p className="text-slate-600 dark:text-slate-400 mb-6">
    //       Current Theme: <span className="font-semibold capitalize">{theme}</span>
    //     </p>

    //     <button
    //       onClick={toggleTheme}
    //       className="px-5 py-2.5 rounded-lg font-medium shadow transition-all duration-200 active:scale-95 bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
    //     >
    //       {theme === 'light' ? '🌙 Switch to Dark' : '☀️ Switch to Light'}
    //     </button>
    //   </div>

    // </div>
    )
}

export default Header