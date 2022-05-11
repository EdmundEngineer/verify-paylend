import Link from 'next/link'
import Image from 'next/image';
const Navbar = () => {
    return (  <div>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="" className="flex items-center">
        <Image
        src= {"/assets/images/logo.png"}
        alt= {"Paylend Logo"}
        width={"100px"}
        height={"34px"}/>
    </a>
  
  </div>
</nav>
    </div>);
}
 
export default Navbar;