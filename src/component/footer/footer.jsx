import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div className='footerMainCon'>
        <div className='footerMainCon_innerCon1'>
            <img src="/assets/logo.svg" alt="logo" className='footerMainCon_innerCon1-logoImg' />
            <ul className='footerMainCon_innerCon1-supportCon'>
                <li className='innerCon1_supportCon-links'>Support</li>
                <li className='innerCon1_supportCon-links'>Term of service</li>
                <li className='innerCon1_supportCon-links'>License</li>
            </ul>
        </div>
        <div className='footerMainCon_innerCon2'>
            <ul className='footerMainCon_innerCon2-ul'>
                <li className='innerCon2_ul-li'>Auctions</li>
                <li className='innerCon2_ul-li'>Roadmap</li>
                <li className='innerCon2_ul-li'>Discover</li>
                <li className='innerCon2_ul-li'>Community</li>
            </ul>
            <button className='footerMainCon_innerCon2-btn'>My account</button>
            <div className='footerMainCon_innerCon2-sosialsCon'>
                <a href="">
                    <img src="/assets/Facebook Icon.svg" alt="socials" />                
                </a>
                <a href="">
                    <img src="/assets/Linkedin Icon.svg" alt="socials" />
                </a>
                <a href="">
                    <img src="/assets/Github Icon.svg" alt="socials" />
                </a>
                <a href="">
                    <img src="/assets/Twitter Icon.svg" alt="socials" />
                </a>
                <a href="">
                    <img src="/assets/Instagram Icon.svg" alt="socials" />
                </a>
            </div>
        </div>
        <div className='footerMainCon_innerCon3'>
            <p className='footerMainCon_innerCon3-p'>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis.</p>
            <form action="" className='footerMainCon_innerCon3-form'>
                <span className='innerCon3_form-inputCon'>
                    <input type="text" placeholder='Newsletter' className='form_inputCon-input'/>
                    <button className='form_inputCon-btn'>Sign in</button>
                </span>
            </form>
        </div>
    </div>
  )
}
