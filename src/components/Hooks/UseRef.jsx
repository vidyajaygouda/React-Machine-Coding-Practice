
//It’s particularly common to use a ref to manipulate the DOM. React has built-in support for this.

//First, declare a ref object with an initial value of null:
//I can’t get a ref to a custom component 
// If you try to pass a ref to your own component like this:

// const inputRef = useRef(null);

// return <MyInput ref={inputRef} />;

import {  useRef, useState } from "react";

function InputFocus() {
    const [search , setSearch] = useState('')
    const inputRef  = useRef(null);

    const hanldleSearch = (e) => {
        inputRef.current.focus();
    }

    return (
        <>
        <input ref={inputRef} value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={hanldleSearch}>Search</button>
        </>
    )
}

export default InputFocus