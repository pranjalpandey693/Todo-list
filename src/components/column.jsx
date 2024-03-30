import React from 'react';
import styled from 'styled-components'
import Task from './task';
import { Droppable } from 'react-beautiful-dnd';


const Container = styled.div`
 margin:8px;
 border:1px solid black;
 padding:8px;
 width:250px;

 display:flex;
 flex-direction: column;

 `
const Tittle = styled.h3`
padding:8px;`
const TaskList = styled.div`
padding:8px;
transition: background-color 0.2s ease;
background-color: ${props=>(props.isDraggingOver? 'skyblue': 'whijte')}  ;

flex-grow:1;
min-height:200px;

`



function Column({column,tasks,isDropDisabled}) {
  return (
 

        <Container>
              <Tittle>{column.tittle}</Tittle>
           <Droppable droppableId={column.id } 
                      isDropDisabled={isDropDisabled} >
            {(provided,snapshot)=>(
              <TaskList  ref={provided.innerRef}
               {...provided.droppableProps}
               isDraggingOver={snapshot.isDraggingOver}
              >
                  {tasks.map((task, index)=>(
                  <Task key={task.id} task={task} index={index}/>
                  ))}
                 {provided.placeholder} 
                  </TaskList>
              )}
              </Droppable>             
      </Container>

   
   );
}

export default Column;

