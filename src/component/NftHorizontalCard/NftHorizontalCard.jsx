import React from 'react'
import { useState } from 'react'
import './NftHorizontalCard.css'
NftHorizontalCard.defaultProps={
    NftName:"Vulputate velit viverra volutpat volutpat tristique"
}
export default function NftHorizontalCard({NftImg,NftName}) {
    let [likeClicked,setLikeClicked]=useState(false)
    let likeClickedfunc=()=>{
        setLikeClicked(likeClicked===false?true:false)
    }
  return (
    <div className='NftHorizontalCard_mainCon'>
        <img src={NftImg} alt="" className='mainCon_img'/>
        <div className='NftHorizontalCard_mainCon-NameandPriceCon'>
            <p className='mainCon_NameandPriceCon-nftName'>{NftName}</p>
            <span className='mainCon_NameandPriceCon-priceandtimeCon'>
                <span className='NameandPriceCon_priceandtimeCon-timeCon'><img src="/assets/Timer Icon.svg" alt="" className='NameandPriceCon_priceandtimeCon_timeIcon' /> <p className='NameandPriceCon_priceandtimeCon-time'>22:59</p></span>
                    <p className='NameandPriceCon_priceandtimeCon-price'>1.25 ETH</p>
            </span>
            <span className='mainCon_NameandPriceCon-likeBiddingCon'>
                <p className='NameandPriceCon_likeBiddingCon-bid'>101 people are bidding</p>
                <div className='NameandPriceCon_likeBiddingCon-likeIcon' onClick={likeClickedfunc}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill={likeClicked===false?"none":"red"} xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83268 2.5C3.53185 2.5 1.66602 4.34667 1.66602 6.625C1.66602 8.46417 2.39518 12.8292 9.57268 17.2417C9.70125 17.3199 9.84885 17.3613 9.99935 17.3613C10.1498 17.3613 10.2974 17.3199 10.426 17.2417C17.6035 12.8292 18.3327 8.46417 18.3327 6.625C18.3327 4.34667 16.4668 2.5 14.166 2.5C11.8652 2.5 9.99935 5 9.99935 5C9.99935 5 8.13352 2.5 5.83268 2.5Z" stroke={likeClicked===false?"#7780A1":"red"} stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </span>
        </div>
    </div>
  )
}
