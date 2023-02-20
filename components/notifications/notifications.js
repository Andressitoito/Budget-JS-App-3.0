import { useState } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createPortal } from 'react-dom';

const Notification = (props) => {

 const { title, message, status } = props

 let statusClasses = ''

 if (status === 'success') {
  status.Classes = 'success'
 }



 return (
  <div className='fixed bottom-0 z-50 bg-blue-400 md:w-[50%] w-[75%] md:ml-[25%] ml-[12.5%] rounded-md outline-2 outline-blue-500'>


   <div className="border-blue-300 border-4 rounded-md">
    <h2 className='text-2xl text-center'>Titles</h2>
    <p className='text-xl text-center'>Messages and more messeeages</p>
   </div>
  </div>
 )
}



export default Notification;