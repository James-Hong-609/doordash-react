import React from "react";
import NavItem from './NavItem';
import { navItems } from "../constants";
import { useLocation } from 'react-router-dom'


const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 top-16 z-450">
      <div className="absolute top-0 left-0 h-full bg-white border-r border-gray-200" style={{ transition: 'box-shadow 225ms cubic-bezier(0.83, 0, 0.17, 1) 0s' }}>
        <nav className="w-220 max-w-none h-full flex flex-col items-stretch justify-stretch">
          <div className="flex-auto overflow-y-auto p-3">
            <ul className="list-none m-0 p-0 max-w-full .active">
              {
                navItems.map(({ title, link, icon }, index) => (
                  <NavItem key={title} title={title} link={link} icon={icon} active={location.pathname === link}/>
                ))
              }
              <li className="mt-1" role="presentation" aria-hidden='true'>
                <div className="py-1 px-4">
                  <div className="w-full pl-0 mt-3 mb-3">
                    <hr className="block w-full m-0 border-none h-px bg-slate-100" />
                  </div>
                </div>
              </li>
            </ul>
            <ul className="mt-1 list-none m-0 p-0 max-w-full">
              <li className="prism-side-nav-item">
                <button className=" border-0 rounded-lg bg-white block no-underline p-0 text-left w-full max-w-full text-16px leading-none cursor-pointer outline-none">
                  <div className="py-1 px-4 w-full min-h-10 max-w-full flex-nowrap flex items-center justify-start flex-row">
                    <span className="w-6 flex justify-center items-center" style={{ flex: '0 0 auto' }}>
                      <div className="h-6 w-6 bg-black" style={{ mask: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAxM0MxMy4yNDI2IDEzIDE0LjI1IDExLjk5MjYgMTQuMjUgMTAuNzVDMTQuMjUgOS41MDczNiAxMy4yNDI2IDguNSAxMiA4LjVDMTAuNzU3NCA4LjUgOS43NSA5LjUwNzM2IDkuNzUgMTAuNzVDOS43NSAxMS45OTI2IDEwLjc1NzQgMTMgMTIgMTNaTTEyIDE1QzE0LjM0NzIgMTUgMTYuMjUgMTMuMDk3MiAxNi4yNSAxMC43NUMxNi4yNSA4LjQwMjc5IDE0LjM0NzIgNi41IDEyIDYuNUM5LjY1Mjc5IDYuNSA3Ljc1IDguNDAyNzkgNy43NSAxMC43NUM3Ljc1IDEzLjA5NzIgOS42NTI3OSAxNSAxMiAxNVoiIGZpbGw9IiMxOTE5MTkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyMkMxNy41MjI4IDIyIDIyIDE3LjUyMjggMjIgMTJDMjIgNi40NzcxNSAxNy41MjI4IDIgMTIgMkM2LjQ3NzE1IDIgMiA2LjQ3NzE1IDIgMTJDMiAxNy41MjI4IDYuNDc3MTUgMjIgMTIgMjJaTTEyIDRDMTYuNDE4MyA0IDIwIDcuNTgxNzIgMjAgMTJDMjAgMTQuMTkzNyAxOS4xMTcxIDE2LjE4MTEgMTcuNjg3MiAxNy42MjY0QzE2LjQxMSAxNi42NDU1IDE0LjU2NTYgMTYgMTIgMTZDOS40MzQ0IDE2IDcuNTg5MDUgMTYuNjQ1NSA2LjMxMjgyIDE3LjYyNjRDNC44ODI5NCAxNi4xODExIDQgMTQuMTkzNyA0IDEyQzQgNy41ODE3MiA3LjU4MTcyIDQgMTIgNFpNMTYuMDI3MyAxOC45MTM5QzE1LjE0MTggMTguMzgzOSAxMy44NTg4IDE4IDEyIDE4QzEwLjE0MTIgMTggOC44NTgyIDE4LjM4MzkgNy45NzI3MSAxOC45MTM5QzkuMTU1NTUgMTkuNjA0NCAxMC41MzE2IDIwIDEyIDIwQzEzLjQ2ODQgMjAgMTQuODQ0NSAxOS42MDQ0IDE2LjAyNzMgMTguOTEzOVoiIGZpbGw9IiMxOTE5MTkiLz4KPC9zdmc+Cg==) no-repeat center' }}></div>
                    </span>
                    <div className="opacity-100 pointer-events-auto transform-none flex whitespace-nowrap flex-auto items-center overflow-hidden ml-3">
                      <span className="flex-auto overflow-hidden">
                        <span>
                          <span className=" text-gray-900 font-mine1 text-14px font-medium leading-5 tracking-normal no-underline normal-case block text-ellipsis max-w-full overflow-hidden whitespace-nowrap m-0 pt-0.5">Sign up or Login
                          </span>
                        </span>
                        <span>
                        </span>
                      </span>
                    </div>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar;