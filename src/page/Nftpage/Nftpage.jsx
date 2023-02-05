import React from 'react'
import './Nftpage.css'
import Navbar from '../../component/navbar/navbar'
import Footer from '../../component/footer/footer'
import SmallNftCard from '../../component/SmallNftCard/SmallNftCard'
import { useState } from 'react'
export default function Nftpage() {
  let [image,setImage]=useState(localStorage.getItem('nftpath'))
  return (
    <div className='nftpageMainCon'>
        <Navbar/>
        <section className='nftpageMainCon__section1'>
          <div className='nftpageMainCon__section1-imgCon'>
            <img src={image===""?"/assets/unsplash_rlbG0p_nQOU.png":image} alt="" className='section1__imgCon-Nftimg' />
            {/* */}
            <div className='section1__imgCon-imglargTrigger'>
                <img src="/assets/fi-rs-compress-alt.svg" alt="" className='section1__imgCon'/>       
            </div>
            <div className='section1__imgCon-mobileTime'>
                <p className='imgCon__mobileTime-p1'>Time left</p>
                <p className='imgCon__mobileTime-p2'>22:59 min</p>
                <p className='imgCon__mobileTime-p3'>(01.01.2022 - 01:40:47)</p>
            </div>
            <div className='section1__imgCon-likeShareCon'>
              <div className='circle'>
                    <div className='circle__heart'>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.83268 2.5C3.53185 2.5 1.66602 4.34667 1.66602 6.625C1.66602 8.46417 2.39518 12.8292 9.57268 17.2417C9.70125 17.3199 9.84885 17.3613 9.99935 17.3613C10.1498 17.3613 10.2974 17.3199 10.426 17.2417C17.6035 12.8292 18.3327 8.46417 18.3327 6.625C18.3327 4.34667 16.4668 2.5 14.166 2.5C11.8652 2.5 9.99935 5 9.99935 5C9.99935 5 8.13352 2.5 5.83268 2.5Z" stroke="#7780A1" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
              </div>
              <div className='circle'>
                  <div>
                    <div className='circle__copy'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_12729_1041)">
                        <path d="M10.8334 16.6667C11.9381 16.6654 12.9971 16.2259 13.7782 15.4448C14.5593 14.6637 14.9988 13.6047 15.0001 12.5V5.20251C15.0014 4.76448 14.9157 4.33055 14.7481 3.92586C14.5804 3.52118 14.3341 3.1538 14.0234 2.84501L12.1551 0.976681C11.8463 0.665993 11.4789 0.419684 11.0742 0.252031C10.6695 0.0843791 10.2356 -0.00128163 9.79758 1.44913e-05H5.83342C4.72875 0.00133771 3.66971 0.440749 2.8886 1.22186C2.10748 2.00298 1.66807 3.06202 1.66675 4.16668V12.5C1.66807 13.6047 2.10748 14.6637 2.8886 15.4448C3.66971 16.2259 4.72875 16.6654 5.83342 16.6667H10.8334ZM3.33341 12.5V4.16668C3.33341 3.50364 3.59681 2.86776 4.06565 2.39891C4.53449 1.93007 5.17037 1.66668 5.83342 1.66668C5.83342 1.66668 9.93258 1.67835 10.0001 1.68668V3.33335C10.0001 3.77538 10.1757 4.1993 10.4882 4.51186C10.8008 4.82442 11.2247 5.00001 11.6667 5.00001H13.3134C13.3217 5.06751 13.3334 12.5 13.3334 12.5C13.3334 13.1631 13.07 13.7989 12.6012 14.2678C12.1323 14.7366 11.4965 15 10.8334 15H5.83342C5.17037 15 4.53449 14.7366 4.06565 14.2678C3.59681 13.7989 3.33341 13.1631 3.33341 12.5ZM18.3334 6.66668V15.8333C18.3321 16.938 17.8927 17.9971 17.1116 18.7782C16.3305 19.5593 15.2714 19.9987 14.1667 20H6.66675C6.44573 20 6.23377 19.9122 6.07749 19.7559C5.92121 19.5997 5.83342 19.3877 5.83342 19.1667C5.83342 18.9457 5.92121 18.7337 6.07749 18.5774C6.23377 18.4211 6.44573 18.3333 6.66675 18.3333H14.1667C14.8298 18.3333 15.4657 18.07 15.9345 17.6011C16.4034 17.1323 16.6667 16.4964 16.6667 15.8333V6.66668C16.6667 6.44567 16.7545 6.23371 16.9108 6.07743C17.0671 5.92115 17.2791 5.83335 17.5001 5.83335C17.7211 5.83335 17.9331 5.92115 18.0893 6.07743C18.2456 6.23371 18.3334 6.44567 18.3334 6.66668Z" fill="#7780A1"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_12729_1041">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
              </div>
              <div className='circle'>
                    <div className="circle__share">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_12729_1045)">
                          <path d="M16.111 12.2232C15.4809 12.2237 14.8604 12.3775 14.3031 12.6714C13.7457 12.9652 13.2682 13.3903 12.9118 13.9099L7.48765 11.4607C7.87291 10.5304 7.8744 9.48543 7.49181 8.55403L12.9085 6.09236C13.4367 6.85633 14.2213 7.40566 15.1198 7.64073C16.0184 7.8758 16.9714 7.78103 17.8061 7.37361C18.6407 6.96619 19.3018 6.27311 19.6692 5.42008C20.0366 4.56706 20.0861 3.61059 19.8088 2.72417C19.5314 1.83776 18.9455 1.08011 18.1574 0.588657C17.3693 0.0972062 16.4311 -0.0954951 15.5131 0.0455079C14.5951 0.186511 13.758 0.651879 13.1537 1.3572C12.5494 2.06252 12.2179 2.96107 12.2193 3.88986C12.2228 4.10969 12.2451 4.32882 12.286 4.54486L6.52765 7.16153C5.9746 6.64338 5.28224 6.29806 4.53563 6.168C3.78901 6.03793 3.02067 6.12879 2.32499 6.42941C1.62931 6.73003 1.03658 7.22731 0.619644 7.86016C0.202703 8.49302 -0.0202981 9.23388 -0.0219633 9.99174C-0.0236284 10.7496 0.196115 11.4914 0.610271 12.1261C1.02443 12.7608 1.61496 13.2607 2.30931 13.5643C3.00367 13.868 3.7716 13.9622 4.51878 13.8355C5.26595 13.7087 5.95983 13.3664 6.51515 12.8507L12.2885 15.4574C12.2484 15.6732 12.2264 15.892 12.2226 16.1115C12.2225 16.8808 12.4505 17.6329 12.8777 18.2725C13.305 18.9122 13.9124 19.4109 14.6231 19.7053C15.3338 19.9998 16.1158 20.0769 16.8703 19.9268C17.6249 19.7768 18.3179 19.4064 18.8619 18.8624C19.4058 18.3185 19.7763 17.6254 19.9263 16.8709C20.0763 16.1164 19.9992 15.3343 19.7048 14.6237C19.4103 13.913 18.9117 13.3056 18.272 12.8783C17.6323 12.451 16.8803 12.223 16.111 12.2232ZM16.111 1.66736C16.5506 1.6672 16.9804 1.7974 17.346 2.04152C17.7116 2.28563 17.9966 2.63268 18.1649 3.03877C18.3332 3.44486 18.3774 3.89176 18.2917 4.32294C18.206 4.75412 17.9944 5.15021 17.6837 5.46111C17.3729 5.77202 16.9769 5.98377 16.5457 6.0696C16.1146 6.15542 15.6676 6.11145 15.2615 5.94326C14.8553 5.77507 14.5082 5.49021 14.2639 5.1247C14.0197 4.7592 13.8893 4.32947 13.8893 3.88986C13.8898 3.3007 14.1239 2.73578 14.5405 2.3191C14.957 1.90242 15.5218 1.66802 16.111 1.66736ZM3.88931 12.2232C3.44971 12.2234 3.01993 12.0932 2.65433 11.849C2.28873 11.6049 2.00374 11.2579 1.8354 10.8518C1.66705 10.4457 1.62292 9.9988 1.70858 9.56762C1.79425 9.13644 2.00585 8.74035 2.31664 8.42945C2.62743 8.11854 3.02344 7.90678 3.45459 7.82096C3.88573 7.73514 4.33264 7.7791 4.7388 7.94729C5.14496 8.11549 5.49212 8.40035 5.73636 8.76585C5.98061 9.13136 6.11098 9.56109 6.11098 10.0007C6.11032 10.5898 5.87607 11.1546 5.45959 11.5712C5.04311 11.9878 4.47841 12.2223 3.88931 12.2232ZM16.111 18.334C15.6714 18.334 15.2417 18.2037 14.8762 17.9595C14.5107 17.7153 14.2259 17.3682 14.0577 16.962C13.8894 16.5559 13.8454 16.1091 13.9312 15.6779C14.0169 15.2468 14.2286 14.8508 14.5394 14.54C14.8503 14.2292 15.2463 14.0175 15.6774 13.9317C16.1085 13.846 16.5554 13.89 16.9615 14.0582C17.3676 14.2264 17.7147 14.5113 17.9589 14.8768C18.2031 15.2423 18.3335 15.672 18.3335 16.1115C18.333 16.7008 18.0987 17.2659 17.682 17.6826C17.2653 18.0993 16.7003 18.3336 16.111 18.334Z" fill="#7780A1"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_12729_1045">
                          <rect width="20" height="20" fill="white"/>
                          </clipPath>
                          </defs>
                      </svg>
                    </div>
              </div>
            </div>
          </div>
          <div className='nftpageMainCon__section1-pcDetails'>
            <div>
                <h3 className='section1__pcDetails-h3'>Dui accumsan leo vestibulum ornare</h3>
                <p className='section1__pcDetails-p'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                <div className='section1__pcDetails-nameMainCon'>
                  <div className='pcDetails__nameMainCon-Con'>
                    <img src="/assets/Ellipse.png" alt="" className='nameMainCon__Con-img' />
                    <span className='nameMainCon__Con-namesCon'>
                      <p className='Con__namesCon-p1'>Creator</p>
                      <p className='Con__namesCon-p2'>@brook_sim</p>
                    </span>
                  </div>
                  <div className='pcDetails__nameMainCon-Con'>
                    <img src="/assets/Ellipse (1).png" alt="" className='nameMainCon__Con-img' />
                    <span  className='nameMainCon__Con-namesCon'>
                      <p className='Con__namesCon-p1'>Collection</p>
                      <p className='Con__namesCon-p2'>Afterlife</p>
                    </span>
                  </div>
                </div>
            </div>
            <div className='section1__imgCon-likeShareConPC'>
              <div className='circle'>
                    <div className='circle__heart'>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.83268 2.5C3.53185 2.5 1.66602 4.34667 1.66602 6.625C1.66602 8.46417 2.39518 12.8292 9.57268 17.2417C9.70125 17.3199 9.84885 17.3613 9.99935 17.3613C10.1498 17.3613 10.2974 17.3199 10.426 17.2417C17.6035 12.8292 18.3327 8.46417 18.3327 6.625C18.3327 4.34667 16.4668 2.5 14.166 2.5C11.8652 2.5 9.99935 5 9.99935 5C9.99935 5 8.13352 2.5 5.83268 2.5Z" stroke="#7780A1" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
              </div>
              <div className='circle'>
                  <div>
                    <div className='circle__copy'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_12729_1041)">
                        <path d="M10.8334 16.6667C11.9381 16.6654 12.9971 16.2259 13.7782 15.4448C14.5593 14.6637 14.9988 13.6047 15.0001 12.5V5.20251C15.0014 4.76448 14.9157 4.33055 14.7481 3.92586C14.5804 3.52118 14.3341 3.1538 14.0234 2.84501L12.1551 0.976681C11.8463 0.665993 11.4789 0.419684 11.0742 0.252031C10.6695 0.0843791 10.2356 -0.00128163 9.79758 1.44913e-05H5.83342C4.72875 0.00133771 3.66971 0.440749 2.8886 1.22186C2.10748 2.00298 1.66807 3.06202 1.66675 4.16668V12.5C1.66807 13.6047 2.10748 14.6637 2.8886 15.4448C3.66971 16.2259 4.72875 16.6654 5.83342 16.6667H10.8334ZM3.33341 12.5V4.16668C3.33341 3.50364 3.59681 2.86776 4.06565 2.39891C4.53449 1.93007 5.17037 1.66668 5.83342 1.66668C5.83342 1.66668 9.93258 1.67835 10.0001 1.68668V3.33335C10.0001 3.77538 10.1757 4.1993 10.4882 4.51186C10.8008 4.82442 11.2247 5.00001 11.6667 5.00001H13.3134C13.3217 5.06751 13.3334 12.5 13.3334 12.5C13.3334 13.1631 13.07 13.7989 12.6012 14.2678C12.1323 14.7366 11.4965 15 10.8334 15H5.83342C5.17037 15 4.53449 14.7366 4.06565 14.2678C3.59681 13.7989 3.33341 13.1631 3.33341 12.5ZM18.3334 6.66668V15.8333C18.3321 16.938 17.8927 17.9971 17.1116 18.7782C16.3305 19.5593 15.2714 19.9987 14.1667 20H6.66675C6.44573 20 6.23377 19.9122 6.07749 19.7559C5.92121 19.5997 5.83342 19.3877 5.83342 19.1667C5.83342 18.9457 5.92121 18.7337 6.07749 18.5774C6.23377 18.4211 6.44573 18.3333 6.66675 18.3333H14.1667C14.8298 18.3333 15.4657 18.07 15.9345 17.6011C16.4034 17.1323 16.6667 16.4964 16.6667 15.8333V6.66668C16.6667 6.44567 16.7545 6.23371 16.9108 6.07743C17.0671 5.92115 17.2791 5.83335 17.5001 5.83335C17.7211 5.83335 17.9331 5.92115 18.0893 6.07743C18.2456 6.23371 18.3334 6.44567 18.3334 6.66668Z" fill="#7780A1"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_12729_1041">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
              </div>
              <div className='circle'>
                    <div className="circle__share">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_12729_1045)">
                          <path d="M16.111 12.2232C15.4809 12.2237 14.8604 12.3775 14.3031 12.6714C13.7457 12.9652 13.2682 13.3903 12.9118 13.9099L7.48765 11.4607C7.87291 10.5304 7.8744 9.48543 7.49181 8.55403L12.9085 6.09236C13.4367 6.85633 14.2213 7.40566 15.1198 7.64073C16.0184 7.8758 16.9714 7.78103 17.8061 7.37361C18.6407 6.96619 19.3018 6.27311 19.6692 5.42008C20.0366 4.56706 20.0861 3.61059 19.8088 2.72417C19.5314 1.83776 18.9455 1.08011 18.1574 0.588657C17.3693 0.0972062 16.4311 -0.0954951 15.5131 0.0455079C14.5951 0.186511 13.758 0.651879 13.1537 1.3572C12.5494 2.06252 12.2179 2.96107 12.2193 3.88986C12.2228 4.10969 12.2451 4.32882 12.286 4.54486L6.52765 7.16153C5.9746 6.64338 5.28224 6.29806 4.53563 6.168C3.78901 6.03793 3.02067 6.12879 2.32499 6.42941C1.62931 6.73003 1.03658 7.22731 0.619644 7.86016C0.202703 8.49302 -0.0202981 9.23388 -0.0219633 9.99174C-0.0236284 10.7496 0.196115 11.4914 0.610271 12.1261C1.02443 12.7608 1.61496 13.2607 2.30931 13.5643C3.00367 13.868 3.7716 13.9622 4.51878 13.8355C5.26595 13.7087 5.95983 13.3664 6.51515 12.8507L12.2885 15.4574C12.2484 15.6732 12.2264 15.892 12.2226 16.1115C12.2225 16.8808 12.4505 17.6329 12.8777 18.2725C13.305 18.9122 13.9124 19.4109 14.6231 19.7053C15.3338 19.9998 16.1158 20.0769 16.8703 19.9268C17.6249 19.7768 18.3179 19.4064 18.8619 18.8624C19.4058 18.3185 19.7763 17.6254 19.9263 16.8709C20.0763 16.1164 19.9992 15.3343 19.7048 14.6237C19.4103 13.913 18.9117 13.3056 18.272 12.8783C17.6323 12.451 16.8803 12.223 16.111 12.2232ZM16.111 1.66736C16.5506 1.6672 16.9804 1.7974 17.346 2.04152C17.7116 2.28563 17.9966 2.63268 18.1649 3.03877C18.3332 3.44486 18.3774 3.89176 18.2917 4.32294C18.206 4.75412 17.9944 5.15021 17.6837 5.46111C17.3729 5.77202 16.9769 5.98377 16.5457 6.0696C16.1146 6.15542 15.6676 6.11145 15.2615 5.94326C14.8553 5.77507 14.5082 5.49021 14.2639 5.1247C14.0197 4.7592 13.8893 4.32947 13.8893 3.88986C13.8898 3.3007 14.1239 2.73578 14.5405 2.3191C14.957 1.90242 15.5218 1.66802 16.111 1.66736ZM3.88931 12.2232C3.44971 12.2234 3.01993 12.0932 2.65433 11.849C2.28873 11.6049 2.00374 11.2579 1.8354 10.8518C1.66705 10.4457 1.62292 9.9988 1.70858 9.56762C1.79425 9.13644 2.00585 8.74035 2.31664 8.42945C2.62743 8.11854 3.02344 7.90678 3.45459 7.82096C3.88573 7.73514 4.33264 7.7791 4.7388 7.94729C5.14496 8.11549 5.49212 8.40035 5.73636 8.76585C5.98061 9.13136 6.11098 9.56109 6.11098 10.0007C6.11032 10.5898 5.87607 11.1546 5.45959 11.5712C5.04311 11.9878 4.47841 12.2223 3.88931 12.2232ZM16.111 18.334C15.6714 18.334 15.2417 18.2037 14.8762 17.9595C14.5107 17.7153 14.2259 17.3682 14.0577 16.962C13.8894 16.5559 13.8454 16.1091 13.9312 15.6779C14.0169 15.2468 14.2286 14.8508 14.5394 14.54C14.8503 14.2292 15.2463 14.0175 15.6774 13.9317C16.1085 13.846 16.5554 13.89 16.9615 14.0582C17.3676 14.2264 17.7147 14.5113 17.9589 14.8768C18.2031 15.2423 18.3335 15.672 18.3335 16.1115C18.333 16.7008 18.0987 17.2659 17.682 17.6826C17.2653 18.0993 16.7003 18.3336 16.111 18.334Z" fill="#7780A1"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_12729_1045">
                          <rect width="20" height="20" fill="white"/>
                          </clipPath>
                          </defs>
                      </svg>
                    </div>
              </div>
            </div>
            <div className='section1__pcDetails-btnPriceTimeCon'>
                <span className='pcDetails__btnPriceTimeCon-innercon'>
                  <div className='btnPriceTimeCon__innercon-priceCon'>
                      <p className='innercon__priceCon-p1'>Current price</p>
                      <p className='innercon__priceCon-p2'>5.25 ETH</p>
                  </div>
                  <div className='pcDetails__btnPriceTimeCon-timeCon'>
                      <p className='btnPriceTimeCon__timeCon-p1'>Time left</p>
                      <p className='btnPriceTimeCon__timeCon-p2'>22:59 min</p>
                      <p className='btnPriceTimeCon__timeCon-p3'>(01.01.2022 - 01:40:47)</p>
                  </div>
                </span>
                <button className='pcDetails__btnPriceTimeCon-btn'>Place a bid</button>
            </div>
            <div className='section1__pcDetails-chartCon'>
                <p className='pcDetails__chartCon-p'>History of bids (12 people are bidding)</p>
                <img src="/assets/chart.svg" alt="chart" className='pcDetails__chartCon-chartImg' />
            </div>
          </div>
          <div className='nftpageMainCon__section1-mobileDetails'>
              <div>
                <span className='nameandethpriceCon'>
                <div className='pcDetails__nameMainCon-Con'>
                      <img src="/assets/Ellipse.png" alt="" />
                      <span className='nameMainCon__Con-namesCon'>
                        <p className='Con__namesCon-p1'>Creator</p>
                        <p className='Con__namesCon-p2'>@brook_sim</p>
                      </span>
                </div>
                  <div>
                    <p className='nftMobilePrice'>5.25 ETH</p>
                    <p className="Con__namesCon-p1">Current price</p>
                  </div>
                </span>
                <span>
                  <h3 className='nftNameMobile'>Dui accumsan leo vestibulum ornare</h3>
                  <p className='nftDiscriptionMobile'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                </span>
              </div>
              <div className='section1__pcDetails-chartCon'>
                <p className='pcDetails__chartCon-p'>History of bids (12 people are bidding)</p>
                <img src="/assets/chart.svg" alt="chart" className='pcDetails__chartCon-chartImg' />
            </div>
              <button className='bidPriceBtn'>Place a bid</button>
          </div>
        </section>
        <section className='nftpageMainCon__section2'>
            <p className='nftpageMainCon__section2-p1'>Overline</p>
            <p className='nftpageMainCon__section2-p2'>More form this author</p>
          <div className='nftpageMainCon__section2-nftCon'>
            <SmallNftCard nftImg={'/assets/d.png'}/>
            <SmallNftCard nftImg={'/assets/unsplash_TVQFl9R-MLQ.png'}/>
            <SmallNftCard nftImg={'/assets/unsplash_p203ekCK4Ac.png'}/> 
            <SmallNftCard nftImg={'/assets/unsplash_SvGzLn7y_sw.png'}/>
            <SmallNftCard nftImg={'/assets/unsplash_AJgFLjnmSs4.png'}/>
            <SmallNftCard nftImg={'/assets/unsplash_5NE6mX0WVfQ.png'}/>
          </div>
          <button className='nftpageMainCon__section2-btn'>Show me more</button>
        </section>
        <Footer/>
    </div>
  )
}
