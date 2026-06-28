// import { useEffectEvent } from "react";
// import { useEffect, useState } from "react"

import { useEffect, useEffectEvent, useState } from "react";

// const EventEffect = ({room}) => {
//     const [theme, setTheme] = useState(true);
//     const [roomId, setRoomId] = useState(1234)

// //     // Effect 1: Runs on EVERY render (no deps array)
// //   useEffect(() => {
// //     console.log("➡️ Effect 1: I run on every single render!");
// //   });

// //   // Effect 2: Runs ONLY when 'count' changes
// //   useEffect(() => {
// //     console.log(`➡️ Effect 2: Count updated to ${count}`);
// //   }, [count]);

// //   // Effect 3: Runs ONLY ONCE on mount (empty deps array)
// //   useEffect(() => {
// //     console.log("➡️ Effect 3: Component Mounted! (I only run once)");
// //   }, []);
// //   useEffect (() => {

// //     let timer = setTimeout(() => console.log("timer") , 3000);
// //     return () => clearTimeout(timer)
// //   }, [])
//     const logVisit = () => {
//         console.log("visit room", roomId, theme)
//     }

//     const connect = useEffectEvent(() => {
//         console.log(theme);
//         logVisit(roomId, theme); // Always has the freshest theme and roomID
//   });
//     useEffect(() => {
//           connect();
//     }, [roomId]);

   
//     const handleChangeTheme = () => {
//         setTheme(theme => !theme)
//     }

//     useEffect(() => {
//         const timer = setInterval(() => {
//             // setRoomId(3456);
//             // connect();
//         }, 3000);
//         return () => {clearInterval(timer)}
//     }, [])
//     return(
//         <div className="ml-20">
//             <h1 className={`text-${theme ? 'gray' : 'black'}-500 font-bold`}>Hello every one</h1>
//             <button onClick={handleChangeTheme}>Change Theme</button>
//         </div>
//     )
// }

// export default EventEffect


export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

//   const onTick = useEffectEvent(() => {
//     setCount(count + increment);
//   });

//   useEffect(() => {
//     const id = setInterval(() => {
//       onTick();
//     }, 1000);
//     return () => {
//       clearInterval(id);
//     };
//   }, []);

// const onTick = () => {
//     setCount(count + increment);
// }

// useEffect(() => {
//     const id = setInterval(() => {
//         onTick();
//     }, 1000);
//     return () => clearInterval(id);
// }, [count])



  return (
    <>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />
      <p>
        Every second, increment by:
        <button disabled={increment === 0} onClick={() => {
          setIncrement(i => i - 1);
        }}>–</button>
        <b>{increment}</b>
        <button onClick={() => {
          setIncrement(i => i + 1);
        }}>+</button>
      </p>
    </>
  );
}