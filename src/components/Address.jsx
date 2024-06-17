import React from 'react'

class Address extends React.Component {
  render () {
    return (
      <div>
        <div className='flex justify-center items-center ml-0'>
          <div>
            <div>
              <div className='inline-flex'>
                <button shape="Pill" size="12" kind="BUTTON/TERTIARY" aria-describedby="" aria-controls="layout-address-picker" aria-haspopup="true" type="button" className="relative m-0 p-0 inline-flex max-w-full min-h-8 w-auto items-center justify-start rounded-3xl border-none cursor-pointer select-none no-underline text-center bg-gray1 text-gray-800 hover:bg-gray3" style={{transition:'background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s'}}>
                  <span kind="BUTTON/TERTIARY" className="block grow max-w-full opacity-100 py-0 px-3">
                    <span className="max-w-full flex items-center justify-center flex-row">
                      <span className="grow shrink-2 min-w-0 flex justify-start">
                        <span className="w-4 flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C8.57128 16 9.11528 15.7557 9.49482 15.3287L9.49749 15.3257L9.50163 15.321L9.51421 15.3068L9.55592 15.2589C9.59084 15.2187 9.63972 15.1618 9.70056 15.0897C9.82213 14.9455 9.9921 14.7399 10.1944 14.4838C10.5973 13.9738 11.1368 13.2533 11.6798 12.4129C12.6943 10.8429 14 8.44131 14 6.11932C14 2.79553 11.3687 0 8 0C4.63128 0 2 2.79553 2 6.11932C2 8.44131 3.30574 10.8429 4.32018 12.4129C4.86322 13.2533 5.40275 13.9738 5.80562 14.4838C6.0079 14.7399 6.17787 14.9455 6.29944 15.0897C6.36028 15.1618 6.40916 15.2187 6.44408 15.2589L6.48579 15.3068L6.49837 15.321L6.50251 15.3257L6.50518 15.3287C6.88472 15.7557 7.42872 16 8 16ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" fill="currentColor">
                            </path>
                          </svg>
                        </span>
                      </span>
                      <span className="grow-2 min-w-0 flex justify-center ml-1">
                        <span overflow="truncate" display="block" className="w-full text-14px font-mine1 font-bold leading-4 tracking-0 normal-case text-center m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                          <div className="max-w-full flex items-stretch justify-start flex-row">
                            <div className="max-w-full flex items-center justify-start flex-row">
                              <span overflow="truncate" display="block" className="text-14px font-mine1 font-bold leading-4 tracking-0 normal-case text-gray-800 text-left m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">Miami
                              </span>
                            </div>
                          </div>
                        </span>
                      </span>
                      <span className="grow shrink-2 min-w-0 flex justify-end ml-1">
                        <span className="w-4 flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 5.79289C3.68342 5.40237 4.31658 5.40237 4.70711 5.79289L8 9.08579L11.2929 5.79289C11.6834 5.40237 12.3166 5.40237 12.7071 5.79289C13.0976 6.18342 13.0976 6.81658 12.7071 7.20711L8.70711 11.2071C8.51957 11.3946 8.26522 11.5 8 11.5C7.73479 11.5 7.48043 11.3946 7.29289 11.2071L3.29289 7.20711C2.90237 6.81658 2.90237 6.18342 3.29289 5.79289Z" fill="currentColor">
                            </path>
                          </svg>
                        </span>
                      </span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Address;