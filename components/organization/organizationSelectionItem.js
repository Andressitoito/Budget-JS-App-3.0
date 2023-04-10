import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { updateOrganizationData } from "../../features/auth/organizationData";
import { setCurrentCategory } from "../../features/Category/categoryData";

const OrganizationSelectionItem = ({ owner, organization_name, organization_id, localStorageSaveOrganizationData }) => {

 const router = useRouter();

 const dispatch = useDispatch()

 const handleClickSetOrganization = () => {
  console.log("set organization");
  localStorageSaveOrganizationData(organization_id)
  dispatch(updateOrganizationData(organization_id))
  dispatch(setCurrentCategory(null))
  router.replace('/home')
 };

 return (
  <div
   onClick={handleClickSetOrganization}
   className="relative bg-msk-200 rounded-md hover:cursor-pointer hover:bg-green-500 hover:shadow-xl 
  transform hover:scale-110 duration-500  "
  >
   <div className="bg-msk-300 relative text-2xl md:text-xl rounded-md m-1">
    <p className="bg-msk-600 txt-msk-100 text-center text-3xl right-0 rounded-sm top-[-5px] font-bold">
     {organization_name}
    </p>
    <p className="bg-blue-200 font-semibold w-full  text-center text-xl md:text-md text-blue-900 px-1">
     {owner ? "Organization Owned" : "Invited as Guest"}
     {/* <span className="font-bold italic text-blue-800 ml-7"> </span> */}
    </p>
   </div>
  </div>
 );
};

export default OrganizationSelectionItem;
