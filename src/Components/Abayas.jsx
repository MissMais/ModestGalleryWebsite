import React from 'react'
import Abaya1 from "../assets/images/Abayas/Abaya1.jpg"
import Abaya2 from "../assets/images/Abayas/Abaya2.jpg"
import Abaya3 from "../assets/images/Abayas/Abaya3.jpg"
import Abaya4 from "../assets/images/Abayas/Abaya4.jpg"
import Abaya5 from "../assets/images/Abayas/Abaya5.jpg"
import Abaya6 from "../assets/images/Abayas/Abaya6.jpg"



export default function Abayas({ abayas }) {

    return (
        <>
            <div className='main-div'>
                <div>
                    <h2>
                        Abayas
                    </h2>
                    <p className="p">
                        When it comes to abayas, <b style={{color:"#FB6D6C"}}>Modest Hijab Store</b> feel proud on offering pieces that are not only modest but also fashion-forward. Our abayas are designed with intricate details, luxurious fabrics, and flattering silhouettes that make you feel sophisticated and chic. Whether you prefer traditional designs or modern cuts, our collection is versatile enough to be worn for any occasion, from casual outings to formal gatherings.
                    </p>
                </div>
                <div className='container'>
                    <div className='sub-container'>
                        <img src={Abaya1} alt="" />
                    </div>
                    <div className='sub-container'>
                        <img src={Abaya2} alt="" />
                    </div>
                    <div className='sub-container'>
                        <img src={Abaya3} alt="" />
                    </div>
                    <div className='sub-container'>
                        <img src={Abaya4} alt="" />
                    </div>
                    <div className='sub-container'>
                        <img src={Abaya5} alt="" />
                    </div>
                    <div className='sub-container'>
                        <img src={Abaya6} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

