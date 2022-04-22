import React from 'react'
import './mainBanner.css'

const MainBanner = () => {
    return (
        <div className='mainBannerContainer-outer'>
              <img src='./images/Vector.webp' alt='images' className='img-float-0' />
            <div className='color-splat-1' />
            <div className='color-splat-2' />
            <div className='mainBannerContainer container'>
                <img src='./images/Mask Group.webp' alt='images' className='img-float-1' />
                <img src='./images/Mask Group (1).webp' alt='images' className='img-float-2' />
                <div className='mainBannerHeader'>
                    <h1>XEAL</h1>
                    <h1>EXPERIENCE</h1>
                </div>
                <div className='mainBannerSub'>
                    <p>
                        Our products seek to create immersive extended reality experiences that inspire and awestruck
                        <br />
                        first time and experienced users alike. We are redefining the way the world communicates,
                        <br />
                        works, plays, interacts, and thinks.
                    </p>
                </div>
                <div className='mainBannerNavBox'>
                    <div className='mainBannerNavBox-link-outer'>
                        <div className='mainBannerNavBox-link'>
                            Games
                        </div>
                    </div>
                    <div className='mainBannerNavBox-link-outer'>
                        <div className='mainBannerNavBox-link'>
                            VFX Videos
                        </div>
                    </div>
                    <div className='mainBannerNavBox-link-outer'>
                        <div className='mainBannerNavBox-link'>
                            UI/UX Design
                        </div>
                    </div>
                    <div className='mainBannerNavBox-link-outer'>
                        <div className='mainBannerNavBox-link'>
                            Web Development
                        </div>
                    </div>
                </div>
                <div className='mainBannerContactUs'>
                    Contact Us
                </div>
            </div>
        </div>
    )
}

export default MainBanner