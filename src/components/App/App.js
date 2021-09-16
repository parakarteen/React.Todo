import React, {useState} from 'react';

import Header from '../Header/Header';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import TaskList from '../TaskList/TaskList';
import style from './App.module.scss';
import Modal from '../Modal/Modal';



function App() {
  const [inpValue, setInpValue] = useState('')
  const [task, setTask] = useState([])
  const[modal, setModal] = useState(false)
  const [retask, setRetask] = useState({})

  function changeMainInput (event) {
setInpValue(event);
  }
 


  function saveDataMain (){
    if(inpValue){
      const newObj = {
        id: Date.now(),
        title: inpValue,
        status: false
    }
    setTask([...task, newObj])
    setInpValue('')
    }else alert('enter smth...')
  
    

    
  }
  function taskDelete(id) {
    setTask(task.filter(item => item.id != id))
  }

  function changeStatus(id) {
    let newTask = task.map(item => {
      if(item.id == id) {
        item.status = !item.status
      }
      return item
    })
   setTask(newTask)
  //  console.log(newTask);

  
  }


  function changeTask(index) {
    setModal(!modal)
    setRetask(task[index])
    
  }

  function saveNewTask(newTask) {
    const newObj = task.map(item => {
      if (item.id === newTask.id) {
        return newTask
      }
      return item
    })
    setTask(newObj)
    setModal(!modal)
  }
  return (
    <>
   <Header />
   <div className={style.container}>
     <div>
       <Input 
      value={inpValue}
       onChange={e => setInpValue(e.target.value)}
       />
       <Button
       onClick = {saveDataMain}
       >save</Button>
     </div>
     
     {
       task.length ? <TaskList
       task={task}
     taskDelete={taskDelete}
     changeStatus ={changeStatus}
     changeTask = {changeTask}
     /> : 'no tasks'
}
   </div>
   {
     modal ? 
     <Modal
     retask={retask}
     saveNewTask={saveNewTask}
     />
     : null
   }
   </>
  )
  


}
export default App;

// function App() {
// const [inputData, setInputData] = useState('')
// const [objData, setObjData] = useState([])
// // const [deleteBtn, setDeleteBtn] = useState(null)

//   function inputChange(inputValue) {
//     setInputData(inputValue)
//   }

// function handleObj() {
//   const obj = {
//     id: Date.now(),
//     title: inputData
//   }
//   setObjData([...objData, obj])
// }




 
// function deleteB (i) {
// objData.splice(i, 1);
// }
//  function update (obj, i) {
//    const arr = objData;
//    arr[i] = obj;
//  }
//   return (
//     <>
//     <AddTodo 
//     inputChange={inputChange}
//     handleObj={handleObj}
//     />
//     <TodoList objData = {objData}
//     />
//     </>
//   );
// }


