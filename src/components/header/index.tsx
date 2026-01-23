import React from 'react'
import logo from "../../assets/svg/logo.svg"
import { Link, useLocation } from 'react-router-dom'
const Header = () => {
  const {pathname} = useLocation();
  return (
    <div className='py-3 border-b border-[0.30px] border-solid border-[rgba(70,163,88,0.5)]'>
      <div className="container flex items-center">
     <Link to={"/"}>     <img src={logo} alt="" /></Link>
        <div className="flex items-center gap-4">
         <Link className={`${pathname === "/" && " border-solid  border-b-[3px] border-b-[#46a358]"} font-bold text-base text-[#3d3d3d]`} to={"/"}>Home</Link>
         <Link className={`${pathname === "/blog" && " border-solid  border-b-[3px] border-b-[#46a358]"} font-bold text-base text-[#3d3d3d]`} to={"/blog"}>Blog</Link>
        </div>
      </div>
    </div>
  )
}

export default Header