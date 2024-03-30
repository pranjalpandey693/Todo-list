import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Draggable } from 'react-beautiful-dnd';


const  Container = styled.div`${tw` border border-gray-500  p-2 mb-2`}
background-color: ${props=>( props.isDragDisabled?'lightgrey':  props.isDragging? 'lightgreen': 'white')};
`


function Task({task,index, provided}) {

  return (
    
    <Draggable 
    key={task.id} 
    draggableId={task.id}
    index={index}  
 
     >
     
   {   
     (provided, snapshot )=>(     
        <Container 
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
      

         className='bg-slate-600 m-7'>
          {task.content}
          </Container>) }
  </Draggable>
  );
}
 
export default Task;
