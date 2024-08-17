import React from "react";
import AbayaHome from '../assets/images/AbayaHome.jpg';
import Store from "./Store";
import Event from "./Event";

function Home() {

    return (
        <>
            <div className="homeContainer">
                <div className="sub-homeContainer">
                    <div>
                        <h1 className="h1">Welcome to Modest Gallery</h1>
                        <p id="tagline"><i>Where Modesty Meets Elegance</i></p>
                    </div>

                    <p className="p"> At Modest Gallery, we offer a diverse collection of modest hijabs, abayas, and accessories that blend elegance with comfort, allowing you to express your unique style with confidence. In addition to our fashion offerings, we proudly present Shaam e Roshan, our lifestyle, food, and craft exhibitions that celebrate creativity and tradition. Each event showcases exquisite crafts, delightful foods, and unique lifestyle products, creating a vibrant community space. Join us at Modest Gallery and Shaam e Roshan, where style and culture come together beautifully.</p>

                    <p className="p">Our Modest Hijab Store can be your ultimate destination for modest fashion that empowers and celebrates your unique style. We are passionate about providing a curated selection of high-quality hijabs, abayas, and hijab accessories that are not only beautiful but also thoughtfully designed to meet the needs of modern, modest women. We believe that modesty and fashion go hand in hand. Our collection is a reflection of this philosophy, offering a diverse range of styles that cater to every taste, occasion, and personality. Whether you're looking for the perfect everyday hijab, a luxurious abaya for a special event, or stylish accessories to complete your look, we've got you covered.</p>

                    <p className="p">Our Event, Shaam e Roshan, is a vibrant celebration of culture, creativity, and community. These lifestyle, food, and craft exhibitions are designed to bring people together, offering a unique experience that blends tradition with modernity. At Shaam e Roshan, we showcase an array of exquisite crafts, delectable foods, and lifestyle products that reflect the richness of our heritage and the creativity of artisans from across the region.</p>
                </div>

                <div className="sub-homeContainer">
                    <img src={AbayaHome} alt="" />
                </div>
            </div>

            <div>
                <section id="event">
                    <Event />
                </section>
                <section id="store">
                    <Store />
                </section>
            </div>
        </>
    )
}

export default Home;