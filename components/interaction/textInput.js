


const TextInput = (props) => {
 return (
  <div>
   <input type={props.type} id={props.id} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 " placeholder={props.placeholder} required={props.required} />


   <input 
   type='text' 
   className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" 
   placeholder="Finance, Groceries, Dates, etc..." required />




  </div>
 )
}

export default TextInput;