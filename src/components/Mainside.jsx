import React from "react";

class Mainside extends React.Component {
  render () {
    return (
      <>
      <div className="pl-220px z-449 fixed h-tmp1 top-16 w-vw pointer-events-none">
        <div className="relative w-full h-full">
          <div className="relative z-0">
          </div>
          <div kind='OVERLAY/LIGHT' className="absolute z-0 bg-white inset-0 w-full h-full opacity-0 pointer-events-none" style={{transition:'all 0.3s ease-in-out 0s'}}>
          </div>
        </div>
      </div>
      <div className="pl-220px flex flex-col min-h-vh relative w-full">
        <div className="max-w-full">
          <div loading='0' className="relative max-w-full">
            <div className=" max-w-1152 ml-auto mr-auto">
              <div>
                <div className="relative">
                  <div size='16' className="pt-0.5 pb-0.5 ml-4 mr-4 overflow-x-auto overflow-y-hidden scroll-smooth max-w-full flex items-stretch justify-start" style={{scrollSnapType: 'x mandatory', scrollbarWidth: 'none'}}>
                    <div className="ml-0 pl-0.5 snap-start relative max-w-full p-0">
                      <a className=" decoration-inherit cursor-pointer box-border">
                        <div data-anchor-id='CuisineFilter'>
                          <div tabIndex={0} className="flex items-center justify-center flex-col gap-1 cursor-pointer p-1 rounded-xl w-auto whitespace-nowrap">
                            <div className=" w-15 h-15 overflow-hidden block my-0 mx-auto">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60" preserveAspectRatio="xMidYMid meet" className="w-full h-full" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                                <defs>
                                  <clipPath id="__lottie_element_2">
                                    <rect width="60" height="60" x="0" y="0">
                                    </rect>
                                  </clipPath>
                                  <clipPath id="__lottie_element_4">
                                    <path d="M0,0 L72,0 L72,72 L0,72z">
                                    </path>
                                  </clipPath>
                                </defs>
                                <g clipPath="url(#__lottie_element_2)">
                                  <g clipPath="url(#__lottie_element_4)" className="block" transform="matrix(0.5,0,0,0.5,12,12)" opacity="1">
                                    <g className="block" transform="matrix(1,0,0,1,0,0)" opacity="1">
                                      <image width="72px" height="72px" preserveAspectRatio="xMidYMid slice" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAD8UlEQVR4nO2c7XHrRBSGn2MYIuDHdQfXVIA6uOqAUAFKBaQE04FvBeh24FSAUgFKBdgVEP8AFGbw8mM317K8sr7ljaVnxhNLllYn75yzH9I5gomJNsilLqz8b334b663ZnPY+2cO35gP8MWzJH8l/Vp3oHeBlO8tgADEB+Wbv+86aHoLbEASUAkQS5JuOmj3iF4EUv43t7C/BQLgfR/XKGALxDBbS/L3uosGOxPIeEoIct+Rh7REdkAEatXGs1oLpPz5HF6WoH5u21aPfAKWTYRqJZAOJRW54TGV+ATevSTPz1VPaCSQ9pp0BfzU5PzLIjtQt5KkcaWj6zZvQioG9X3dcx3jTpI0KjuolkB67rKP31BIlVEqUmWBrlAcw+zHc1OCSgKZsNpcnzhg+iS/aISbVWvkJb5OccD8X1HRr6UCKf/r1RV0yGV80FOWU86GmPK9APitD4scZCtJusjvLPEgWfVkjIu8t3lRoUDK98IRhFYOFeb3FIaY8r0Nw67EXeG77Ihm9SDT94xRHECOwqwoxML+DXGWILtxEmJmIfrnYOY4h+wk+Wf+umXxoNQ6HxgP6p1eVmksAsnIBYLDw4ScQDq81A/DG+QcweuXnAf9GzBxRE6g/RReAEhRJy3nHt6NCHXaSZv+Z2RLi3IyHpRO3mMhI9AUXgfk82OhjEBqbjt0nKjPyRHZTjoY3hD3qXhPerxMAlmZ2UJs6qQP7K2d9JU+1mmCZ+2kJwB9P+jZ5kETmsMQD8cCPQ5siaNIoUATAEic3ZoEOuGrOLuVFejoh3EiT/n0vOw8qHLe3hUT5Xdk50GDZa+7izpJpDp6LqZ8Tw1njHM8SpIG+Z35W64PAxnjIkvbzpxApy42Eh6L0oJzAnlrk8I/NpZFPxwJpIc4NaakKUA+nksqt0wUvRW6amYEyBPcLM8eYdtpit1+78UmZzif/vuKdalhKvru+jDLDWQHs6BK9U9ZlmsI/NqNUa7wKk61ss7STHudjifr67jjKE9wE9Qphypdzese/maBLkp7w8hDXXGgdrWPt0DPGd5SndgWZvdNa1hbFNS9hEDgbsKVPIBEbYt7OynqNWnDAbAwnw9dtFuTrSkRX4O3rhtKRfRaN3/88oBKhNQO32rzmaZc7M0LNhoWz1QqrWyKY/ek6z7dlZ1eYPeHYwLVzTBRq676miKcCTEzhfijxinW+q6ucciDatemhX1YkccJgZTvRTXnU3dVXwzQli+HuEgRptQ8qpld+0ufo1aei/RBZjgPqTXnkR1I2NVrb6oyqAc1vDOwBSK46X3EsjFwiM3msK8izqNeNkh88Ji0V8uKuFCIFS1Bhn0/2UQH/A8nQjvWho8TwQAAAABJRU5ErkJggg==">
                                      </image>
                                    </g>
                                    <g className="block" transform="matrix(1,0,0,1,0,0)" opacity="1">
                                      <image width="72px" height="72px" preserveAspectRatio="xMidYMid slice" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAADd0lEQVR4nO2azXkaMRCGv5HwGXeQTQUmFWQNS87uIHRgdxA6MOmAEsjVsGHTAa7ATgfmbDSTA4sfjFlsS2JXSfTeAM0PHyNp0QiIRCKRSCTigcdplso8TZrOYxvVdAIbTN69UiRzNvrOzHojmaenTecEBCQQhJKtV5dsdCE3/U5D2TwRjEBCsivGGStuXKRgBKqg3bRIwQhEQlVrzlqkhtakYAQCcHbgs7ZhNaktky2CEOgtU4iEPpu8e1VHPtsEIRBrk75poNCw7qkWhEAQGrxxZJtXrVqrqBaBZJ4mVdOjfHI+tP48h+TfEshMsyEbfQeh631rDRs9fKfL9irvDnbfPPQjuHA0gWSenvKsNwHJt6c3Tx4fno1ZC/bVwv3gRSyjJxC6NtNsaOGvEvLpbEOZcIGdqaOz/Fm8Vd4tSOizTQylzUc6L+73xVKsPtGX6cLG74s4PpxsUyXOLibvXtmKAwC8ag2qYhltRrZ+d/FaQa+Ic6uzvAOspxYrLgC0HcItATwA+LDvQxY6P+nPCgf/ADxX0CuVcwaUIioew00clPZ7xQEAUjx09L/248MJAJhZbwTg8pVh3wFc4MAX84mPKvIi0OM0SxXJ3IcvnxDwQ2X5haMPN8p1Z4GaquK9bHY7a3vXBMpH/yDFAQBm5VRBTgLJPE2ePQgGCAmlLvZOAln8TagdAVIXe+s1SOZpwkbfuQSvC5d1yLqC2OjaD69sWa1aia2tyxQbONjWCilObG2tBCr/hbs+CdcGsUpsba0EYhKnrfNvwm6KkQTRFq4Duyn2sgv6zxLGoX3A/B8CKX54fVCFqc88QoVZWR+/WglEQve2AZvA5UzIroL+IoGE5JeLve0u5qVjUBNjF2MrgbQ2hUvQGllqxU63QuzWoPPiAcCtS+BaEBqVuVpjvYsJibfe05G41f3Z0NWJtUCt3s8xgN+uCRyJpWI18OHI7cgVCPJMiIUugmg9t7J8gnWvKxSWvjqqG7z0xcysN4bdLQ2f3CpWA1+Vs8FfZ3WaDRvqcCwhNPKxIO/D9+WFxLAau9zaeAe/QTJSiseuW/khjnU/KCkP9b324YXkFwETZXTheypVcRSBtpGbfoe1SSHUEZLkjdW1FJIFCd2DZMGsFj4X3vdwdIGqkJt+Z7VzdNuUCJFIJBKJRCKRSCQSiUQikUgk4oc/7kNbTAIfH5EAAAAASUVORK5CYII=">
                                      </image>
                                    </g>
                                    <g className="block" transform="matrix(1,0,0,1,0,0)" opacity="1">
                                      <image width="72px" height="72px" preserveAspectRatio="xMidYMid slice" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAB2ElEQVR4nO3Yy23bQBSF4f+S2UsdWMw2sC1VEHYQpQO5A5XgDpISlAriEpgKJFPw1iN1EO9N3iwiBoYgC3lwhghwvqUwOBwczpAagoiIiIiIiIiIiIiIiIiIiMRkQ08AYB18nMECZ2kwNmN+WVg19LwAsqEnUAdf5M7OnE8GF8DIndtXxz/6qn50vw++TDG/wVbQOvgkd1bA+5MDjI9Xhd29/KkOPsf5em5M3wYp6CH4tHEqYHRm2FNulO8K28BhGzqbwyr7NaYxJrPCvseaa/Ittg1eNs6a8+UAjBqnug++3AYvc+fzUTkAo6wl6lZLuoJ+c+X8EYf99Vub9JV3LOkKan4+c3orB8Dg4iH4tM/Ml5IVVAdfANcxsp+hjJELCQs69+r+Zy3jWNFJCqqDL048YP8LaVaQM09ynQhSbbEPia7Tu+gFxXzDdLKMKlp2rOBOS7wHaCfmwXbww2oPvsQMj17QM2wixj81FvHvAwkKOhwkv0UJN5azwnZRsg+SbDGLcZeNm6vCVr3nHklS0GVhFcZNH1kO+9yYpSgHEp/mt8HLw5Hj9EeyMxz2ZtymKqYz2AeztmXhxpRXynLYG+zcqd5k3HUfzkRERERERERERERERET+wg8vhY1b3n+g0wAAAABJRU5ErkJggg==">
                                      </image>
                                    </g>
                                  </g>
                                </g>
                              </svg>    
                            </div>
                            <span className="text-black font-mine1 text-14px font-medium leading-5 tracking-normal no-underline normal-case text-center block m-0 p-0">Trending</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="ml-0 pl-0.5 snap-start relative max-w-full p-0">
                      <a className=" decoration-inherit cursor-pointer box-border">
                        <div data-anchor-id='CuisineFilter'>
                          <div tabIndex={0} className="flex items-center justify-center flex-col gap-1 cursor-pointer p-1 rounded-xl w-auto whitespace-nowrap">
                            <div className=" w-15 h-15 overflow-hidden block my-0 mx-auto">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60" preserveAspectRatio="xMidYMid meet" className="w-full h-full" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                                <defs>
                                  <clipPath id="__lottie_element_2">
                                    <rect width="60" height="60" x="0" y="0">
                                    </rect>
                                  </clipPath>
                                  <clipPath id="__lottie_element_4">
                                    <path d="M0,0 L72,0 L72,72 L0,72z">
                                    </path>
                                  </clipPath>
                                </defs>
                                <g clipPath="url(#__lottie_element_2)">
                                  <g clipPath="url(#__lottie_element_4)" className="block" transform="matrix(0.5,0,0,0.5,12,12)" opacity="1">
                                    <g className="block" transform="matrix(1,0,0,1,0,0)" opacity="1">
                                      <image width="72px" height="72px" preserveAspectRatio="xMidYMid slice" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAD8UlEQVR4nO2c7XHrRBSGn2MYIuDHdQfXVIA6uOqAUAFKBaQE04FvBeh24FSAUgFKBdgVEP8AFGbw8mM317K8sr7ljaVnxhNLllYn75yzH9I5gomJNsilLqz8b334b663ZnPY+2cO35gP8MWzJH8l/Vp3oHeBlO8tgADEB+Wbv+86aHoLbEASUAkQS5JuOmj3iF4EUv43t7C/BQLgfR/XKGALxDBbS/L3uosGOxPIeEoIct+Rh7REdkAEatXGs1oLpPz5HF6WoH5u21aPfAKWTYRqJZAOJRW54TGV+ATevSTPz1VPaCSQ9pp0BfzU5PzLIjtQt5KkcaWj6zZvQioG9X3dcx3jTpI0KjuolkB67rKP31BIlVEqUmWBrlAcw+zHc1OCSgKZsNpcnzhg+iS/aISbVWvkJb5OccD8X1HRr6UCKf/r1RV0yGV80FOWU86GmPK9APitD4scZCtJusjvLPEgWfVkjIu8t3lRoUDK98IRhFYOFeb3FIaY8r0Nw67EXeG77Ihm9SDT94xRHECOwqwoxML+DXGWILtxEmJmIfrnYOY4h+wk+Wf+umXxoNQ6HxgP6p1eVmksAsnIBYLDw4ScQDq81A/DG+QcweuXnAf9GzBxRE6g/RReAEhRJy3nHt6NCHXaSZv+Z2RLi3IyHpRO3mMhI9AUXgfk82OhjEBqbjt0nKjPyRHZTjoY3hD3qXhPerxMAlmZ2UJs6qQP7K2d9JU+1mmCZ+2kJwB9P+jZ5kETmsMQD8cCPQ5siaNIoUATAEic3ZoEOuGrOLuVFejoh3EiT/n0vOw8qHLe3hUT5Xdk50GDZa+7izpJpDp6LqZ8Tw1njHM8SpIG+Z35W64PAxnjIkvbzpxApy42Eh6L0oJzAnlrk8I/NpZFPxwJpIc4NaakKUA+nksqt0wUvRW6amYEyBPcLM8eYdtpit1+78UmZzif/vuKdalhKvru+jDLDWQHs6BK9U9ZlmsI/NqNUa7wKk61ss7STHudjifr67jjKE9wE9Qphypdzese/maBLkp7w8hDXXGgdrWPt0DPGd5SndgWZvdNa1hbFNS9hEDgbsKVPIBEbYt7OynqNWnDAbAwnw9dtFuTrSkRX4O3rhtKRfRaN3/88oBKhNQO32rzmaZc7M0LNhoWz1QqrWyKY/ek6z7dlZ1eYPeHYwLVzTBRq676miKcCTEzhfijxinW+q6ucciDatemhX1YkccJgZTvRTXnU3dVXwzQli+HuEgRptQ8qpld+0ufo1aei/RBZjgPqTXnkR1I2NVrb6oyqAc1vDOwBSK46X3EsjFwiM3msK8izqNeNkh88Ji0V8uKuFCIFS1Bhn0/2UQH/A8nQjvWho8TwQAAAABJRU5ErkJggg==">
                                      </image>
                                    </g>
                                    <g className="block" transform="matrix(1,0,0,1,0,0)" opacity="1">
                                      <image width="72px" height="72px" preserveAspectRatio="xMidYMid slice" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAADd0lEQVR4nO2azXkaMRCGv5HwGXeQTQUmFWQNS87uIHRgdxA6MOmAEsjVsGHTAa7ATgfmbDSTA4sfjFlsS2JXSfTeAM0PHyNp0QiIRCKRSCTigcdplso8TZrOYxvVdAIbTN69UiRzNvrOzHojmaenTecEBCQQhJKtV5dsdCE3/U5D2TwRjEBCsivGGStuXKRgBKqg3bRIwQhEQlVrzlqkhtakYAQCcHbgs7ZhNaktky2CEOgtU4iEPpu8e1VHPtsEIRBrk75poNCw7qkWhEAQGrxxZJtXrVqrqBaBZJ4mVdOjfHI+tP48h+TfEshMsyEbfQeh631rDRs9fKfL9irvDnbfPPQjuHA0gWSenvKsNwHJt6c3Tx4fno1ZC/bVwv3gRSyjJxC6NtNsaOGvEvLpbEOZcIGdqaOz/Fm8Vd4tSOizTQylzUc6L+73xVKsPtGX6cLG74s4PpxsUyXOLibvXtmKAwC8ag2qYhltRrZ+d/FaQa+Ic6uzvAOspxYrLgC0HcItATwA+LDvQxY6P+nPCgf/ADxX0CuVcwaUIioew00clPZ7xQEAUjx09L/248MJAJhZbwTg8pVh3wFc4MAX84mPKvIi0OM0SxXJ3IcvnxDwQ2X5haMPN8p1Z4GaquK9bHY7a3vXBMpH/yDFAQBm5VRBTgLJPE2ePQgGCAmlLvZOAln8TagdAVIXe+s1SOZpwkbfuQSvC5d1yLqC2OjaD69sWa1aia2tyxQbONjWCilObG2tBCr/hbs+CdcGsUpsba0EYhKnrfNvwm6KkQTRFq4Duyn2sgv6zxLGoX3A/B8CKX54fVCFqc88QoVZWR+/WglEQve2AZvA5UzIroL+IoGE5JeLve0u5qVjUBNjF2MrgbQ2hUvQGllqxU63QuzWoPPiAcCtS+BaEBqVuVpjvYsJibfe05G41f3Z0NWJtUCt3s8xgN+uCRyJpWI18OHI7cgVCPJMiIUugmg9t7J8gnWvKxSWvjqqG7z0xcysN4bdLQ2f3CpWA1+Vs8FfZ3WaDRvqcCwhNPKxIO/D9+WFxLAau9zaeAe/QTJSiseuW/khjnU/KCkP9b324YXkFwETZXTheypVcRSBtpGbfoe1SSHUEZLkjdW1FJIFCd2DZMGsFj4X3vdwdIGqkJt+Z7VzdNuUCJFIJBKJRCKRSCQSiUQikUgk4oc/7kNbTAIfH5EAAAAASUVORK5CYII=">
                                      </image>
                                    </g>
                                    <g className="block" transform="matrix(1,0,0,1,0,0)" opacity="1">
                                      <image width="72px" height="72px" preserveAspectRatio="xMidYMid slice" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAB2ElEQVR4nO3Yy23bQBSF4f+S2UsdWMw2sC1VEHYQpQO5A5XgDpISlAriEpgKJFPw1iN1EO9N3iwiBoYgC3lwhghwvqUwOBwczpAagoiIiIiIiIiIiIiIiIiIiMRkQ08AYB18nMECZ2kwNmN+WVg19LwAsqEnUAdf5M7OnE8GF8DIndtXxz/6qn50vw++TDG/wVbQOvgkd1bA+5MDjI9Xhd29/KkOPsf5em5M3wYp6CH4tHEqYHRm2FNulO8K28BhGzqbwyr7NaYxJrPCvseaa/Ittg1eNs6a8+UAjBqnug++3AYvc+fzUTkAo6wl6lZLuoJ+c+X8EYf99Vub9JV3LOkKan4+c3orB8Dg4iH4tM/Ml5IVVAdfANcxsp+hjJELCQs69+r+Zy3jWNFJCqqDL048YP8LaVaQM09ynQhSbbEPia7Tu+gFxXzDdLKMKlp2rOBOS7wHaCfmwXbww2oPvsQMj17QM2wixj81FvHvAwkKOhwkv0UJN5azwnZRsg+SbDGLcZeNm6vCVr3nHklS0GVhFcZNH1kO+9yYpSgHEp/mt8HLw5Hj9EeyMxz2ZtymKqYz2AeztmXhxpRXynLYG+zcqd5k3HUfzkRERERERERERERERET+wg8vhY1b3n+g0wAAAABJRU5ErkJggg==">
                                      </image>
                                    </g>
                                  </g>
                                </g>
                              </svg>    
                            </div>
                            <span className="text-black font-mine1 text-14px font-medium leading-5 tracking-normal no-underline normal-case text-center block m-0 p-0">Trending</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Mainside;