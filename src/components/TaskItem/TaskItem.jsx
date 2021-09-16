import React from 'react'
import style from './Task.module.scss'

export default function taskItem({children, item}) {
    return (
        <li className={item.status ? `${style.done} ${style.item}` : style.item}>
            {children}
        </li>
    )
}
