"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
interface NavBarProps {
  location?: "header" | "footer" | string;
  onClose?: (value:boolean)=> void;
}
  const menuItems = [
    {name:"Home", label: "", href:"/"},
    {name:"About", label:"Our Guiding Philosophy", href:"/about"},
    {name:"Services", label:"Pillars of Care & Services",  href:"/services"},
    {name:"Gallery", label:"Estate Gallery",  href:"/gallery"},
    {name:"Contact", label:"Arrange a Private Tour", href:"/contact"},
  ];
const NavBar = ({location = "header", onClose }: NavBarProps) => {

  const pathname = usePathname();

  return (
    <>
      {menuItems.map((item) => {
        
      const isActive = item.href === '/' 
      ? pathname === '/' 
      : pathname.startsWith(item.href);

      const displayName = location === "footer" ? (item.label || item.name) : item.name;
   
        return(
        <Link key={item.name} href={item.href}
        className={isActive ? 'text-[#c5a059] transition-all duration-300' : ''}
        onClick={()=>onClose?.(false)}
        >
          {displayName}
        </Link>
        
      
        )
      
      
      })}
    </>
  )
}

export default NavBar