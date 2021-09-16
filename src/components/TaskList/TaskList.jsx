import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import Button from '../UI/Button/Button';
import InputCheckBox from '../UI/InputCheckBox/InputCheckBox'
import style from './TaskList.module.scss'

export default function TaskList({task, taskDelete, changeStatus, changeTask}) {
    console.log(task);
    return (
       <ul className={style.list}>
           {
               task.map((item,index)=>(
              <TaskItem key={item.id} item = {item}>
                  {item.title}
                  <Button onClick={()=>changeTask(index)}>Change</Button>
                  <InputCheckBox onClick={()=> changeStatus(item.id)}/>
                  <Button onClick={() => taskDelete(item.id)}>Delete</Button>
                  </TaskItem>
               ))
           }
       </ul>
    )
}
