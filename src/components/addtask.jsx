import { useState } from "react"
import { Button,TextField } from "@mui/material"
import { Add } from "@mui/icons-material"


export default function Addtask({onaddtask}){
    const [text,settext] = useState('')

    return (

        <>
      

<TextField id="outlined-basic" label="Add task" variant="outlined" type="text"  color="grey" 
size="small" 
         
         value={text}
         onChange={(e)=> settext(e.target.value)} />
         
         <Button
         
         size="medium"
         startIcon={<Add/>}
         variant="contained"
         onClick={()=>{
            settext('')
            onaddtask(text)
            console.log(text)
         }}
         >add</Button>
         </>
    )
}

