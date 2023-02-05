import React from 'react'
import './nfthand.css'
export default function NftHand() {
  return (
    <>
        <div className='tabCon'>
              <div className='handandTextCon'>
                <img src="/assets/hand.png" alt="" className='nftHand' />
                <span >
                    <h3 className='handandTextCon_h3'>Get started creating & selling your NFTs</h3>
                    <p className='handandTextCon_p'>Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi est sit.</p>
                    <button className='handandTextCon_btn'>Get started</button>
                </span>
              </div>
          </div> 
    </>

  )
}
