import React from 'react'
import './nftandPrice.css'
export default function NftandPrice({nftimg,ethprice}) {
  return (
    <div className='nftandprice_mainCon'>
        {/* border-radius: 20px; */}
        <img src={nftimg} alt="" className='nftandprice_mainCon-img' />
        <p className='nftandprice_mainCon-p'>{ethprice} ETH</p>
    </div>
  )
}
