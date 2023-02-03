import io from 'socket.io-client'
import { useEffect, useState } from 'react';

let socket



const RealTimeTest = () => {

 const [input, setInput] = useState('')


 const socketInitializer = async () => {

  await fetch('/api/socket')

  socket = io()

  socket.on('connect', ()=>{
   console.log('connected')
  })


 }

 useEffect(() => {

  socketInitializer()

 }, [])




 return (
  <>
   <p>I am RealTimeTest</p>
  </>
 )
}

export default RealTimeTest;