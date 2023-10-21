import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>money heist</h1>
                <div className="buttons">
                    <button className='button'>play</button>
                    <button className='button'>mylist</button>

                </div>
                <h1 className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus reiciendis voluptatum. Sequi neque ex non quis veniam atque dicta temporibus ullam modi perspiciatis provident quasi dolorem, deserunt quas? Magnam?
                </h1>
            </div>
            <div className="fade"></div>


        </div>
    )
}

export default Banner