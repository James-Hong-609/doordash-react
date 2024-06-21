import React from "react";
import { NavLink } from "react-router-dom";

export default function ({ icon, title, link, active }) {
  return (
    <li className={`${title == "Home" ? 'mt-0' : 'mt-1'}`}>
      <NavLink to={link} className={`${active ? 'bg-red-50' : 'bg-white hover:bg-gray' } b-0 rounded-lg block no-underline p-0 text-left w-full max-w-full text-16px leading-none cursor-pointer outline-none`} aria-current="true">
        <div className=" py-2 px-4 w-full min-h-10 max-w-full flex-nowrap flex items-start justify-start flex-row">
          <span className="w-6 flex justify-center items-center" style={{ flex: '0 0 auto' }}>
            <div className={`h-6 w-6 ${active ? 'bg-red-600' : 'bg-black'}`} style={{ mask: `url(${icon}) center center no-repeat` }}>
            </div>
          </span>
          <div className=" opacity-100 pointer-events-auto transform-none flex whitespace-nowrap flex-auto items-center overflow-hidden ml-3">
            <span className="flex-auto overflow-hidden">
              <span>
                <span className={`${active ? 'text-red-600 font-bold ' : 'text-gray-900 font-medium'} font-mine1 text-14px leading-5 tracking-normal no-underline normal-case block text-ellipsis max-w-full overflow-hidden whitespace-nowrap m-0 pt-0.5`}>
                  {title}
                </span>
              </span>
              <span>
              </span>
            </span>
          </div>
        </div>
      </NavLink>
    </li>
  )
}