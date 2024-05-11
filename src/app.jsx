import styled from "styled-components"
import { DndTodo } from "./components/dnd"
import tw from "twin.macro"



export default function App(){
    const Head = styled.div`
    ${tw`flex justify-center items-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl`}
    `
    const Wrapper = styled.div`
    ${tw`flex justify-center items-center`}
    `
return (
    <>
     <Head>To-do list</Head>
     
    <DndTodo/>
   
    </>
)
}