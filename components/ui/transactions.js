import BaseButton from "../interaction/Base-button";

 
 
 
const TransactionsBox = () => {
 return (
  <section className="bg-gradient-to-b from-teal-500 to-gray-300 w-80  mx-auto p-2 rounded-md">
   <p>I am TransactionsBox</p>
   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition delay-100 duration-500 ease-in-out">add category</button>
   <BaseButton success/>
   <BaseButton danger/>
   <BaseButton />
  </section>
 )
}
 
export default TransactionsBox;

/* 
GREEN BUTTONS

create new
ok
accept

RED BUTTONS

cancel
delete
close

UI BUTTONS

all layout interface




*/