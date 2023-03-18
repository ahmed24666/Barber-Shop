import React from 'react'
import './loader.scss'
import SkewLoader from "react-spinners/SkewLoader";
const Loader = () => {
    return (
        <div className='Loader'>
            <SkewLoader
            color="#96885f"
            size={50}
            />
        </div>
    )
}

export default Loader