import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SmallNftCard.css'
export default function SmallNftCard({nftImg}) {
    const navigate=useNavigate()
    let [likeClicked,setLikeClicked]=useState(false)
    let likeClickedfunc=()=>{
        setLikeClicked(likeClicked===false?true:false)
    }
    let takeNftDetails=()=>{
        localStorage.setItem('nftpath',nftImg)
        navigate('/nftpage')
    }
  return (
        <div className="hotsalesCon_innerCon-hotNft">
            <div className="innerCon_hotNft1-imgCon">
                <img src={nftImg} alt="" className="hotNft1_imgCon-img" onClick={takeNftDetails}/>
                </div>
                <p className="innerCon_hotNft1-NftName">Fames habitasse risus ultricies tortor sit</p>
                <span className="innerCon_hotNft1-timeandPriceCon"><span className="hotNft1_timeandPriceCon-timeCon">
                    <img src="/assets/Timer Icon.svg" alt="" className='timeandPriceCon_timeCon-timeIcon'/>
                    <p className="timeandPriceCon_timeCon-time">22:59</p>
                    </span>
                    <p className="hotNft1-timeandPriceCon-price">2.55 ETH</p>
                </span>
                <hr className="innerCon_hotNft1-hr"/>
                <span className="innerCon_hotNft1-biddingLikeCon">
                    <p className="hotNft1_biddingLikeCon-p">101 people are bidding</p>
                    <div className="hotNft1_biddingLikeCon-heartIcon" onClick={likeClickedfunc}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill={likeClicked===false?"none":"red"} xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.83268 2.5C3.53185 2.5 1.66602 4.34667 1.66602 6.625C1.66602 8.46417 2.39518 12.8292 9.57268 17.2417C9.70125 17.3199 9.84885 17.3613 9.99935 17.3613C10.1498 17.3613 10.2974 17.3199 10.426 17.2417C17.6035 12.8292 18.3327 8.46417 18.3327 6.625C18.3327 4.34667 16.4668 2.5 14.166 2.5C11.8652 2.5 9.99935 5 9.99935 5C9.99935 5 8.13352 2.5 5.83268 2.5Z" stroke={likeClicked===false?"#7780A1":"red"} stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                    </div>
                </span>
        </div>
  )
}
