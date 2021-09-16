import React, {useState} from 'react'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import style from './Modal.module.scss'

export default function Modal({retask, saveNewTask}) {
    const [value, setValue] = useState(retask)

    function reInpTask(e) {
        let newObj ={...value}
        newObj.title = e.target.value
        setValue(newObj)
    }

    function handleClick (){
        saveNewTask(value)
    }
    return (
        <div className = {style.mainModal}>
            <div className = {style.ntModal}>
               <div>
                   <Button>❌</Button>
                   <Input 
                   value={value.title}
                   onChange={reInpTask}
                   />
                   
                   <Button onClick={handleClick}>save</Button>
               </div>
            </div>
        </div>
    )
}
