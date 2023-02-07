import BaseButton from "../components/interaction/Base-button";



const HelperButtons = () => {


 const handleClickDatabaseCall = async (e) => {
  e.preventDefault()

  const res = await fetch('/api/data/find_user')

  const data = await res.json()

  console.log(data)

 }

 const handleClick_createNewOrganization = async () => {
  const res = await fetch('/api/data/create_new_organization')

  const data = res.json()

  console.log(data)
 }




 return (
  <>
   <div className="m-4 flex flex-wrap gap-3">

    <BaseButton onClick={(e) => handleClickDatabaseCall(e)} text={'Fetch Database'}></BaseButton>
    <BaseButton onClick={(e) => handleClick_createNewOrganization(e)} text={'Create Organization'}></BaseButton>

   </div>

  </>
 )
}

export default HelperButtons;