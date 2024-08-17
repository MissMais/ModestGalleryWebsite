import React from 'react'
import Stole1 from "../assets/images/Stoles/Stole1.jpg"
import Stole2 from "../assets/images/Stoles/Stole2.jpg"
import Stole3 from "../assets/images/Stoles/Stole3.jpg"
import Stole4 from "../assets/images/Stoles/Stole4.jpg"
import Stole5 from "../assets/images/Stoles/Stole5.jpg"
import Stole6 from "../assets/images/Stoles/Stole6.jpg"



export default function Abayas() {

    return (
        <>
            <div className='main-div'>
                <div>
                    <h2>
                        Stoles
                    </h2>
                    <p className="p">
                        Our hijabs are crafted from premium fabrics, ensuring that they are comfortable, breathable, and easy to style. From classic neutrals to vibrant prints, our hijabs are designed to complement your wardrobe and make you feel confident and elegant. We understand that every woman has her own unique style, which is why our collection includes a variety of textures, lengths, and colors to suit your preferences.
                    </p>
                </div>
                <div className='container'>
                    <div className='sub-container'>
                        <img src={Stole1} alt="" />
                    </div>
                    <div className='sub-container'>
                        <img src={Stole3} alt="" />
                    </div>
                    <div className='sub-container'>
                        <img src={Stole2} alt="" />
                    </div>
                    <div className='sub-container'>
                        <img src={Stole4} alt="" />
                    </div>
                    <div className='sub-container'>
                        <img src={Stole5} alt="" />
                    </div>
                    <div className='sub-container'>
                        <img src={Stole6} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

