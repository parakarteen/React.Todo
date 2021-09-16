import React from 'react'
import style from './InputCheckBox.module.scss'

export default function InputCheckbox({onClick}) {
    return (
       <input 
       className = {style.box}
       type="checkbox"
       onClick={onClick}
       />
    )
}
