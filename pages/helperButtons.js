import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import BaseButton from "../components/interaction/Base-button";
import { signIn } from "../features/auth/user";



const HelperButtons = () => {

 const { user } = useSelector((state) => state)
 const dispatch = useDispatch()

 const router = useRouter()


 const handleClickDatabaseCall = async (e) => {
  e.preventDefault()

  const response = await fetch('/api/data/find_user')
  const data = await response.json()

  console.log(data)

 }

 const handleClick_createNewOrganization = async () => {

  const DUMMY_USER = {
    name: 'Max',
    lastname: 'Wai'
  }

  const response = await fetch('/api/data/create_new_organization', {
   method: 'POST',
   body: JSON.stringify(DUMMY_USER),
   headers: {
    'Content-Type': 'application/json'
   }
  })

  const data = await response.json()

  console.log('ESTA ES LA DATA')
  console.log(data)
 }


 const handleClick_createNewOrganization_GET = async (e) => {

  e.preventDefault()

  console.log('ORGANIZATION GET')

  const DUMMY_USER = {
    name: 'Max',
    lastname: 'Wai'
  }

  const response = await fetch('/api/data/create_new_organization')

  const data = await response.json()

  console.log('ESTA ES LA DATA')
  console.log(data)
 }

 

 const setUser = () => {
  console.log('set User')

  dispatch(signIn({
   name: 'jhon',
   lastname: 'doe'
  }))

 }



 const showUser = () => {
  console.log('show user')

  console.log(user)
 }


 return (
  <>
   <div className="m-4 flex flex-wrap gap-3">

    <BaseButton onClick={(e) => handleClickDatabaseCall(e)} text={'Fetch Database'} />


    <BaseButton onClick={(e) => handleClick_createNewOrganization(e)} text={'Create Organization'} />

    <BaseButton onClick={(e) => handleClick_createNewOrganization_GET(e)} text={'Create Organization METHOD GET'} />


    <BaseButton onClick={(e) => setUser(e)} text={'Set user'} />


    <BaseButton onClick={(e) => showUser(e)}
     text={'Show user'} />

   </div>

  </>
 )
}

export default HelperButtons;