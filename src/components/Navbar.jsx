import React from 'react';
import Brand from './Brand';
import Search from './Search';
import Address from './Address';

class Navbar extends React.Component {
  render() {
    return (
      <header className='relative z-400 pt-16'>
        {/* <div className="items-center bg-white flex h-0 l-o fixed t-0 w-vm z-100">
          <div className="grow-1 border-b-neutral-200 z-400">
            <div role="listitem" className="relative">
              <div className="max-w-full w-full grid grid-rows-auto grid-cols-auto gap-x-2 py-2 px-2">
                <div className="self-center" style={{gridArea:2 / 1}}>
                  <span class="text-gray-600 font-mine1 text-14px font-medium leading-5 tracking-0 no-underline normal-case text-left block text-ellipsis max-w-full overflow-hidden whitespace-nowrap m-0 p-0">
                    <div className="max-w-full flex items-center justify-start flex-row">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
                        <path d="M20.9506 9.06644C20.0784 7.42113 18.3736 6.41016 16.5301 6.41016H2.47575C2.21805 6.41016 2 6.62821 2 6.90573C2 7.02467 2.05947 7.14361 2.13876 7.24272L5.19147 10.3153C5.46899 10.5928 5.8258 10.7514 6.20243 10.7316H16.094C16.8076 10.7316 17.3825 11.2866 17.3825 12.0002C17.3825 12.7139 16.8274 13.2887 16.1138 13.2887H9.31461C9.05691 13.2887 8.83886 13.5068 8.83886 13.7843C8.83886 13.9033 8.89833 14.0222 8.97762 14.1213L12.0303 17.1939C12.3078 17.4714 12.6647 17.6102 13.0611 17.6102H16.1535C20.1577 17.6102 23.1905 13.3284 20.9506 9.06644Z" fill="#EB1700">
                        </path>
                      </svg>
                    </div>
                  </span>
                </div>
                <div className="overflow-hidden max-w-full" style={{gridArea:2 / 2}}>
                  <span className="text-gray-700 font-mine1 text-16px font-medium leading-5a tracking-0 no-underline normal-case text-left block text-ellipsis max-w-full overflow-hidden whitespace-nowrap m-0 p-0">
                  </span>
                  <span className="text-gray-600 font-mine1 text-14px font-medium leading-5 tracking-0 no-underline normal-case text-left text-ellipsis max-w-full overflow-hidden max-h-15 whitespace-normal m-0 p-0">
                    <div className="max-w-full mb-0">
                      <span className="text-gray-700 font-mine1 text-16px font-medium leading-5a tracking-0 no-underline normal-case text-left block text-ellipsis max-w-full overflow-hidden whitespace-nowrap m-0 p-0">Browse faster in the app
                      </span>
                      <span className="text-gray-600 font-mine1 text-14px font-medium leading-5 tracking-0 no-underline normal-case text-left block text-ellipsis max-w-full overflow-hidden whitespace-nowrap m-0 p-0">$0.00 delivery fee on first order
                      </span>
                      <div className="max-w-full flex items-center justify-start flex-row">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0 my-0 mx-0.5">
                          <path d="M8.91126 0.588193C8.74945 0.230121 8.39293 0 7.99999 0C7.60705 0 7.25054 0.230121 7.08872 0.588193L5.37316 4.38448L1.23254 4.84295C0.841992 4.8862 0.512964 5.15416 0.39154 5.52786C0.270115 5.90157 0.378802 6.31175 0.669346 6.5763L3.7497 9.381L2.90621 13.4606C2.82665 13.8454 2.97982 14.2412 3.29771 14.4721C3.6156 14.7031 4.0393 14.7265 4.38068 14.5319L7.99999 12.469L11.6193 14.5319C11.9607 14.7265 12.3844 14.7031 12.7023 14.4721C13.0202 14.2412 13.1733 13.8454 13.0938 13.4606L12.2503 9.381L15.3306 6.5763C15.6212 6.31175 15.7299 5.90157 15.6084 5.52786C15.487 5.15416 15.158 4.8862 14.7674 4.84295L10.6268 4.38448L8.91126 0.588193Z" fill="var(--usage-color-data-viz-ranking-default)">
                          </path>
                        </svg>
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0 my-0 mx-0.5 ml-0">
                          <path d="M8.91126 0.588193C8.74945 0.230121 8.39293 0 7.99999 0C7.60705 0 7.25054 0.230121 7.08872 0.588193L5.37316 4.38448L1.23254 4.84295C0.841992 4.8862 0.512964 5.15416 0.39154 5.52786C0.270115 5.90157 0.378802 6.31175 0.669346 6.5763L3.7497 9.381L2.90621 13.4606C2.82665 13.8454 2.97982 14.2412 3.29771 14.4721C3.6156 14.7031 4.0393 14.7265 4.38068 14.5319L7.99999 12.469L11.6193 14.5319C11.9607 14.7265 12.3844 14.7031 12.7023 14.4721C13.0202 14.2412 13.1733 13.8454 13.0938 13.4606L12.2503 9.381L15.3306 6.5763C15.6212 6.31175 15.7299 5.90157 15.6084 5.52786C15.487 5.15416 15.158 4.8862 14.7674 4.84295L10.6268 4.38448L8.91126 0.588193Z" fill="var(--usage-color-data-viz-ranking-default)">
                          </path>
                        </svg>
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0 my-0 mx-0.5 ml-0">
                          <path d="M8.91126 0.588193C8.74945 0.230121 8.39293 0 7.99999 0C7.60705 0 7.25054 0.230121 7.08872 0.588193L5.37316 4.38448L1.23254 4.84295C0.841992 4.8862 0.512964 5.15416 0.39154 5.52786C0.270115 5.90157 0.378802 6.31175 0.669346 6.5763L3.7497 9.381L2.90621 13.4606C2.82665 13.8454 2.97982 14.2412 3.29771 14.4721C3.6156 14.7031 4.0393 14.7265 4.38068 14.5319L7.99999 12.469L11.6193 14.5319C11.9607 14.7265 12.3844 14.7031 12.7023 14.4721C13.0202 14.2412 13.1733 13.8454 13.0938 13.4606L12.2503 9.381L15.3306 6.5763C15.6212 6.31175 15.7299 5.90157 15.6084 5.52786C15.487 5.15416 15.158 4.8862 14.7674 4.84295L10.6268 4.38448L8.91126 0.588193Z" fill="var(--usage-color-data-viz-ranking-default)">
                          </path>
                        </svg>
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0 my-0 mx-0.5 ml-0">
                          <path d="M8.91126 0.588193C8.74945 0.230121 8.39293 0 7.99999 0C7.60705 0 7.25054 0.230121 7.08872 0.588193L5.37316 4.38448L1.23254 4.84295C0.841992 4.8862 0.512964 5.15416 0.39154 5.52786C0.270115 5.90157 0.378802 6.31175 0.669346 6.5763L3.7497 9.381L2.90621 13.4606C2.82665 13.8454 2.97982 14.2412 3.29771 14.4721C3.6156 14.7031 4.0393 14.7265 4.38068 14.5319L7.99999 12.469L11.6193 14.5319C11.9607 14.7265 12.3844 14.7031 12.7023 14.4721C13.0202 14.2412 13.1733 13.8454 13.0938 13.4606L12.2503 9.381L15.3306 6.5763C15.6212 6.31175 15.7299 5.90157 15.6084 5.52786C15.487 5.15416 15.158 4.8862 14.7674 4.84295L10.6268 4.38448L8.91126 0.588193Z" fill="var(--usage-color-data-viz-ranking-default)">
                          </path>
                        </svg>
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0 my-0 mx-0.5 ml-0">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.91123 0.588193C8.74942 0.230121 8.3929 0 7.99996 0C7.60702 0 7.2505 0.230121 7.08869 0.588193L5.37313 4.38448L1.23251 4.84295C0.841962 4.8862 0.512933 5.15416 0.391509 5.52786C0.270085 5.90157 0.378772 6.31175 0.669316 6.5763L3.74967 9.381L2.90618 13.4606C2.82662 13.8454 2.97979 14.2412 3.29768 14.4721C3.61557 14.7031 4.03926 14.7265 4.38064 14.5319L7.99996 12.469L11.6193 14.5319C11.9607 14.7265 12.3843 14.7031 12.7022 14.4721C13.0201 14.2412 13.1733 13.8454 13.0937 13.4606L12.2503 9.381L15.3306 6.5763C15.6212 6.31175 15.7298 5.90157 15.6084 5.52786C15.487 5.15416 15.158 4.8862 14.7674 4.84295L10.6268 4.38448L8.91123 0.588193ZM7.99997 10.318C8.17082 10.318 8.34167 10.3617 8.49514 10.4492L10.6871 11.6986L10.1763 9.22779C10.1047 8.88181 10.2211 8.52376 10.4823 8.2859L12.3479 6.58727L9.84018 6.30961C9.48903 6.27073 9.18445 6.04944 9.03896 5.72749L7.99997 3.42834V10.318Z" fill="var(--usage-color-data-viz-ranking-default)">
                          </path>
                        </svg>
                        <span className="">18.2M ratings
                        </span>
                      </div>
                    </div>
                  </span>
                </div>
                <div class="styles__SideContainer-sc-20nosb-2 kRlWUt">
                  <span class="Text-sc-16fu6d-0 joGFzM">
                    <a kind="BUTTON/PRIMARY" href="https://7wmw.adj.st?adjust_t=p58jfw&amp;dd_device_id=dx_f754fc0b34ef41f4960c90e9600ecb8d&amp;adjust_source=smart_app_banner&amp;pageType=lego_homepage_ssr&amp;entryPoint=app&amp;web_consumer_id=dx_f754fc0b34ef41f4960c90e9600ecb8d&amp;lang=en-US" class="styles__ButtonRoot-sc-1nqx07s-0 gtkpmz">
                      <span kind="BUTTON/PRIMARY" class="Inset__StyledInset-sc-cd83wx-0 bfBBwt styles__ContentWrapper-sc-1nqx07s-2 gLqJUO">
                        <span class="InlineChildren__StyledInlineChildren-sc-nu44vp-0 kFyKOo">
                          <span class="styles__MainContentContainer-sc-1nqx07s-3 eJaCqX">
                            <span class="Text-sc-16fu6d-0 iPOoKa">
                              <span class="Text-sc-16fu6d-0 gBikzU">Open
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className='items-center bg-white border border-solid border-[#e7e7e7] flex h-16 left-0 fixed top-0 w-vw z-100'>
          <Brand />
          <div className='w-full max-w-1152 my-0 mx-68 gap-2 pr-4 flex items-center justify-center flex-row'>
            <Search />
            <Address />
            <div className='ml-2'>
              <div kind='Primary' size='12' role='radiogroup' aria-label='Toggle order method (delivery or pickup)' className='rounded-1000px flex w-full bg-gray1'>
                <button kind='primary' size='12' type='button' data-testid='OrderMethodToggle' aria-checked='true' role='radio' className='rounded-1000px z-1 flex-1 relative max-w-full m-0 p-0 flex bg-black min-h-8 w-auto items-center justify-center border-none text-white cursor-pointer select-none no-underline text-center'>
                  <span overflow="normal" display="block" className="text-14px font-mine1 font-bold leading-4 tracking-0 normal-case text-left m-0 p-0 block">
                    <div className="max-w-full overflow-hidden whitespace-nowrap py-0 px-3">Delivery
                    </div>
                  </span>
                </button>
                <button kind='primary' size='12' type='button' data-testid='OrderMethodToggle' aria-checked='true' role='radio' className='ml-m12px pl-3 rounded-mine flex-1 relative max-w-full m-0 p-0 flex bg-gray1 min-h-8 w-auto items-center justify-center border-none text-gray-800 cursor-pointer select-none no-underline text-center'>
                  <span overflow="normal" display="block" className="text-14px font-mine1 font-bold leading-4 tracking-0 normal-case text-left m-0 p-0 block">
                    <div className="max-w-full overflow-hidden whitespace-nowrap py-0 px-3">Pickup
                    </div>
                  </span>
                </button>
              </div>
            </div>
            <div className='mr-0 ml-2'>
              <button shape="Pill" size="12" kind="BUTTON/PRIMARY" aria-label="0 items, open Order Cart" data-testid="OrderCartButton" aria-hidden="false" data-accessiblity-id="header-order-cart" data-anchor-id="HeaderOrderCart" type="button" className="relative max-w-full m-0 p-0 inline-flex min-h-8 w-auto items-center justify-center rounded-3xl border-none cursor-pointer select-none no-underline text-center bg-red-600 text-white">
                <span kind="BUTTON/PRIMARY" className="block grow max-w-full opacity-100 py-0 px-3">
                  <span className="max-w-full flex items-center justify-center flex-row">
                    <span className="grow-2 min-w-0 flex justify-center">
                      <span overflow="truncate" display="block" className="w-full text-14px font-mine1 font-bold leading-4 tracking-0 normal-case text-center m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                        <div className="flex justify-center items-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.27821 4.00617C4.19614 4.00057 4.08253 4.00003 3.86483 4.00003H3C2.44772 4.00003 2 3.55231 2 3.00003C2 2.44774 2.44772 2.00003 3 2.00003H3.86483L3.95147 1.99978C4.26423 1.99845 4.65669 1.99679 5.01419 2.13554C5.32256 2.25523 5.59642 2.44954 5.81126 2.70105C6.06033 2.99264 6.18841 3.36362 6.29048 3.65926L6.31886 3.74112L6.40948 4.00004L18.5938 4.00003C18.9671 4 19.3123 3.99997 19.594 4.02564C19.8871 4.05234 20.2553 4.11584 20.5919 4.3437C21.0358 4.64406 21.3405 5.10996 21.4378 5.63696C21.5116 6.03674 21.4222 6.39946 21.3292 6.67867C21.2398 6.94706 21.1014 7.26331 20.9517 7.60528L18.8356 12.4422L18.8037 12.5155C18.6883 12.7823 18.5433 13.1173 18.2958 13.3778C18.082 13.6027 17.8189 13.7748 17.5271 13.8805C17.1892 14.0029 16.8242 14.0014 16.5336 14.0002L16.4536 14H9.05422L8.37797 15.082C8.11779 15.4983 7.96033 15.7522 7.86437 15.9424C7.85835 15.9544 7.85288 15.9655 7.8479 15.9758C7.85931 15.9771 7.87165 15.9784 7.88496 15.9796C8.09715 15.999 8.39587 16 8.88677 16H18C18.5523 16 19 16.4478 19 17C19 17.5523 18.5523 18 18 18L8.844 18C8.40971 18.0001 8.01725 18.0001 7.70227 17.9712C7.38473 17.9421 6.97162 17.8729 6.61172 17.6056C6.14885 17.2619 5.85685 16.735 5.81065 16.1603C5.77473 15.7135 5.93504 15.3265 6.07864 15.0418C6.22108 14.7594 6.4291 14.4266 6.6593 14.0583L7.39752 12.8772L4.43115 4.40182C4.35923 4.19634 4.32119 4.08929 4.28879 4.01368L4.28577 4.00672L4.27821 4.00617Z" fill="currentColor">
                            </path>
                            <path d="M7.5 22C8.32843 22 9 21.3285 9 20.5C9 19.6716 8.32843 19 7.5 19C6.67157 19 6 19.6716 6 20.5C6 21.3285 6.67157 22 7.5 22Z" fill="currentColor">
                            </path>
                            <path d="M16.5 22C17.3284 22 18 21.3285 18 20.5C18 19.6716 17.3284 19 16.5 19C15.6716 19 15 19.6716 15 20.5C15 21.3285 15.6716 22 16.5 22Z" fill="currentColor">
                            </path>
                          </svg>
                          <div className='ml-1'>0
                          </div>
                        </div>                
                      </span>
                    </span>
                  </span>
                </span>
              </button>
            </div>
            <div data-testid='signinSignupButton' className='flex flex-nowrap mr-0 items-center ml-2'>
              <a kind="BUTTON/FLAT_SECONDARY" href="https://identity.doordash.com/auth?client_id=1666519390426295040&amp;intl=en-US&amp;layout=consumer_web&amp;prompt=none&amp;redirect_uri=https%3A%2F%2Fwww.doordash.com%2Fpost-login%2F&amp;response_type=code&amp;scope=%2A&amp;state=%2Fhome%2F%3FnewUser%3Dtrue%7C%7C629df26e-8078-4917-91c6-95d0e83a7149" className="relative max-w-full m-0 p-0 inline-flex min-h-10 w-auto items-center justify-start rounded-full border-none cursor-pointer select-none no-underline text-center bg-white text-gray-800 hover:bg-gray" style={{transition:'background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s'}}>
                <span kind="BUTTON/FLAT_SECONDARY" className="block grow max-w-full opacity-100 py-0 px-3">
                  <span className="max-w-full flex items-center justify-center flex-row">
                    <span className="grow-2 min-w-0 flex justify-center">
                      <span className="w-full text-current font-mine1 text-16px font-bold leading-5a tracking-normal no-underline normal-case text-center block text-ellipsis max-w-full overflow-hidden whitespace-nowrap m-0 p-0">
                        <span display="block" className="text-14px font-mine1 font-bold leading-5 tracking-4ch normal-case text-gray-800 m-0 p-0 block">Sign In
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </a>
              <a kind="BUTTON/FLAT_SECONDARY" href="https://identity.doordash.com/auth/user/signup?client_id=1666519390426295040&intl=en-US&layout=consumer_web&prompt=none&redirect_uri=https%3A%2F%2Fwww.doordash.com%2Fpost-login%2F&response_type=code&scope=%2A&state=%2Fhome%2F%3FnewUser%3Dtrue%7C%7C629df26e-8078-4917-91c6-95d0e83a7149" className="relative max-w-full m-0 p-0 inline-flex min-h-8 w-auto items-center justify-start rounded-full border-none cursor-pointer select-none no-underline text-center bg-gray2 text-white">
                <span kind="BUTTON/FLAT_SECONDARY" className="block grow max-w-full opacity-100 py-0 px-3">
                  <span className="max-w-full flex items-center justify-center flex-row">
                    <span className="grow-2 min-w-0 flex justify-center">
                      <span className="w-full text-current font-mine1 text-16px font-bold leading-5a tracking-normal no-underline normal-case text-center block text-ellipsis max-w-full overflow-hidden whitespace-nowrap m-0 p-0">
                        <span display="block" className="text-14px font-mine1 font-bold leading-5 tracking-4ch normal-case text-gray-800 m-0 p-0 block">Sign Up
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Navbar;