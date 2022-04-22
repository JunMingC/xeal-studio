import React from 'react'
import './slider.css'

const Slider = () => {
    return (
        <div className='sliderContainer-outer'>
            <div className='sliderContainer'>
                <div className='sliderBox-outer'>
                    <div className='sliderBox'>
                        <div className='slider'><span>LATEST GAME</span><span>LATEST GAME</span><span>LATEST GAME</span><span>LATEST GAME</span></div>
                        <div className='slider'><span>LATEST GAME</span><span>LATEST GAME</span><span>LATEST GAME</span><span>LATEST GAME</span></div>
                    </div>
                </div>
                <div className='sliderBox-outer-rtl'>
                    <div className='sliderBox'>
                        <div className='slider'><span>LATEST GAME</span><span>LATEST GAME</span><span>LATEST GAME</span><span>LATEST GAME</span></div>
                        <div className='slider'><span>LATEST GAME</span><span>LATEST GAME</span><span>LATEST GAME</span><span>LATEST GAME</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider