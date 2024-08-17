import React from 'react'
import Event1 from "../assets/images/Event/Event1.jpg"
import Event2 from "../assets/images/Event/Event2.jpg"
import Event3 from "../assets/images/Event/Event3.jpg"
import Event4 from "../assets/images/Event/Event4.jpg"
import Event5 from "../assets/images/Event/Event5.jpg"
import Event6 from "../assets/images/Event/Event6.jpg"
import Event7 from "../assets/images/Event/Event7.jpg"
import Event8 from "../assets/images/Event/Event8.jpg"
import Event9 from "../assets/images/Event/Event9.jpg"
import Event10 from "../assets/images/Event/Event10.jpg"
import Event11 from "../assets/images/Event/Event11.jpg"
import Event12 from "../assets/images/Event/Event12.jpg"

export default function Event() {
    return (
        <>
            <div id="event" className='event-div'>
                <h1
                    style=
                    {{
                        textAlign: "center",
                        color: "white",
                        fontSize: "60px",
                        fontFamily: "Georgia",
                        padding: "30px"
                    }}>
                    <i>Shaam-E-Roshan</i>
                </h1>
                <div className='eventcontainer'>
                    <div className='sub-eventcontainer'>
                        <img src={Event1} alt="" />
                    </div>
                    <div className='sub-eventcontainer'>
                        <img src={Event2} alt="" />
                    </div>
                    <div className='sub-eventcontainer'>
                        <img src={Event3} alt="" />
                    </div>
                    <div className='sub-eventcontainer'>
                        <img src={Event4} alt="" />
                    </div>
                    <div className='sub-eventcontainer'>
                        <img src={Event5} alt="" />
                    </div>
                    <div className='sub-eventcontainer'>
                        <img src={Event6} alt="" />
                    </div>
                    <div className='sub-eventcontainer'>
                        <img src={Event7} alt="" />
                    </div>
                    <div className='sub-eventcontainer'>
                        <img src={Event8} alt="" />
                    </div>
                    <div className='sub-eventcontainer'>
                        <img src={Event9} alt="" />
                    </div>
                    <div className='sub-eventcontainer'>
                        <img src={Event10} alt="" />
                    </div>
                    <div className='sub-eventcontainer'>
                        <img src={Event11} alt="" />
                    </div>
                    <div className='sub-eventcontainer'>
                        <img src={Event12} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}
