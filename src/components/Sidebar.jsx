import React from "react";

class Sidebar extends React.Component {
  render () {
    return (
      <div className="fixed bottom-0 top-16 z-450">
        <div className="absolute top-0 left-0 h-full bg-white border-r border-gray-200" style={{transition: 'box-shadow 225ms cubic-bezier(0.83, 0, 0.17, 1) 0s'}}>
          <nav className="w-220 max-w-none h-full flex flex-col items-stretch justify-stretch">
            <div className="flex-auto overflow-y-auto p-3">
              <ul className="list-none m-0 p-0 max-w-full">
                <li className="prism-side-nav-item" id="Home">
                  <a href="/home/" className="b-0 rounded-lg bg-red-50  block no-underline p-0 text-left w-full max-w-full text-16px leading-none cursor-pointer outline-none" aria-current="true">
                    <div className=" py-2 px-4 w-full min-h-10 max-w-full flex-nowrap flex items-start justify-start flex-row">
                      <span className="w-6 flex justify-center items-center" style={{flex: '0 0 auto'}}>
                        <div className=" h-6 w-6 bg-red-600" style={{mask: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMCAxMS45MDQ1QzIyLjE5NTkgMTEuMzEzOSAyMi44MjA3IDguMTQyNTEgMjAuNjY2NCA2LjgyNzQzTDEzLjQwODIgMi4zOTY4NEMxMi41NDE0IDEuODY3NzIgMTEuNDU4NiAxLjg2NzcyIDEwLjU5MTggMi4zOTY4NEwzLjMzMzYyIDYuODI3NDJDMS4xNzkyNyA4LjE0MjUxIDEuODA0MDUgMTEuMzEzOSA0IDExLjkwNDVWMTlDNCAyMC42NTY5IDUuMzQzMTUgMjIgNyAyMkgxN0MxOC42NTY5IDIyIDIwIDIwLjY1NjkgMjAgMTlWMTEuOTA0NVpNNC41IDEwQzMuNzQyODkgMTAgMy43MDgxNSA4Ljk2MDM2IDQuMzU3MzcgOC41NjQwNkwxMS42MTU1IDQuMTMzNDdDMTEuODUxOSAzLjk4OTE3IDEyLjE0NzIgMy45ODkxNyAxMi4zODM2IDQuMTMzNDdMMTkuNjQxOCA4LjU2NDA2QzIwLjI5MSA4Ljk2MDM2IDIwIDEwIDE5IDEwQzE4LjQ0NzcgMTAgMTggMTAuNDQ3NyAxOCAxMVYxOUMxOCAxOS41NTIzIDE3LjU1MjMgMjAgMTcgMjBIMTRWMTRDMTQgMTIuODk1NCAxMy4xMDQ2IDEyIDEyIDEyQzEwLjg5NTQgMTIgMTAgMTIuODk1NCAxMCAxNFYyMEg3QzYuNDQ3NzIgMjAgNiAxOS41NTIzIDYgMTlWMTEuNUM2IDEwLjY3MTYgNS4zMjg0MyAxMCA0LjUgMTBaIiBmaWxsPSIjMTkxOTE5Ii8+Cjwvc3ZnPgo=") center center no-repeat'}}>
                        </div>
                      </span>
                      <div className=" opacity-100 pointer-events-auto transform-none flex whitespace-nowrap flex-auto items-center overflow-hidden ml-3">
                        <span className="flex-auto overflow-hidden">
                          <span>
                            <span className=" text-red-600 font-mine1 text-14px font-bold leading-5 tracking-normal no-underline normal-case block text-ellipsis max-w-full overflow-hidden whitespace-nowrap m-0 pt-0.5">Home
                            </span>
                          </span>
                          <span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="prism-side-nav-item mt-1" id="Grovery">
                  <a href="/tabs/grocery" className=" hover:bg-gray b-0 rounded-lg bg-white block no-underline p-0 text-left w-full max-w-full text-16px leading-none cursor-pointer outline-none" aria-current="true">
                    <div className=" py-2 px-4 w-full min-h-10 max-w-full flex-nowrap flex items-start justify-start flex-row">
                      <span className="w-6 flex justify-center items-center" style={{flex: '0 0 auto'}}>
                        <div className=" h-6 w-6 bg-black" style={{mask: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjU1NzY0IDUuNDMzODlDNi41NTk5MiA1LjUyMzAxIDYuNTYyMTcgNS42MTA1MSA2LjU2MjE3IDUuNjc5NzJDNi42MDA3NyA5LjQ4MTA5IDkuOTY5MjYgMTIuMTIwNSAxMy4wMDIzIDEyLjEyMDVDMTQuNTMyIDEyLjEyMDUgMTUuOTQ1NyAxMS41MzgyIDE2LjUyNCAxMS4xOTExQzE3LjcwODYgMTAuNDc1IDE4LjY4OCA5LjkzNDcgMTkuNTA4OCA5LjkzNDdDMjAuODA5NyA5LjkzNDcgMjIgMTEuMjc0NSAyMiAxMi44Mzg1QzIxLjk5OTkgMTQuNDAwNSAyMS4yOTk3IDE2LjAxODkgMjAuMjQ1NyAxNy4yNzc0QzE4LjI3NzYgMTkuNTk5MSAxNS4xODgyIDIxIDExLjk5ODIgMjFDMTEuMzA4IDIxIDEwLjYxOTYgMjAuOTIyNyA5LjkyMDA4IDIwLjgwMzRDNS42MDE0MyAyMC4wMzMxIDIuNzg0NTMgMTYuMTU5OSAyLjIwNjIzIDEwLjE5MjlDMi4wNDc5OSA4LjU5MTcyIDIuMDAwMzIgNi44NzY0MSAyLjAwMDMyIDUuMjc2ODJDMS45ODE2NiAzLjk3NDkzIDIuNzg0NTMgMy4wNjUwOSAzLjkxMzE2IDMuMDMyNTVDNC4wMTg5NSAzLjAzMjU1IDQuMTI0NjEgMy4wMjQ0MSA0LjIzMDI3IDMuMDE2MjdDNC4zMzU5NCAzLjAwODE0IDQuNDQxNjIgMyA0LjU0NzQzIDNDNS42MDQ1MSAzIDYuNDg3NTYgMy45MzMyNiA2LjU1Mjg0IDUuMTY5ODJDNi41NTI4NCA1LjI0NzE1IDYuNTU1MjYgNS4zNDE0MyA2LjU1NzY0IDUuNDMzODlaTTMuOTc4NDYgNS4yMDIzNkMzLjg5NDUxIDUuMjAyMzYgMy44NDc4NyA1LjIxMzIxIDMuODQ3ODcgNS4zNTQyNUMzLjg0Nzg3IDUuNDk1MjkgMy44NDc4NyA1LjY0NzE4IDMuODU3MiA1Ljc1NTY3QzMuODY1ODQgNi4xMDA4IDMuODgyNDkgNi41NDgzOSAzLjkwMzg1IDcuMDI4NDRMNC43OTg3MyA2LjkyNjIyQzQuNzQxNzcgNi41NDIxMiA0LjcxMDA4IDYuMTQ3OTEgNC43MDYgNS43NDQ4MlY1LjMwMDAxQzQuNzA2IDUuMjEzMjEgNC42Njg2OSA1LjE2OTgyIDQuNTc1NDIgNS4xNjk4MkwzLjk3ODQ2IDUuMjAyMzZaTTQuMDgxMDYgOS45NTQyN0M0LjA2MDE1IDkuNzMyNjUgNC4wMzc1IDkuNDMwMjMgNC4wMTQ4NCA5LjA4Mzc2TDUuMzUyNzkgOC45MzA5M0M2LjY5MzY4IDEyLjE3NTYgOS45MDg4OSAxNC4zMTU0IDEzLjAwMjMgMTQuMzE1NEMxNC44NDkxIDE0LjMxNTQgMTYuNTYxMyAxMy42MTA0IDE3LjM5MTQgMTMuMTExNEMxOC40MzYxIDEyLjQ4MjEgMTkuMTA3NyAxMi4yOTc3IDE5LjUwODggMTIuMjk3N0MxOS43NDIgMTIuMjk3NyAxOS44ODE5IDEyLjM2MjggMTkuOTQ3MiAxMi40Mzg3QzIwLjUxNjIgMTMuMTc2NCAxOS42Njc0IDE0Ljg3OTggMTguOTMwNSAxNS43NTg1QzE3LjU0MDcgMTcuMzk2NyAxNS4wOTY5IDE4LjgxOCAxMi4wMzc0IDE4LjgxOEMxMS40NDk4IDE4LjgxOCAxMC44NDM1IDE4Ljc2MzcgMTAuMjE4NiAxOC42NTUyQzUuMjY1NjQgMTcuNzc2NSA0LjMwNDkyIDEyLjI3NiA0LjA4MTA2IDkuOTU0MjdaIiBmaWxsPSIjMTkxOTE5Ii8+CjxwYXRoIGQ9Ik0xOC44NzgxIDguNzc4NThDMTguMjc1MyA4Ljc3ODU4IDE3LjYwOTYgOC45MjQzIDE2Ljg2NzUgOS4yMTg0OEMxNi45MjQxIDkuMDY5OTQgMTYuOTc1MSA4LjkyMzE1IDE3LjAyMDkgOC43Nzg5NUMxNy4yOTk0IDcuODk2MzggMTcuMzU5NCA3LjMwODE1IDE3LjMyNjYgNi45MzUwM0wxNy4zMjYyIDYuOTMwMTdDMTcuMjk0NyA2LjU1Mjc2IDE3LjE2NDYgNi40MjUyNSAxNy4wNzEyIDYuMzY5MjlDMTYuOTgzMSA2LjMyMzI2IDE2Ljg3MTYgNi4zMDI2MyAxNi43NDAxIDYuMzE4NTNDMTYuNjAxMSA2LjMzNTM0IDE2LjQ3ODQgNi4zODkxMSAxNi40MDI4IDYuNDQyOTZDMTYuMTU4OCA2LjYyNjY3IDE2LjAzOTcgNi43NzEzMyAxNS44NDUyIDcuMDA3NzFDMTUuNzM0NiA3LjE0MjE1IDE1LjU5OTYgNy4zMDYyOSAxNS40MDMyIDcuNTI0MTJDMTQuOTk0NyA3Ljk3OTkyIDE0LjUxNzcgOC40OTM3MiAxMy44NDIgOC45NzE5N0MxMy4yMDAyIDkuNDI2MzIgMTIuNDExIDkuODI3MTkgMTEuMzYgMTAuMTU2NEMxMC40MDEgOS45MTMyOCA5LjU1ODcgOS4zMTE0NSA4Ljk0MzYyIDguNTc0NjlDOS40NTA5NSA4LjUyMzY2IDEwLjAwOTEgOC40MTk2OSAxMC42MTMgOC4yMzk5N0wxMC42MTQyIDguMjM5NjFDMTEuNTgxOCA3Ljk1MzAyIDEyLjIyNTIgNy42MTk0OCAxMi43MDQ4IDcuMjgwMDJDMTMuMTg4MSA2LjkzNzg2IDEzLjU0MTIgNi41NjUzOCAxMy45MzAxIDYuMTMxNDhMMTMuOTMyMSA2LjEyOTI3QzE0LjAwNDggNi4wNDg2NyAxNC4wODQgNS45NTMxMSAxNC4xNzEgNS44NDgxOUMxNC40Mzg3IDUuNTI1MzMgMTQuNzgwMiA1LjExMzQ1IDE1LjIyODQgNC43Nzc4TDE1LjIzODkgNC43NzAyQzE1LjkwNTggNC4yODQwNiAxNy4wMjE0IDQuMDEyIDE4LjAyMjIgNC41NjA1OUwxOC4wMzc2IDQuNTY5MTlDMTguODI2NiA1LjAyMDAzIDE5LjI0MzkgNS44MzA1OSAxOS4zMjEzIDYuNzUzMDRDMTkuMzczMyA3LjM0NzMzIDE5LjI5ODEgOC4wMjMyOSAxOS4xMDUxIDguNzg1NDJDMTkuMDMxNCA4Ljc4MDkyIDE4Ljk1NTggOC43Nzg1OCAxOC44NzgxIDguNzc4NThaIiBmaWxsPSIjMTkxOTE5Ii8+Cjwvc3ZnPgo=") center center no-repeat'}}>
                        </div>
                      </span>
                      <div className=" opacity-100 pointer-events-auto transform-none flex whitespace-nowrap flex-auto items-center overflow-hidden ml-3">
                        <span className="flex-auto overflow-hidden">
                          <span>
                            <span className=" text-gray-900 font-mine1 text-14px font-medium leading-5 tracking-normal no-underline normal-case block text-ellipsis max-w-full overflow-hidden whitespace-nowrap m-0 pt-0.5">Grocery
                            </span>
                          </span>
                          <span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="prism-side-nav-item mt-1" id="Retail">
                  <a href="/tabs/retail" className=" hover:bg-gray b-0 b-0 rounded-lg bg-white block no-underline p-0 text-left w-full max-w-full text-16px leading-none cursor-pointer outline-none" aria-current="true">
                    <div className=" py-2 px-4 w-full min-h-10 max-w-full flex-nowrap flex items-start justify-start flex-row">
                      <span className="w-6 flex justify-center items-center" style={{flex: '0 0 auto'}}>
                        <div className=" h-6 w-6 bg-black" style={{mask: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNjk0NTggMTFDNy42OTQ1OCAxMC40NDc3IDguMTQyMjkgMTAgOC42OTQ1OCAxMEM5LjI0Njg2IDEwIDkuNjk0NTggMTAuNDQ3NyA5LjY5NDU4IDExVjEyQzkuNjk0NTggMTIuNTUyMyAxMC4xNDIzIDEzIDEwLjY5NDYgMTNIMTIuNjk0NkMxMy4yNDY5IDEzIDEzLjY5NDYgMTIuNTUyMyAxMy42OTQ2IDEyVjExQzEzLjY5NDYgMTAuNDQ3NyAxNC4xNDIzIDEwIDE0LjY5NDYgMTBDMTUuMjQ2OSAxMCAxNS42OTQ2IDEwLjQ0NzcgMTUuNjk0NiAxMVYxMkMxNS42OTQ2IDEzLjY1NjkgMTQuMzUxNCAxNSAxMi42OTQ2IDE1SDEwLjY5NDZDOS4wMzc3MiAxNSA3LjY5NDU4IDEzLjY1NjkgNy42OTQ1OCAxMlYxMVoiIGZpbGw9IiMxOTE5MTkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjY5NDU4IDVDNy42OTQ1OCAzLjM0MzE1IDkuMDM3NzIgMiAxMC42OTQ2IDJIMTIuNjk0NkMxNC4zNTE0IDIgMTUuNjk0NiAzLjM0MzE1IDE1LjY5NDYgNVY2SDE1Ljk2QzE3LjQ1MjkgNiAxOC43MTg3IDcuMDk3NzkgMTguOTI5OCA4LjU3NTczTDIwLjM1ODQgMTguNTc1N0MyMC42MTY2IDIwLjM4MyAxOS4yMTQyIDIyIDE3LjM4ODUgMjJINi4wMDA1NkM0LjE3NDkxIDIyIDIuNzcyNTMgMjAuMzgzIDMuMDMwNzEgMTguNTc1N0w0LjQ1OTI5IDguNTc1NzNDNC42NzA0MiA3LjA5Nzc5IDUuOTM2MTggNiA3LjQyOTEzIDZINy42OTQ1OFY1Wk0xMy42OTQ2IDVWNkg5LjY5NDU4VjVDOS42OTQ1OCA0LjQ0NzcxIDEwLjE0MjMgNCAxMC42OTQ2IDRIMTIuNjk0NkMxMy4yNDY5IDQgMTMuNjk0NiA0LjQ0NzcxIDEzLjY5NDYgNVpNNy40MjkxMyA4SDE1Ljk2QzE2LjQ1NzYgOCAxNi44Nzk1IDguMzY1OTMgMTYuOTQ5OSA4Ljg1ODU4TDE4LjM3ODUgMTguODU4NkMxOC40NjQ1IDE5LjQ2MSAxNy45OTcxIDIwIDE3LjM4ODUgMjBINi4wMDA1NkM1LjM5MjAxIDIwIDQuOTI0NTUgMTkuNDYxIDUuMDEwNjEgMTguODU4Nkw2LjQzOTE4IDguODU4NThDNi41MDk1NiA4LjM2NTkzIDYuOTMxNDggOCA3LjQyOTEzIDhaIiBmaWxsPSIjMTkxOTE5Ii8+Cjwvc3ZnPgo=") center center no-repeat'}}>
                        </div>
                      </span>
                      <div className=" opacity-100 pointer-events-auto transform-none flex whitespace-nowrap flex-auto items-center overflow-hidden ml-3">
                        <span className="flex-auto overflow-hidden">
                          <span>
                            <span className=" text-gray-900 font-mine1 text-14px font-medium leading-5 tracking-normal no-underline normal-case block text-ellipsis max-w-full overflow-hidden whitespace-nowrap m-0 pt-0.5">Retail
                            </span>
                          </span>
                          <span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="prism-side-nav-item mt-1" id="Convenience">
                  <a href="/tabs/convenience" className=" hover:bg-gray b-0 b-0 rounded-lg bg-white block no-underline p-0 text-left w-full max-w-full text-16px leading-none cursor-pointer outline-none" aria-current="true">
                    <div className=" py-2 px-4 w-full min-h-10 max-w-full flex-nowrap flex items-start justify-start flex-row">
                      <span className="w-6 flex justify-center items-center" style={{flex: '0 0 auto'}}>
                        <div className=" h-6 w-6 bg-black" style={{mask: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS44MDM4IDMuNzk0MkMxNS45MDkyIDIuNzc0NzUgMTYuNzY4MiAyIDE3Ljc5MzEgMkgyMEMyMC41NTIzIDIgMjEgMi40NDc3MiAyMSAzQzIxIDMuNTUyMjggMjAuNTUyMyA0IDIwIDRMMTcuNzkzMSA0TDE3LjQ4MjggN0gyMUMyMS41NTIzIDcgMjIgNy40NDc3MiAyMiA4QzIyIDguNTUyMjggMjEuNTUyMyA5IDIxIDlIMjAuODkxMkwxOS40OTMzIDIxLjExNDZDMTkuNDM1MSAyMS42MTkyIDE5LjAwNzggMjIgMTguNDk5OSAyMkwxMy45OTk5IDIxLjk5OTlDMTMuNDkyIDIxLjk5OTkgMTMuMDY0NyAyMS42MTkxIDEzLjAwNjUgMjEuMTE0NUwxMS42MDg3IDguOTk5OTNIMTEuNUMxMC45NDc3IDguOTk5OTMgMTAuNSA4LjU1MjIyIDEwLjUgNy45OTk5M0MxMC41IDcuNDQ3NjUgMTAuOTQ3NyA2Ljk5OTkzIDExLjUgNi45OTk5M0wxNS40NzIxIDdMMTUuODAzOCAzLjc5NDJaTTE4Ljg3OCA5TDE3LjYwODcgMjBMMTQuODkxMiAxOS45OTk5TDEzLjYyMiA4Ljk5OTkzTDE4Ljg3OCA5WiIgZmlsbD0iIzE5MTkxOSIvPgo8cGF0aCBkPSJNMTAuMzk1IDExLjU2NjhDMTAuMDQ3NiAxMS44MjM1IDkuNTY0NzUgMTIgOSAxMkM4LjIxNDg4IDEyIDcuNTg3OTYgMTEuNjU4OCA3LjI2MzU3IDExLjIzNTZMNi44MjgzOSAxMC42Njc4TDYuMTUwNSAxMC44OTYzQzUuOTU2MjggMTAuOTYxOCA1LjczNjUxIDExIDUuNSAxMUM0LjQ1MTgxIDExIDQgMTAuMzU1NiA0IDEwQzQgOS43MjA5NSA0LjIzMDYzIDkuMzA4MDUgNC44NjAyOCA5LjEwMDExTDUuNjU2NTMgOC44MzcxNEw1LjUzNjM2IDguMDA3MjRDNS41MTI0NSA3Ljg0MjE1IDUuNSA3LjY3MjgzIDUuNSA3LjVDNS41IDUuNTY3IDcuMDY3IDQgOSA0QzEwLjE4OTMgNCAxMS4yNDAxIDQuNTkzMjMgMTEuODcyNiA1LjQ5OTk0TDE0LjExOTMgNS40OTk5OEwxNC4xMjA1IDUuNDg4MzRDMTMuMzE3NCAzLjQ0NTgyIDExLjMyNzYgMiA5IDJDNS45NjI0MyAyIDMuNSA0LjQ2MjQzIDMuNSA3LjVMMy41MDAxMSA3LjUzNTY3QzIuNjQ3MTMgOC4wNDQ4NyAyIDguOTA3MyAyIDEwQzIgMTEuNTk3NSAzLjMyNzI1IDEyLjY2OTggNC43OTA3NSAxMi45MzU1TDguMDY3OTkgMjEuMzYyN0M4LjIxNzQ3IDIxLjc0NzEgOC41ODc1OCAyMi4wMDAzIDguOTk5OTkgMjIuMDAwM0M5LjQxMjQxIDIyLjAwMDMgOS43ODI1MiAyMS43NDcxIDkuOTMyIDIxLjM2MjdMMTEuMTYwNyAxOC4yMDMzTDEwLjY2OTcgMTMuOTQ3OEw4Ljk5OTk5IDE4LjI0MTJMNy4yMDcyNCAxMy42MzEzQzcuNzU0MyAxMy44NzAzIDguMzY1OTYgMTQgOSAxNEM5LjU3NTgxIDE0IDEwLjEzMzIgMTMuODkzIDEwLjY0MDQgMTMuNjk0NEwxMC4zOTUgMTEuNTY2OFoiIGZpbGw9IiMxOTE5MTkiLz4KPC9zdmc+Cg==") center center no-repeat'}}>
                        </div>
                      </span>
                      <div className=" opacity-100 pointer-events-auto transform-none flex whitespace-nowrap flex-auto items-center overflow-hidden ml-3">
                        <span className="flex-auto overflow-hidden">
                          <span>
                            <span className=" text-gray-900 font-mine1 text-14px font-medium leading-5 tracking-normal no-underline normal-case block text-ellipsis max-w-full overflow-hidden whitespace-nowrap m-0 pt-0.5">Convenience
                            </span>
                          </span>
                          <span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="prism-side-nav-item mt-1" id="Alcohol">
                  <a href="/tabs/alcohol" className=" hover:bg-gray b-0 b-0 rounded-lg bg-white block no-underline p-0 text-left w-full max-w-full text-16px leading-none cursor-pointer outline-none" aria-current="true">
                    <div className=" py-2 px-4 w-full min-h-10 max-w-full flex-nowrap flex items-start justify-start flex-row">
                      <span className="w-6 flex justify-center items-center" style={{flex: '0 0 auto'}}>
                        <div className=" h-6 w-6 bg-black" style={{mask: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS4yMDcxIDEuNzkyODlDMTkuNTk3NiAyLjE4MzQyIDE5LjU5NzYgMi44MTY1OCAxOS4yMDcxIDMuMjA3MTFMMTguNDE0MiA0SDIwLjk5NzlDMjEuODQ0MiA0IDIyLjMwNjIgNC45ODI3MiAyMS43NzI2IDUuNjM0ODdMMTMgMTYuMzU3VjE5SDE3QzE3LjU1MjMgMTkgMTggMTkuNDQ3NyAxOCAyMEMxOCAyMC41NTIzIDE3LjU1MjMgMjEgMTcgMjFIN0M2LjQ0NzcxIDIxIDYgMjAuNTUyMyA2IDIwQzYgMTkuNDQ3NyA2LjQ0NzcyIDE5IDcgMTlIMTFWMTYuMzU3TDIuMjI3MzggNS42MzQ4N0MxLjY5MjYxIDQuOTgxMjcgMi4xNTc2NyA0IDMuMDAyMTEgNEgxNS41ODU4TDE3Ljc5MjkgMS43OTI4OUMxOC4xODM0IDEuNDAyMzcgMTguODE2NiAxLjQwMjM3IDE5LjIwNzEgMS43OTI4OVpNMTMuNTg1OCA2SDUuMTEwMjRMMTIgMTQuNDIwOEwxOC44ODk4IDZIMTYuNDE0MkwxMy44Mjc4IDguNTg2NEMxMy45MzkgOC44Njk0IDE0IDkuMTc3NTcgMTQgOS41QzE0IDEwLjg4MDcgMTIuODgwNyAxMiAxMS41IDEyQzEwLjExOTMgMTIgOSAxMC44ODA3IDkgOS41QzkgOC4xMTkyOSAxMC4xMTkzIDcgMTEuNSA3QzExLjgyMjQgNyAxMi4xMzA2IDcuMDYxMDQgMTIuNDEzNiA3LjE3MjE5TDEzLjU4NTggNlpNMTEuNSAxMEMxMS43NzYxIDEwIDEyIDkuNzc2MTQgMTIgOS41QzEyIDkuMjIzODYgMTEuNzc2MSA5IDExLjUgOUMxMS4yMjM5IDkgMTEgOS4yMjM4NiAxMSA5LjVDMTEgOS43NzYxNCAxMS4yMjM5IDEwIDExLjUgMTBaIiBmaWxsPSIjMTkxOTE5Ii8+Cjwvc3ZnPgo=") center center no-repeat'}}>
                        </div>
                      </span>
                      <div className=" opacity-100 pointer-events-auto transform-none flex whitespace-nowrap flex-auto items-center overflow-hidden ml-3">
                        <span className="flex-auto overflow-hidden">
                          <span>
                            <span className=" text-gray-900 font-mine1 text-14px font-medium leading-5 tracking-normal no-underline normal-case block text-ellipsis max-w-full overflow-hidden whitespace-nowrap m-0 pt-0.5">Alcohol
                            </span>
                          </span>
                          <span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="prism-side-nav-item mt-1" id="Offers">
                  <a href="/tabs/offers" className=" hover:bg-gray b-0 b-0 rounded-lg bg-white block no-underline p-0 text-left w-full max-w-full text-16px leading-none cursor-pointer outline-none" aria-current="true">
                    <div className=" py-2 px-4 w-full min-h-10 max-w-full flex-nowrap flex items-start justify-start flex-row">
                      <span className="w-6 flex justify-center items-center" style={{flex: '0 0 auto'}}>
                        <div className=" h-6 w-6 bg-black" style={{mask: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC40MTQyIDJIMTlDMjAuNjU2OSAyIDIyIDMuMzQzMTQgMjIgNVY5LjU4NTc4QzIyIDEwLjM4MTQgMjEuNjgzOSAxMS4xNDQ1IDIxLjEyMTMgMTEuNzA3MUwxMi4xMjEzIDIwLjcwNzFDMTAuOTQ5NyAyMS44Nzg3IDkuMDUwMjUgMjEuODc4NyA3Ljg3ODY4IDIwLjcwNzFMMy4yOTI4OSAxNi4xMjEzQzIuMTIxMzIgMTQuOTQ5NyAyLjEyMTMyIDEzLjA1MDIgMy4yOTI4OSAxMS44Nzg3TDEyLjI5MjkgMi44Nzg2OEMxMi44NTU1IDIuMzE2MDcgMTMuNjE4NiAyIDE0LjQxNDIgMlpNMTQuNDE0MiA0SDE5QzE5LjU1MjMgNCAyMCA0LjQ0NzcxIDIwIDVWOS41ODU3OEMyMCA5Ljg1MSAxOS44OTQ2IDEwLjEwNTQgMTkuNzA3MSAxMC4yOTI5TDEwLjcwNzEgMTkuMjkyOUMxMC4zMTY2IDE5LjY4MzQgOS42ODM0MiAxOS42ODM0IDkuMjkyODkgMTkuMjkyOUw0LjcwNzExIDE0LjcwNzFDNC4zMTY1OCAxNC4zMTY2IDQuMzE2NTggMTMuNjgzNCA0LjcwNzExIDEzLjI5MjlMMTMuNzA3MSA0LjI5Mjg5QzEzLjg5NDYgNC4xMDUzNiAxNC4xNDkgNCAxNC40MTQyIDRaIiBmaWxsPSIjMTkxOTE5Ii8+CjxwYXRoIGQ9Ik0xOCA3LjVDMTggOC4zMjg0MyAxNy4zMjg0IDkgMTYuNSA5QzE1LjY3MTYgOSAxNSA4LjMyODQzIDE1IDcuNUMxNSA2LjY3MTU3IDE1LjY3MTYgNiAxNi41IDZDMTcuMzI4NCA2IDE4IDYuNjcxNTcgMTggNy41WiIgZmlsbD0iIzE5MTkxOSIvPgo8L3N2Zz4K") center center no-repeat'}}>
                        </div>
                      </span>
                      <div className=" opacity-100 pointer-events-auto transform-none flex whitespace-nowrap flex-auto items-center overflow-hidden ml-3">
                        <span className="flex-auto overflow-hidden">
                          <span>
                            <span className=" text-gray-900 font-mine1 text-14px font-medium leading-5 tracking-normal no-underline normal-case block text-ellipsis max-w-full overflow-hidden whitespace-nowrap m-0 pt-0.5">Offers
                            </span>
                          </span>
                          <span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="prism-side-nav-item mt-1" id="Beauty">
                  <a href="/tabs/beauty" className=" hover:bg-gray b-0 b-0 rounded-lg bg-white block no-underline p-0 text-left w-full max-w-full text-16px leading-none cursor-pointer outline-none" aria-current="true">
                    <div className=" py-2 px-4 w-full min-h-10 max-w-full flex-nowrap flex items-start justify-start flex-row">
                      <span className="w-6 flex justify-center items-center" style={{flex: '0 0 auto'}}>
                        <div className=" h-6 w-6 bg-black" style={{mask: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjcwNzEgOC43MDcxMUMxNC4wOTc2IDguMzE2NTggMTQuMDk3NiA3LjY4MzQyIDEzLjcwNzEgNy4yOTI4OUMxMy4zMTY2IDYuOTAyMzcgMTIuNjgzNCA2LjkwMjM3IDEyLjI5MjkgNy4yOTI4OUw5LjI5Mjg5IDEwLjI5MjlDOC45MDIzNyAxMC42ODM0IDguOTAyMzcgMTEuMzE2NiA5LjI5Mjg5IDExLjcwNzFDOS42ODM0MiAxMi4wOTc2IDEwLjMxNjYgMTIuMDk3NiAxMC43MDcxIDExLjcwNzFMMTMuNzA3MSA4LjcwNzExWiIgZmlsbD0iIzE5MTkxOSIvPgo8cGF0aCBkPSJNMTAuNzA3MSA2LjI5Mjg5QzExLjA5NzYgNi42ODM0MiAxMS4wOTc2IDcuMzE2NTggMTAuNzA3MSA3LjcwNzExTDkuNzA3MTEgOC43MDcxMUM5LjMxNjU4IDkuMDk3NjMgOC42ODM0MiA5LjA5NzYzIDguMjkyODkgOC43MDcxMUM3LjkwMjM3IDguMzE2NTggNy45MDIzNyA3LjY4MzQyIDguMjkyODkgNy4yOTI4OUw5LjI5Mjg5IDYuMjkyODlDOS42ODM0MiA1LjkwMjM3IDEwLjMxNjYgNS45MDIzNyAxMC43MDcxIDYuMjkyODlaIiBmaWxsPSIjMTkxOTE5Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAgMTBDMjAgMTQuMDc5NiAxNi45NDYzIDE3LjQ0NiAxMyAxNy45MzgxVjIwSDE2QzE2LjU1MjMgMjAgMTcgMjAuNDQ3NyAxNyAyMUMxNyAyMS41NTIzIDE2LjU1MjMgMjIgMTYgMjJIOEM3LjQ0NzcxIDIyIDcgMjEuNTUyMyA3IDIxQzcgMjAuNDQ3NyA3LjQ0NzcxIDIwIDggMjBIMTFWMTcuOTM4MUM3LjA1MzY5IDE3LjQ0NiA0IDE0LjA3OTYgNCAxMEM0IDUuNTgxNzIgNy41ODE3MiAyIDEyIDJDMTYuNDE4MyAyIDIwIDUuNTgxNzIgMjAgMTBaTTEyIDRDOC42ODYyOSA0IDYgNi42ODYyOSA2IDEwQzYgMTMuMzEzNyA4LjY4NjI5IDE2IDEyIDE2QzE1LjMxMzcgMTYgMTggMTMuMzEzNyAxOCAxMEMxOCA2LjY4NjI5IDE1LjMxMzcgNCAxMiA0WiIgZmlsbD0iIzE5MTkxOSIvPgo8L3N2Zz4K") center center no-repeat'}}>
                        </div>
                      </span>
                      <div className=" opacity-100 pointer-events-auto transform-none flex whitespace-nowrap flex-auto items-center overflow-hidden ml-3">
                        <span className="flex-auto overflow-hidden">
                          <span>
                            <span className=" text-gray-900 font-mine1 text-14px font-medium leading-5 tracking-normal no-underline normal-case block text-ellipsis max-w-full overflow-hidden whitespace-nowrap m-0 pt-0.5">Beauty
                            </span>
                          </span>
                          <span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="prism-side-nav-item mt-1" id="Pets">
                  <a href="/tabs/pets" className=" hover:bg-gray b-0 b-0 rounded-lg bg-white block no-underline p-0 text-left w-full max-w-full text-16px leading-none cursor-pointer outline-none" aria-current="true">
                    <div className=" py-2 px-4 w-full min-h-10 max-w-full flex-nowrap flex items-start justify-start flex-row">
                      <span className="w-6 flex justify-center items-center" style={{flex: '0 0 auto'}}>
                        <div className=" h-6 w-6 bg-black" style={{mask: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjEwNzI5IDMuMTA0MzFDNy40OTc5MiAyLjUxODM2IDguMTQ3NCAyIDkgMkM5Ljg1MjU5IDIgMTAuNTAyMSAyLjUxODM2IDEwLjg5MjcgMy4xMDQzMUMxMS4yODggMy42OTcyNSAxMS41IDQuNDU4NzkgMTEuNSA1LjI1QzExLjUgNi4wNDEyMSAxMS4yODggNi44MDI3NSAxMC44OTI3IDcuMzk1NjlDMTAuNTAyMSA3Ljk4MTY0IDkuODUyNTkgOC41IDkgOC41QzguMTQ3NCA4LjUgNy40OTc5MiA3Ljk4MTY0IDcuMTA3MjkgNy4zOTU2OUM2LjcxMTk5IDYuODAyNzUgNi41IDYuMDQxMjEgNi41IDUuMjVDNi41IDQuNDU4NzkgNi43MTE5OSAzLjY5NzI1IDcuMTA3MjkgMy4xMDQzMVpNOC43NzEzOSA0LjIxMzcxQzguNjIzNzkgNC40MzUxMSA4LjUgNC43OTg1NyA4LjUgNS4yNUM4LjUgNS43MDE0MyA4LjYyMzc5IDYuMDY0ODkgOC43NzEzOSA2LjI4NjI5QzguODQzOCA2LjM5NDkxIDguOTEwMTEgNi40NTIzMSA4Ljk1MTg1IDYuNDc4NzlDOC45NzE4OCA2LjQ5MTQ5IDguOTg1MSA2LjQ5NjQ2IDguOTkxMTMgNi40OTgzMUM4Ljk5NjY0IDYuNSA5IDYuNSA5IDYuNUM5IDYuNSA5LjAwMzM2IDYuNSA5LjAwODg3IDYuNDk4MzFDOS4wMTQ4OSA2LjQ5NjQ2IDkuMDI4MTIgNi40OTE0OSA5LjA0ODE0IDYuNDc4NzlDOS4wODk4OCA2LjQ1MjMxIDkuMTU2MTkgNi4zOTQ5MSA5LjIyODYxIDYuMjg2MjlDOS4zNzYyMSA2LjA2NDg5IDkuNSA1LjcwMTQzIDkuNSA1LjI1QzkuNSA0Ljc5ODU3IDkuMzc2MjEgNC40MzUxMSA5LjIyODYxIDQuMjEzNzFDOS4xNTYxOSA0LjEwNTA5IDkuMDg5ODggNC4wNDc2OSA5LjA0ODE0IDQuMDIxMjFDOS4wMjgxMiA0LjAwODUgOS4wMTQ4OSA0LjAwMzU0IDkuMDA4ODcgNC4wMDE2OUM5LjAwMzM2IDQgOSA0IDkgNEM5IDQgOC45OTY2NCA0IDguOTkxMTMgNC4wMDE2OUM4Ljk4NTEgNC4wMDM1NCA4Ljk3MTg4IDQuMDA4NSA4Ljk1MTg1IDQuMDIxMjFDOC45MTAxMSA0LjA0NzY5IDguODQzOCA0LjEwNTA5IDguNzcxMzkgNC4yMTM3MVoiIGZpbGw9IiMxOTE5MTkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy4xMDczIDMuMTA0MzFDMTMuNDk3OSAyLjUxODM2IDE0LjE0NzQgMiAxNSAyQzE1Ljg1MjYgMiAxNi41MDIxIDIuNTE4MzYgMTYuODkyNyAzLjEwNDMxQzE3LjI4OCAzLjY5NzI1IDE3LjUgNC40NTg3OSAxNy41IDUuMjVDMTcuNSA2LjA0MTIxIDE3LjI4OCA2LjgwMjc1IDE2Ljg5MjcgNy4zOTU2OUMxNi41MDIxIDcuOTgxNjQgMTUuODUyNiA4LjUgMTUgOC41QzE0LjE0NzQgOC41IDEzLjQ5NzkgNy45ODE2NCAxMy4xMDczIDcuMzk1NjlDMTIuNzEyIDYuODAyNzUgMTIuNSA2LjA0MTIxIDEyLjUgNS4yNUMxMi41IDQuNDU4NzkgMTIuNzEyIDMuNjk3MjUgMTMuMTA3MyAzLjEwNDMxWk0xNC43NzE0IDQuMjEzNzFDMTQuNjIzOCA0LjQzNTExIDE0LjUgNC43OTg1NyAxNC41IDUuMjVDMTQuNSA1LjcwMTQzIDE0LjYyMzggNi4wNjQ4OSAxNC43NzE0IDYuMjg2MjlDMTQuODQzOCA2LjM5NDkxIDE0LjkxMDEgNi40NTIzMSAxNC45NTE5IDYuNDc4NzlDMTQuOTcxOSA2LjQ5MTQ5IDE0Ljk4NTEgNi40OTY0NiAxNC45OTExIDYuNDk4MzFDMTQuOTk2NiA2LjUgMTUgNi41IDE1IDYuNUMxNSA2LjUgMTUuMDAzNCA2LjUgMTUuMDA4OSA2LjQ5ODMxQzE1LjAxNDkgNi40OTY0NiAxNS4wMjgxIDYuNDkxNDkgMTUuMDQ4MSA2LjQ3ODc5QzE1LjA4OTkgNi40NTIzMSAxNS4xNTYyIDYuMzk0OTEgMTUuMjI4NiA2LjI4NjI5QzE1LjM3NjIgNi4wNjQ4OSAxNS41IDUuNzAxNDMgMTUuNSA1LjI1QzE1LjUgNC43OTg1NyAxNS4zNzYyIDQuNDM1MTEgMTUuMjI4NiA0LjIxMzcxQzE1LjE1NjIgNC4xMDUwOSAxNS4wODk5IDQuMDQ3NjkgMTUuMDQ4MSA0LjAyMTIxQzE1LjAyODEgNC4wMDg1IDE1LjAxNDkgNC4wMDM1NCAxNS4wMDg5IDQuMDAxNjlDMTUuMDAzNCA0IDE1IDQgMTUgNEMxNSA0IDE0Ljk5NjYgNCAxNC45OTExIDQuMDAxNjlDMTQuOTg1MSA0LjAwMzU0IDE0Ljk3MTkgNC4wMDg1IDE0Ljk1MTkgNC4wMjEyMUMxNC45MTAxIDQuMDQ3NjkgMTQuODQzOCA0LjEwNTA5IDE0Ljc3MTQgNC4yMTM3MVoiIGZpbGw9IiMxOTE5MTkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjUgN0MzLjY0NzQgNyAyLjk5NzkyIDcuNTE4MzYgMi42MDcyOSA4LjEwNDMxQzIuMjExOTkgOC42OTcyNSAyIDkuNDU4NzkgMiAxMC4yNUMyIDExLjA0MTIgMi4yMTE5OSAxMS44MDI3IDIuNjA3MjkgMTIuMzk1N0MyLjk5NzkyIDEyLjk4MTYgMy42NDc0IDEzLjUgNC41IDEzLjVDNS4zNTI2IDEzLjUgNi4wMDIwNyAxMi45ODE2IDYuMzkyNzEgMTIuMzk1N0M2Ljc4ODAxIDExLjgwMjcgNyAxMS4wNDEyIDcgMTAuMjVDNyA5LjQ1ODc5IDYuNzg4MDEgOC42OTcyNSA2LjM5MjcxIDguMTA0MzFDNi4wMDIwNyA3LjUxODM2IDUuMzUyNiA3IDQuNSA3Wk00IDEwLjI1QzQgOS43OTg1NyA0LjEyMzc5IDkuNDM1MSA0LjI3MTM5IDkuMjEzNzFDNC4zNDM4MSA5LjEwNTA4IDQuNDEwMTEgOS4wNDc2OSA0LjQ1MTg1IDkuMDIxMjFDNC40NzE4OCA5LjAwODUgNC40ODUxIDkuMDAzNTQgNC40OTExMyA5LjAwMTY5QzQuNDk2NjQgOSA0LjUgOSA0LjUgOUM0LjUgOSA0LjUwMzM2IDkgNC41MDg4NyA5LjAwMTY5QzQuNTE0ODkgOS4wMDM1NCA0LjUyODEyIDkuMDA4NSA0LjU0ODE0IDkuMDIxMjFDNC41ODk4OCA5LjA0NzY5IDQuNjU2MTkgOS4xMDUwOCA0LjcyODYxIDkuMjEzNzFDNC44NzYyMSA5LjQzNTEgNSA5Ljc5ODU3IDUgMTAuMjVDNSAxMC43MDE0IDQuODc2MjEgMTEuMDY0OSA0LjcyODYxIDExLjI4NjNDNC42NTYxOSAxMS4zOTQ5IDQuNTg5ODggMTEuNDUyMyA0LjU0ODE0IDExLjQ3ODhDNC41MjgxMiAxMS40OTE1IDQuNTE0ODkgMTEuNDk2NSA0LjUwODg3IDExLjQ5ODNDNC41MDMzNiAxMS41IDQuNSAxMS41IDQuNSAxMS41QzQuNSAxMS41IDQuNDk2NjQgMTEuNSA0LjQ5MTEzIDExLjQ5ODNDNC40ODUxIDExLjQ5NjUgNC40NzE4OCAxMS40OTE1IDQuNDUxODUgMTEuNDc4OEM0LjQxMDExIDExLjQ1MjMgNC4zNDM4MSAxMS4zOTQ5IDQuMjcxMzkgMTEuMjg2M0M0LjEyMzc5IDExLjA2NDkgNCAxMC43MDE0IDQgMTAuMjVaIiBmaWxsPSIjMTkxOTE5Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNjA3MyA4LjEwNDMxQzE3Ljk5NzkgNy41MTgzNiAxOC42NDc0IDcgMTkuNSA3QzIwLjM1MjYgNyAyMS4wMDIxIDcuNTE4MzYgMjEuMzkyNyA4LjEwNDMxQzIxLjc4OCA4LjY5NzI1IDIyIDkuNDU4NzkgMjIgMTAuMjVDMjIgMTEuMDQxMiAyMS43ODggMTEuODAyNyAyMS4zOTI3IDEyLjM5NTdDMjEuMDAyMSAxMi45ODE2IDIwLjM1MjYgMTMuNSAxOS41IDEzLjVDMTguNjQ3NCAxMy41IDE3Ljk5NzkgMTIuOTgxNiAxNy42MDczIDEyLjM5NTdDMTcuMjEyIDExLjgwMjcgMTcgMTEuMDQxMiAxNyAxMC4yNUMxNyA5LjQ1ODc5IDE3LjIxMiA4LjY5NzI1IDE3LjYwNzMgOC4xMDQzMVpNMTkuMjcxNCA5LjIxMzcxQzE5LjEyMzggOS40MzUxIDE5IDkuNzk4NTcgMTkgMTAuMjVDMTkgMTAuNzAxNCAxOS4xMjM4IDExLjA2NDkgMTkuMjcxNCAxMS4yODYzQzE5LjM0MzggMTEuMzk0OSAxOS40MTAxIDExLjQ1MjMgMTkuNDUxOSAxMS40Nzg4QzE5LjQ3MTkgMTEuNDkxNSAxOS40ODUxIDExLjQ5NjUgMTkuNDkxMSAxMS40OTgzTDE5LjQ5NTYgMTEuNDk5NUwxOS40OTcyIDExLjQ5OThMMTkuNSAxMS41QzE5LjUgMTEuNSAxOS41MDM0IDExLjUgMTkuNTA4OSAxMS40OTgzQzE5LjUxNDkgMTEuNDk2NSAxOS41MjgxIDExLjQ5MTUgMTkuNTQ4MSAxMS40Nzg4QzE5LjU4OTkgMTEuNDUyMyAxOS42NTYyIDExLjM5NDkgMTkuNzI4NiAxMS4yODYzQzE5Ljg3NjIgMTEuMDY0OSAyMCAxMC43MDE0IDIwIDEwLjI1QzIwIDkuNzk4NTcgMTkuODc2MiA5LjQzNTEgMTkuNzI4NiA5LjIxMzcxQzE5LjY1NjIgOS4xMDUwOCAxOS41ODk5IDkuMDQ3NjkgMTkuNTQ4MSA5LjAyMTIxQzE5LjUyODEgOS4wMDg1IDE5LjUxNDkgOS4wMDM1NCAxOS41MDg5IDkuMDAxNjlDMTkuNTAzNCA5IDE5LjUgOSAxOS41IDlDMTkuNSA5IDE5LjQ5NjYgOSAxOS40OTExIDkuMDAxNjlDMTkuNDg1MSA5LjAwMzU0IDE5LjQ3MTkgOS4wMDg1IDE5LjQ1MTkgOS4wMjEyMUMxOS40MTAxIDkuMDQ3NjkgMTkuMzQzOCA5LjEwNTA4IDE5LjI3MTQgOS4yMTM3MVoiIGZpbGw9IiMxOTE5MTkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC45MDY2IDEyLjUwNThDMTUuMDEwNiAxMy4wNDgyIDE1LjQ1NDcgMTMuNDg3MiAxNS45ODk5IDEzLjYyMzRDMTcuNzIwMiAxNC4wNjM5IDE5IDE1LjYzMjUgMTkgMTcuNUMxOSAxOS43MDkxIDE3LjIwOTEgMjEuNSAxNSAyMS41QzE0LjIxMjMgMjEuNSAxMy40Nzc4IDIxLjI3MjMgMTIuODU4NyAyMC44NzkyQzEyLjM1MDkgMjAuNTU2NyAxMS42NDkxIDIwLjU1NjcgMTEuMTQxMyAyMC44NzkyQzEwLjUyMjIgMjEuMjcyMyA5Ljc4NzY3IDIxLjUgOSAyMS41QzYuNzkwODYgMjEuNSA1IDE5LjcwOTEgNSAxNy41QzUgMTUuNjMyNSA2LjI3OTc2IDE0LjA2MzkgOC4wMTAxMiAxMy42MjM0QzguNTQ1MzMgMTMuNDg3MiA4Ljk4OTM1IDEzLjA0ODIgOS4wOTM0IDEyLjUwNThDOS40MjQ5MiAxMC43Nzc2IDEwLjYwMDYgOS41IDEyIDkuNUMxMy4zOTk0IDkuNSAxNC41NzUxIDEwLjc3NzYgMTQuOTA2NiAxMi41MDU4Wk0xNS40OTY1IDE1LjU2MTZDMTYuMzYyIDE1Ljc4MiAxNyAxNi41NjkgMTcgMTcuNUMxNyAxOC42MDQ2IDE2LjEwNDYgMTkuNSAxNSAxOS41QzE0LjYwMzEgMTkuNSAxNC4yMzg5IDE5LjM4NjQgMTMuOTMwOCAxOS4xOTA4QzEyLjc2ODYgMTguNDUyOSAxMS4yMzE0IDE4LjQ1MjkgMTAuMDY5MiAxOS4xOTA4QzkuNzYxMTEgMTkuMzg2NCA5LjM5Njg3IDE5LjUgOSAxOS41QzcuODk1NDMgMTkuNSA3IDE4LjYwNDYgNyAxNy41QzcgMTYuNTY5IDcuNjM4IDE1Ljc4MiA4LjUwMzU0IDE1LjU2MTZDOS43MjY5MiAxNS4yNTAyIDEwLjc5NTUgMTQuMjQ4NyAxMS4wNTc2IDEyLjg4MjZDMTEuMTYwNiAxMi4zNDU1IDExLjM4MTYgMTEuOTU3NSAxMS41OTQgMTEuNzM0NkMxMS43OTkzIDExLjUxOTMgMTEuOTQ0MSAxMS41IDEyIDExLjVDMTIuMDU1OCAxMS41IDEyLjIwMDcgMTEuNTE5MyAxMi40MDYgMTEuNzM0NkMxMi42MTg0IDExLjk1NzUgMTIuODM5NCAxMi4zNDU1IDEyLjk0MjQgMTIuODgyNkMxMy4yMDQ1IDE0LjI0ODcgMTQuMjczMSAxNS4yNTAyIDE1LjQ5NjUgMTUuNTYxNloiIGZpbGw9IiMxOTE5MTkiLz4KPC9zdmc+Cg==") center center no-repeat'}}>
                        </div>
                      </span>
                      <div className=" opacity-100 pointer-events-auto transform-none flex whitespace-nowrap flex-auto items-center overflow-hidden ml-3">
                        <span className="flex-auto overflow-hidden">
                          <span>
                            <span className=" text-gray-900 font-mine1 text-14px font-medium leading-5 tracking-normal no-underline normal-case block text-ellipsis max-w-full overflow-hidden whitespace-nowrap m-0 pt-0.5">Pets
                            </span>
                          </span>
                          <span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="prism-side-nav-item mt-1" id="Browse All">
                  <a href="/browse/" className=" hover:bg-gray b-0 b-0 rounded-lg bg-white block no-underline p-0 text-left w-full max-w-full text-16px leading-none cursor-pointer outline-none" aria-current="true">
                    <div className=" py-2 px-4 w-full min-h-10 max-w-full flex-nowrap flex items-start justify-start flex-row">
                      <span className="w-6 flex justify-center items-center" style={{flex: '0 0 auto'}}>
                        <div className=" h-6 w-6 bg-black" style={{mask: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS43MzQ3IDUuOTg1NTZDMjEuNzU3OCA4Ljg3NDk4IDIxLjI5NDQgMTIuNzYxNyAxOC43OTIzIDE1LjEwNDdDMTguODA3IDE1LjEyMjkgMTguODIxMiAxNS4xNDE3IDE4LjgzNDggMTUuMTYxMUwyMS43MDI3IDE5LjI1NjhDMjIuMDE5NCAxOS43MDkzIDIxLjkwOTUgMjAuMzMyOCAyMS40NTcxIDIwLjY0OTZDMjEuMDA0NyAyMC45NjYzIDIwLjM4MTEgMjAuODU2NCAyMC4wNjQ0IDIwLjQwNEwxNy4xOTY1IDE2LjMwODJDMTcuMTgyOSAxNi4yODg4IDE3LjE3MDEgMTYuMjY5MSAxNy4xNTggMTYuMjQ5MUMxNC4xMDA1IDE3Ljc5ODkgMTAuMjg5NyAxNi45MDUgOC4yNjY1MyAxNC4wMTU2QzYuMDQ5MDkgMTAuODQ4OCA2LjgxODczIDYuNDgzOTggOS45ODU1NiA0LjI2NjU0QzEzLjE1MjQgMi4wNDkwOSAxNy41MTcyIDIuODE4NzMgMTkuNzM0NyA1Ljk4NTU2Wk0xNi44Njg1IDE0LjA5NjRDMTkuMTMwNSAxMi41MTI1IDE5LjY4MDIgOS4zOTQ3NCAxOC4wOTY0IDcuMTMyNzJDMTYuNTEyNSA0Ljg3MDY5IDEzLjM5NDcgNC4zMjA5NSAxMS4xMzI3IDUuOTA0ODRDOC44NzA2OSA3LjQ4ODczIDguMzIwOTUgMTAuNjA2NSA5LjkwNDg0IDEyLjg2ODVDMTEuNDg4NyAxNS4xMzA1IDE0LjYwNjUgMTUuNjgwMiAxNi44Njg1IDE0LjA5NjRaIiBmaWxsPSIjMTkxOTE5Ii8+CjxwYXRoIGQ9Ik0zIDExSDUuMDU0OTNDNS4xMzE1OSAxMS42OTM1IDUuMjg3MDMgMTIuMzYzMiA1LjUxMjEyIDEzSDNDMi40NDc3MSAxMyAyIDEyLjU1MjMgMiAxMkMyIDExLjQ0NzcgMi40NDc3MSAxMSAzIDExWiIgZmlsbD0iIzE5MTkxOSIvPgo8cGF0aCBkPSJNMyAxNUg2LjUxNTU1QzcuMDIxMTIgMTUuNzU1MyA3LjYzNzk3IDE2LjQyOTggOC4zNDI2NiAxN0gzQzIuNDQ3NzEgMTcgMiAxNi41NTIzIDIgMTZDMiAxNS40NDc3IDIuNDQ3NzEgMTUgMyAxNVoiIGZpbGw9IiMxOTE5MTkiLz4KPHBhdGggZD0iTTMgMTlDMi40NDc3MSAxOSAyIDE5LjQ0NzcgMiAyMEMyIDIwLjU1MjMgMi40NDc3MSAyMSAzIDIxSDEyQzEyLjU1MjMgMjEgMTMgMjAuNTUyMyAxMyAyMEMxMyAxOS40NDc3IDEyLjU1MjMgMTkgMTIgMTlIM1oiIGZpbGw9IiMxOTE5MTkiLz4KPC9zdmc+Cg==) no-repeat center'}}>
                        </div>
                      </span>
                      <div className=" opacity-100 pointer-events-auto transform-none flex whitespace-nowrap flex-auto items-center overflow-hidden ml-3">
                        <span className="flex-auto overflow-hidden">
                          <span>
                            <span className=" text-gray-900 font-mine1 text-14px font-medium leading-5 tracking-normal no-underline normal-case block text-ellipsis max-w-full overflow-hidden whitespace-nowrap m-0 pt-0.5">Browse All
                            </span>
                          </span>
                          <span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
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
                      <span className="w-6 flex justify-center items-center" style={{flex: '0 0 auto'}}>
                        <div className="h-6 w-6 bg-black" style={{mask: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAxM0MxMy4yNDI2IDEzIDE0LjI1IDExLjk5MjYgMTQuMjUgMTAuNzVDMTQuMjUgOS41MDczNiAxMy4yNDI2IDguNSAxMiA4LjVDMTAuNzU3NCA4LjUgOS43NSA5LjUwNzM2IDkuNzUgMTAuNzVDOS43NSAxMS45OTI2IDEwLjc1NzQgMTMgMTIgMTNaTTEyIDE1QzE0LjM0NzIgMTUgMTYuMjUgMTMuMDk3MiAxNi4yNSAxMC43NUMxNi4yNSA4LjQwMjc5IDE0LjM0NzIgNi41IDEyIDYuNUM5LjY1Mjc5IDYuNSA3Ljc1IDguNDAyNzkgNy43NSAxMC43NUM3Ljc1IDEzLjA5NzIgOS42NTI3OSAxNSAxMiAxNVoiIGZpbGw9IiMxOTE5MTkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyMkMxNy41MjI4IDIyIDIyIDE3LjUyMjggMjIgMTJDMjIgNi40NzcxNSAxNy41MjI4IDIgMTIgMkM2LjQ3NzE1IDIgMiA2LjQ3NzE1IDIgMTJDMiAxNy41MjI4IDYuNDc3MTUgMjIgMTIgMjJaTTEyIDRDMTYuNDE4MyA0IDIwIDcuNTgxNzIgMjAgMTJDMjAgMTQuMTkzNyAxOS4xMTcxIDE2LjE4MTEgMTcuNjg3MiAxNy42MjY0QzE2LjQxMSAxNi42NDU1IDE0LjU2NTYgMTYgMTIgMTZDOS40MzQ0IDE2IDcuNTg5MDUgMTYuNjQ1NSA2LjMxMjgyIDE3LjYyNjRDNC44ODI5NCAxNi4xODExIDQgMTQuMTkzNyA0IDEyQzQgNy41ODE3MiA3LjU4MTcyIDQgMTIgNFpNMTYuMDI3MyAxOC45MTM5QzE1LjE0MTggMTguMzgzOSAxMy44NTg4IDE4IDEyIDE4QzEwLjE0MTIgMTggOC44NTgyIDE4LjM4MzkgNy45NzI3MSAxOC45MTM5QzkuMTU1NTUgMTkuNjA0NCAxMC41MzE2IDIwIDEyIDIwQzEzLjQ2ODQgMjAgMTQuODQ0NSAxOS42MDQ0IDE2LjAyNzMgMTguOTEzOVoiIGZpbGw9IiMxOTE5MTkiLz4KPC9zdmc+Cg==) no-repeat center'}}></div>
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
}

export default Sidebar;