import BaseButton from "../interaction/Base-button";



const CreateNewOrganizationForm = () => {
 return (
  <div className="flex flex-wrap gap-3">
  <input
   type="text"
   className="form-control block w-full px-4  font-normal bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
   placeholder="Insert Organization Name"
  />
  <BaseButton text={'Create New organization'} w_full p_xl/>
 </div>
 )
}

export default CreateNewOrganizationForm;