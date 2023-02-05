import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NftCard.css'
export default function NftCard({imageNftPath,nftPrice,nftName}) {
    let [likeClicked,setLikeClicked]=useState(false)
    const navigate=useNavigate()
    let likeToggle=()=>{
        likeClicked===false?setLikeClicked(true):setLikeClicked(false)
    }
    let takeNftDetails=()=>{
        localStorage.setItem('nftpath',imageNftPath)
        navigate('/nftpage')
    }
  return (
    <div className='Nftcard'>
        <div className='Nftcard_Innercon'>
            <div className='Nftcard_Innercon-imageCon' onClick={takeNftDetails}>
                <img src={imageNftPath} alt="" className='Innercon_imageCon-img' />
            </div>
            <span className='Nftcard_Innercon-nftnameandprice'>
                 <p className='Innercon_nftnameandprice-p1'>{nftName} {/*Vulputate felis purus viverra morbi facilisi eget*/}</p> 
                <p className='Innercon_nftnameandprice-p2'>{nftPrice}</p>
            </span>
            <span className='timeCon'>
                <img src="/assets/Timer Icon.svg" alt="" />
               
                <p className='timeCon_time'>2:41 min left</p>
            </span>
            <hr className='Nftcard_Innercon-hr'/>
            <div className='biddingNumConlikeCon'>
                <span className='biddingNumConlikeCon-innerCon'>
                    <div className='profilePicCon'>
                        <img src="/assets/Avatars.png" alt="" className='profilePicCon-img' />
                    </div>
                    <p className='biddingText'>35 people are bidding</p>
                </span>
                <span className='heartandlikeNumCon'>
                    <div className='heartCon' onClick={likeToggle}>
                        <svg className='heartCon_heart' width="18" height="17" viewBox="0 0 18 17" fill={likeClicked===false?"none":"red"} xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.83268 1C2.53185 1 0.666016 2.84667 0.666016 5.125C0.666016 6.96417 1.39518 11.3292 8.57268 15.7417C8.70125 15.8199 8.84885 15.8613 8.99935 15.8613C9.14985 15.8613 9.29745 15.8199 9.42602 15.7417C16.6035 11.3292 17.3327 6.96417 17.3327 5.125C17.3327 2.84667 15.4668 1 13.166 1C10.8652 1 8.99935 3.5 8.99935 3.5C8.99935 3.5 7.13352 1 4.83268 1Z" stroke={likeClicked===false?"#7780A1":"red"} stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p className='heartandlikeNumCon_likeNum'>
                                123
                    </p>
                </span>
            </div>
        </div>
    </div>
  )
}
// "/assets/Avatars.png"