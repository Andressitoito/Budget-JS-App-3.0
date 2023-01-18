import Navbar from "./navbar";




const Layout = (props) => {
 return (
  <div>
   <Navbar />
   <main className=" md:mt-16 mt-20">{props.children}</main>
  </div>
 )
}

export default Layout;