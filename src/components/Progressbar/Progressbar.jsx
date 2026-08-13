import { useState } from "react"
import './progress.css'

const Progressbar = () => {
    const [value, setValue] = useState(0);
  return (
        <div className="outter">
            <div className="inner">{value}</div>
        </div>
  )
}

export default Progressbar
