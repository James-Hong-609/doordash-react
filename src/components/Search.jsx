import React from 'react';

class Search extends React.Component {
  render () {
    return (
      <div data-testid='SearchInput' className='cursor-text w-full mr-m16px'>
        <div>
          <div>
            <div className='py-0 px-4 relative'>
              <div className='w-full'>
                <div className='max-w-full'>
                  <div className='flex min-h-8'>
                    <div size='8' className='rounded-3xl pr-2 text-14px leading-5 tracking-0 font-medium font-mine1 text-black-800 flex flex-row items-center w-full z-1 py-1 px-2 border-none bg-gray'>
                      <div className='max-w-full mr-2'>
                        <div className='flex justify-center items-center ml-2 mr-0.5'>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1922 15.6064C13.0236 16.4816 11.5723 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5723 16.4816 13.0236 15.6064 14.1922L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1922 15.6064ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10Z" fill="#494949">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <div size='8' className='grow bg-inherit max-w-full my-0 mx-auto'>
                        <input aria-expanded="false" aria-owns="search-dropdown-results" data-accessibility-id="header-search-input-field" data-anchor-id="HeaderSearchInputField" data-lpignore="true" aria-label="Store search: begin typing to search for stores available on DoorDash" autoComplete="off" placeholder="Search DoorDash" inputMode="search" id="FieldWrapper-0" aria-describedby="search-dropdown-results" className="text-14px leading-5 tracking-0 font-medium font-mine1 w-full border-none outline-none flex bg-inherit text-currnetcolor appearance-none m-0 p-0 placeholder-shown:ellipsis" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;