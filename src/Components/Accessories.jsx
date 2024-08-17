import React from 'react'
import Acc1 from "../assets/images/Accessories/Acc1.jpg"
import Acc2 from "../assets/images/Accessories/Acc2.jpg"
import Acc3 from "../assets/images/Accessories/Acc3.jpg"
import Acc4 from "../assets/images/Accessories/Acc4.jpg"
import Acc5 from "../assets/images/Accessories/Acc5.jpg"
import Acc6 from "../assets/images/Accessories/Acc6.jpg"



export default function Abayas() {

    return (
        <>
            <div className='main-div'>
                <div>
                    <h2>
                        Accessories
                    </h2>
                    <p className="p">
                        No outfit is complete without the perfect accessories, and at <b style={{ color: "#FB6D6C" }}>Modest Hijab Store</b>, we offer a wide range of hijab accessories that add a touch of elegance and personality to your look. From pins and brooches to underscarves and headbands, our accessories are designed to enhance your hijab-wearing experience and make styling effortless. We understand the importance of quality and durability, which is why our accessories are made from the finest materials to ensure they last.
                    </p>
                </div>
                <div className='container'>
                    <div className='sub-container'>
                        <img src={Acc1} alt="" />
                    </div>
                    <div className='sub-container'>
                        <img src={Acc2} alt="" />
                    </div>
                    <div className='sub-container'>
                        <img src={Acc3} alt="" />
                    </div>
                    <div className='sub-container'>
                        <img src={Acc4} alt="" />
                    </div>
                    <div className='sub-container'>
                        <img src={Acc5} alt="" />
                    </div>
                    <div className='sub-container'>
                        <img src={Acc6} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

