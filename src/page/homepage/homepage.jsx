import React from 'react'
// import { useState } from 'react'
import Footer from '../../component/footer/footer'
import Navbar from '../../component/navbar/navbar'
import NftandPrice from '../../component/nftandPrice/nftandPrice'
import NftCard from '../../component/NftCard/NftCard'
import NftHand from '../../component/NftHand/NftHand'
import NftHorizontalCard from '../../component/NftHorizontalCard/NftHorizontalCard'
import SmallNftCard from '../../component/SmallNftCard/SmallNftCard'
import './homepage.css'

export default function Homepage() {
  return (
    <div className='homepageMaincon'>
      <section className='homepageMaincon_section1'>
         <Navbar/>
         <div className='homepageMaincon_section1-innerCon1'>
            <span className='section1_innerCon1-headerandPCon'>
              <p className='innerCon1_headerandPCon-p1'>Non Fungible Tokens</p>
              <h1 className='innerCon1_headerandPCon-h1'>
                <span className='headerandPCon_h1-innertext1'>
                  A new NFT
                  <img src="/assets/curve1.svg" alt="" className='curve1' />
                </span><br /> 
                <span className='headerandPCon_h1-innertext2'>
                  <img src="/assets/curve2.svg" alt="" className='curve2' />
                  Experience
                </span>
              </h1>
              <p className='innerCon1_headerandPCon-p2'>Discover, collect and sell</p>
            </span>
            <span className='searchbar'>
              <input type="text" placeholder='Items, collections and creators' className='searchbar_input'/>
              <select name="" id="" className='searchbar_select'>
                <option value="Category" selected >Category</option>
                <option value="Digital Collectibles">Digital Collectibles</option>
                <option value="Digital Art">Digital Art</option>
                <option value="Virtual Real Estate">Virtual Real Estate</option>
                <option value="Gaming">Gaming</option>
                <option value="Music">Music</option>
                <option value="Sport">Sport</option>
              </select>
              <div className='iconSearch'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.93934" y1="22.9393" x2="17.4957" y2="7.38299" stroke="#2A27C9" stroke-width="3"/>
                <circle cx="15.5" cy="9.5" r="8" fill="white" stroke="#2A27C9" stroke-width="3"/>
                </svg>
              </div>
            </span>
            <div className='shoeBrandCon'>
              <img src="/assets/RitterSport.svg" className='shoeBrandCon_names' alt="" />
              <img src="/assets/Nike.svg" alt="" className='shoeBrandCon_names'/>
              <img src="/assets/Adidas.svg" alt="" className='shoeBrandCon_names'/>
              <img src="/assets/New Holland.svg" alt="" className='shoeBrandCon_names'/>
            </div>
         </div>
      </section>
       <section className='homepageMaincon_section2'>
          <h2 className='homepageMaincon_section2-h2'>Latest live auctions</h2>
          <div className='nftCon'>
              <NftCard imageNftPath={"/assets/nft2.png"} nftName={"Ethereal Dreamscape"} nftPrice={"1.11 ETH"}/>
              <NftCard imageNftPath={"/assets/nft1.png"} nftName={"Crypto Critters"} nftPrice={"2 ETH"}/>
              <NftCard imageNftPath={"/assets/nft3.png"} nftName={"Galactic Garden"} nftPrice={"0.8 ETH"}/>
              <NftCard imageNftPath={"/assets/nft4.png"} nftName={"Neon Noir"} nftPrice={"1 ETH"}/>
              <NftCard imageNftPath={"/assets/nft5.png"} nftName={"Pixelated Oasis"} nftPrice={"11 ETH"}/>
          </div>
       </section>
       <section className='homepageMaincon_section3'>
        <div className="innerCon1">
          <span className='innerCon1_innerCon'>
            <p className='innerCon1_innerCon-p'>Overline</p>
            <h3 className='innerCon1_innerCon-h3'>Sapien ipsum scelerisque convallis fusce</h3>
            <p className='innerCon1_innerCon-p2'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
            <span className='innerCon1_innerCon-btnCon'>
              <button className='innerCon_btnCon-btn1'>Get started</button>
              <button className='innerCon_btnCon-btn2'>Learn more</button>
            </span>
          </span>
          <div className='innerCon1_imgCon'>
            <img src="/assets/Right - Image.png" alt="" />
          </div>
        </div>
        <div className="innerCon2">
          <div className='innerCon2_hotsalesCon'>
              <p className='innerCon2_hotsalesCon-p'>Check out the hottest Sale offers</p>
              <div className='innerCon2_hotsalesCon-innerCon'>
                  <div className='hotsalesCon_innerCon-hotNft1'>
                        <div className='innerCon_hotNft1-imgCon'>
                          <img src="/assets/hotNft1.png" alt="" className='hotNft1_imgCon-img' />
                        </div>
                        <p className='innerCon_hotNft1-NftName'>Fames habitasse risus ultricies tortor sit</p>
                        <span className='innerCon_hotNft1-timeandPriceCon'>
                          <span className='hotNft1_timeandPriceCon-timeCon'>
                            <img src="/assets/Timer Icon.svg" alt="" />
                            <p className='timeandPriceCon_timeCon-time'>22:59</p>
                          </span>
                          <p className='hotNft1-timeandPriceCon-price'>2.55 ETH</p>
                        </span>
                        <hr className='innerCon_hotNft1-hr'/>
                        <span className='innerCon_hotNft1-biddingLikeCon'>
                          <p className='hotNft1_biddingLikeCon-p'>101 people are bidding</p>
                          {/* <img src="/assets/" alt="likeIcon" /> */}
                          <div className='hotNft1_biddingLikeCon-heartIcon'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.83268 2.5C3.53185 2.5 1.66602 4.34667 1.66602 6.625C1.66602 8.46417 2.39518 12.8292 9.57268 17.2417C9.70125 17.3199 9.84885 17.3613 9.99935 17.3613C10.1498 17.3613 10.2974 17.3199 10.426 17.2417C17.6035 12.8292 18.3327 8.46417 18.3327 6.625C18.3327 4.34667 16.4668 2.5 14.166 2.5C11.8652 2.5 9.99935 5 9.99935 5C9.99935 5 8.13352 2.5 5.83268 2.5Z" stroke="#7780A1" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                        </span>
                  </div>
                  <div className='hotsalesCon_innerCon-hotNft1'>
                        <div className='innerCon_hotNft1-imgCon'>
                          <img src="/assets/hotNft1.png" alt="" className='hotNft1_imgCon-img' />
                        </div>
                        <p className='innerCon_hotNft1-NftName'>Fames habitasse risus ultricies tortor sit</p>
                        <span className='innerCon_hotNft1-timeandPriceCon'>
                          <span className='hotNft1_timeandPriceCon-timeCon'>
                            <img src="/assets/Timer Icon.svg" alt="" />
                            <p className='timeandPriceCon_timeCon-time'>22:59</p>
                          </span>
                          <p className='hotNft1-timeandPriceCon-price'>2.55 ETH</p>
                        </span>
                        <hr className='innerCon_hotNft1-hr'/>
                        <span className='innerCon_hotNft1-biddingLikeCon'>
                          <p className='hotNft1_biddingLikeCon-p'>101 people are bidding</p>
                          {/* <img src="/assets/" alt="likeIcon" /> */}
                          <div className='hotNft1_biddingLikeCon-heartIcon'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.83268 2.5C3.53185 2.5 1.66602 4.34667 1.66602 6.625C1.66602 8.46417 2.39518 12.8292 9.57268 17.2417C9.70125 17.3199 9.84885 17.3613 9.99935 17.3613C10.1498 17.3613 10.2974 17.3199 10.426 17.2417C17.6035 12.8292 18.3327 8.46417 18.3327 6.625C18.3327 4.34667 16.4668 2.5 14.166 2.5C11.8652 2.5 9.99935 5 9.99935 5C9.99935 5 8.13352 2.5 5.83268 2.5Z" stroke="#7780A1" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                        </span>
                  </div>
                  <div className='arrowCon'>
                  <div class='arrowCon_circle'>
                            <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.06033 10.9394L1.65095 15.6946C1.27408 16.1009 0.662133 16.1019 0.28411 15.6968C-0.0938641 15.2917 -0.0948308 14.6339 0.281984 14.2275L4.69436 9.46918C5.06518 9.07267 5.26756 8.54877 5.26712 7.99096C5.26669 7.43314 5.06349 6.90966 4.69494 6.51694L0.283096 1.77359C-0.0943471 1.36782 -0.0942985 0.710009 0.283144 0.304297C0.660539 -0.101467 1.27249 -0.101415 1.64988 0.304349L6.05868 5.04443C6.79269 5.82655 7.19908 6.87351 7.2 7.98919C7.20092 9.10487 6.79617 10.1526 6.06033 10.9394Z" fill="white"/>
                            </svg>
                    </div>
                  </div>
              </div>
              <button className='innerCon2_hotsalesCon-btn'>Show me more</button>
          </div>
          <NftHand/>
          <div className='innerCon2_TopNft'>
              <p className='innerCon2_TopNft-p'>Top NFT at a lower price</p>
              <div className='innerCon2_TopNft-innerCon'>
                  <NftHorizontalCard NftImg={"/assets/smallNft1.svg"}/>
                  <NftHorizontalCard NftImg={"/assets/smallNft2.svg"} NftName={'Egestas blandit sit egestas non sed. Purus semper'}/>
                  <NftHorizontalCard NftImg={"/assets/smallNft3.svg"} NftName={'Id ut consequat netus nec vel amet ut porta in augue'}/>
                  <NftHorizontalCard NftImg={"/assets/smallNft4.svg"} NftName={'Sed et nibh felis integer tellus turpin'} />
              </div>
              <button className='innerCon2_TopNft-btn'>Show me more</button>
          </div>
        </div>
       </section>
      <section className='homepageMaincon_section4'>
          <img src="/assets/emojiandjet.png" alt="" className='homepageMaincon_section4-img' />
          <div className='homepageMaincon_section4-innerCon'>
            <p className='section4_innerCon-p1'>Overline</p>
            <h1 className='section4_innerCon-h1'>Habitant tristique aliquam in vel scelerisque</h1>
            <p className='section4_innerCon-p2'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
            <div className='section4_innerCon-fourboxmaincon'>
              <span className='innerCon_fourboxmaincon-BrushandtextCon'>
                <img src="/assets/brush.svg" alt="" className='fourboxmaincon_BrushandtextCon-img' />
                <p className='fourboxmaincon_BrushandtextCon-p1'>Sollicitudin sapien</p>
                <p className='fourboxmaincon_BrushandtextCon-p2'>Cursus fermentum</p>
              </span>
              <span className='innerCon_fourboxmaincon-BrushandtextCon'>
                <img src="/assets/fourbox.svg" alt="" className='fourboxmaincon_BrushandtextCon-img'/>
                <p className='fourboxmaincon_BrushandtextCon-p1'>Pulvinar metus</p>
                <p className='fourboxmaincon_BrushandtextCon-p2'>Nunc sed</p>
              </span>
            </div>
            <span className='section4_innerCon-btnCon'>
                  <button className='innerCon_btnCon-getstarted'>Get started</button>
                  <button className='innerCon_btnCon-learnmore'>Learn more</button>
              </span>
          </div>
       </section>
        <section className='homepageMaincon_section5'>
          <div className='homepageMaincon_section5-innerCon'>
            <p className='section5_innerCon-p'>Overline</p>
            <h1 className='section5_innerCon-h1'>Most popular live auctions</h1>
            <div className='section5_innerCon-menu'>
              <p className='innerCon_menu-options'>Architecture</p>
              <p className='innerCon_menu-options'>Photography</p>
              <p className='innerCon_menu-options'>Games</p>
              <p className='innerCon_menu-options'>Music</p>
            </div>
          </div>
          <div className='homepageMaincon_section5-innerCon2'>
              <div className='section5_innerCon2-nftsCon'>
                <SmallNftCard nftImg={"/assets/newimage-5.png"}/>
                <SmallNftCard nftImg={"/assets/newimage-1.png"}/>
                <SmallNftCard nftImg={"/assets/newimage-4.png"}/>
                <SmallNftCard nftImg={"/assets/newimage.png"}/>
                <SmallNftCard nftImg={"/assets/newimage-3.png"}/>
                <SmallNftCard nftImg={"/assets/newimage-2.png"}/>
              </div>
              <button className='section5_innerCon2-btn'>Show me more</button>
          </div>
          <hr className='homepageMaincon_section5-hr' />
       </section>
       <section className='homepageMaincon_section6'>
          <div className='homepageMaincon_section6-innerCon'>
            <span className='section6_innerCon-statsCon'>
              <img src="/assets/User Icon.svg" alt="" className='innerCon_statsCon-img' />
              <p className='innerCon_statsCon-p'>300k</p>
              <p className='innerCon_statsCon-p2'>Users Active</p>
            </span>
            <span className='section6_innerCon-statsCon'>
              <img src="/assets/Artworks Icon.svg" alt="" className='innerCon_statsCon-img' />
              <p className='innerCon_statsCon-p'>52,5k</p>
              <p className='innerCon_statsCon-p2'>Artworks</p>
            </span>
            <span className='section6_innerCon-statsCon'>
              <img src="/assets/Artists Icon.svg" alt="" className='innerCon_statsCon-img' />
              <p className='innerCon_statsCon-p'>17,5k</p>
              <p className='innerCon_statsCon-p2'>Artists</p>
            </span>
            <span className='section6_innerCon-statsCon'>
              <img src="/assets/Wallet Icon.svg" alt=""  className='innerCon_statsCon-img' />
              <p className='innerCon_statsCon-p'>35.58</p>
              <p className='innerCon_statsCon-p2'>ETH Spent</p>
            </span>
          </div>
          <div className='homepageMaincon_section6-innerCon2'>
            <div className='section6_innerCon2-innerdiv'>
              <p className='S6innerCon2_innerdiv-p'>Overline</p>
              <h3 className='S6innerCon2_innerdiv-h3'>Cursus vitae sollicitudin donec nascetur. Join now</h3>
              <p className='S6innerCon2_innerdiv-p2'>Donec volutpat bibendum justo, odio aenean congue est porttitor ut. Mauris vestibulum eros libero amet tincidunt.</p>
              <span className='S6innerCon2_innerdiv-btnCon'>
                <button className='innerdiv_btnCon-btn'>Get started</button>
                <button className='innerdiv_btnCon-btn2'>Learn more</button>
              </span>
            </div>
            <img src="/assets/Users.svg" alt="" className='section6_innerCon2-img' />
          </div>
          <span className='homepageMaincon_section6-innerCon3'>
            <span className='section6_innerCon3-nftCon1'>
            <NftandPrice nftimg={'/assets/Image.png'} ethprice={'1'}/>
              <NftandPrice nftimg={'/assets/Image-1.png'} ethprice={'1'}/>
              <NftandPrice nftimg={'/assets/Image-2.png'} ethprice={'1'}/>
              <NftandPrice nftimg={'/assets/Image-3.png'} ethprice={'1'}/>
              <NftandPrice nftimg={'/assets/Image-4.png'} ethprice={'1'}/>
              <NftandPrice nftimg={'/assets/Image-5.png'} ethprice={'1'}/>
              <NftandPrice nftimg={'/assets/Image-6.png'} ethprice={'1'}/>
              <NftandPrice nftimg={'/assets/Image-7.png'} ethprice={'1'}/>
            </span>
            <span className='section6_innerCon3-nftCon2'>
              <NftandPrice nftimg={'/assets/Image-8.png'} ethprice={'1'}/>
              <NftandPrice nftimg={'/assets/Image-9.png'} ethprice={'1'}/>
              <NftandPrice nftimg={'/assets/Image-10.png'} ethprice={'1'}/>
              <NftandPrice nftimg={'/assets/Image-11.png'} ethprice={'1'}/>
              <NftandPrice nftimg={'/assets/Image-12.png'} ethprice={'1'}/>
              <NftandPrice nftimg={'/assets/Image-13.png'} ethprice={'1'}/>
              <NftandPrice nftimg={'/assets/Image-14.png'} ethprice={'1'}/>
              <NftandPrice nftimg={'/assets/Image-15.png'} ethprice={'1'}/>
              <NftandPrice nftimg={'/assets/Image-16.png'} ethprice={'1'}/>
              <NftandPrice nftimg={'/assets/Image-17.png'} ethprice={'1'}/>
            </span>
            {/* <span className='section6_innerCon3-nftCon3'>
              
            </span> */}
          </span>
       </section>
       <Footer/>
    </div>
  )
}
