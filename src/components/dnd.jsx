import { initialdata } from "./data";
import { useEffect, useState } from "react";
import styled from 'styled-components'
import Column from "./column";
import { DragDropContext} from 'react-beautiful-dnd'
import Addtask from "./addtask";




const Container = styled.div`
 display:flex;

 `


export  const DndTodo =  ()=>{
   
 const [data, setdata] = useState(initialdata);
 const [homeindex, setindex]= useState(Number);

 const onDragStart = start => {
  const homeindex = data.columnorder.indexOf(start.source.droppableId)

  setindex( homeindex)

 }
 
 const addTask = (text)=>{
       const taskCount = Object.keys(data.task).length
       const newCount = taskCount+1
       const newTaskId = `task-${newCount}`

       const newTask = {
        id: newTaskId,
        content:text
       }

       const newOrder = data.columns["column-1"]
       const newtaskIds = Array.from(newOrder.taskIds)
       newtaskIds.splice(newtaskIds.length,0,newTaskId)

       const newcolumn  = {
        ...newOrder,
        taskIds: newtaskIds,
    }




       
       const newState = {
        ...data,
        task:{
            ...data.task,
            [newTaskId]:newTask
            },
        columns:{
            ...data.columns,
            [newcolumn.id]:newcolumn

        }
        }
            setdata(newState);
        
        }


 
 const onDragEnd = result =>
 {    
    setindex(null)
    
    
     const {destination , source ,draggableId } = result;
     
     if(!destination){
         return;
     }
 
     if(
         destination.droppableId === source.droppableId&&
         destination.index === source.index
     ) {
         return;
     }
     const start = data.columns[source.droppableId]
     const finish = data.columns[destination.droppableId]
      
     if(start=== finish){

        const newtaskIds = Array.from(start.taskIds)
        newtaskIds.splice(source.index,1)
        newtaskIds.splice(destination.index,0,draggableId)
        const newcolumn  = {
            ...start,
            taskIds: newtaskIds,
        }
        
        const newstate = {
            ...data,
           columns:{
            ...data.columns,
            [newcolumn.id]:newcolumn
    
           }
        }
   
        setdata(newstate);
        return
     }
 
     //moving from one list to another 
     
     const starttaskIds = Array.from(start.taskIds)
     starttaskIds.splice(source.index,1)

     const endtaskIds = Array.from(finish.taskIds)
     endtaskIds.splice(destination.index,0,draggableId)

     const newstartcolumn = {
        ...start,
        taskIds: starttaskIds,
     }

     const newendcolumn = {
        ...finish,
        taskIds: endtaskIds,
     }

     const newstatetwo = {
        ...data,
        columns:{
            ...data.columns,
            [newstartcolumn.id]:newstartcolumn,
            [newendcolumn.id]:newendcolumn,
        },
     }

     setdata(newstatetwo);



     

   
 
 }

    return (
        <> 
        <Addtask onaddtask={addTask}/>
    
            <DragDropContext   onDragEnd={onDragEnd}
                         onDragStart={onDragStart} >
         <Container>
    {data.columnorder.map((columnId,index)=>{
        const column = data.columns[columnId]
        const tasks = column.taskIds.map(taskid=> data.task[taskid])
        const isDropDisbled = index < homeindex
        
       return <Column 
                        key={column.id} 
                        column={column} 
                        tasks={tasks} 
                        isDropDisabled={isDropDisbled}
                 />
    
    })}
    </Container>
   
    </DragDropContext>
    </>

    )


    
} 