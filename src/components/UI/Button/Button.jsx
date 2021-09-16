import React from 'react'
import style from './Button.module.scss'

export default function Button({children, saveDataMain, onClick}) {
    return (
        <button 
        className={style.myBtn}
        // onClick={saveDataMain}
        onClick={onClick}
        
        >
            {children}
            </button>
    )
}
