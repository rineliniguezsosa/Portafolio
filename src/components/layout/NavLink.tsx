import { NavLinkProps } from "../../types/interfaces"


export const NavLink = ({location,onClick,title}: NavLinkProps) => {
  return (
    <a 
        onClick={onClick} 
        href={location} 
        className='w-full text-white text-center px-5 py-5 font-raleway font-bold font-xl'>
                {title}
    </a>
  )
}
