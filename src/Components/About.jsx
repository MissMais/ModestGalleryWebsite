import React from 'react'
import Story from '../assets/images/Story.jfif'
import Exhibition from '../assets/images/Exhibition.jpg'
import hijabi from '../assets/images/hijabi.webp'

export default function About() {
    return (
        <>
            <div className='main'>
                <div className='aboutdiv'>
                    <div className='sub-aboutdiv'>
                    <h2>Our Story</h2>
                        <div className='innerdiv'>
                            <div className='sub-innerdiv'>
                                <div className='headp'>
                                    <p>
                                        Modest Gallery was born out of a desire to provide high-quality, stylish, and modest fashion options for women who value both fashion and tradition. Our founder recognized a gap in the market for modest clothing that was not only respectful of religious and cultural values but also fashionable and versatile. With this vision in mind, Modest Gallery was established as a one-stop shop for women seeking modest yet chic clothing and accessories.
                                    </p>
                                </div>
                            </div>
                            <div className='sub-innerdiv'>
                                <img src={Story} alt=""  
                                style={{height:'220px', 
                                width:'220px',
                                position:'relative',
                                left:'100px',
                                top:'30px',
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div className='sub-aboutdiv'>
                    <h2>Modest Hijab Store</h2>
                        <div className='innerdiv'>
                            <div className='sub-innerdiv'>
                                <img src={hijabi} alt=""  
                                style={{height: '700px', 
                                width: '500px',
                                position: 'relative',
                                top:'80px'}}/>
                            </div>
                            <div className='sub-innerdiv'>
                                <div className='headp'>
                                    <p>
                                        At the heart of Modest Gallery is our Modest Hijab Store, where we offer an exquisite range of hijabs, abayas, and accessories that cater to the needs of modern, modest women. Our hijab collection is thoughtfully curated to include a variety of styles, fabrics, and colors, ensuring that every woman can find something that suits her taste and lifestyle. Whether you're looking for a simple, everyday hijab or a luxurious, statement piece, our collection has something for everyone.
                                    </p>
                                    <p>
                                        Our abayas are designed with a focus on quality, comfort, and elegance. We believe that modest clothing should not compromise on style, which is why our abayas feature modern cuts, intricate details, and premium fabrics. From casual, everyday wear to more formal, occasion-specific abayas, our collection is diverse and versatile, allowing you to express your personal style while adhering to your values.
                                    </p>
                                    <p>
                                        In addition to hijabs and abayas, we offer a wide range of accessories that complement your modest wardrobe. From chic underscarves to elegant hijab pins, our accessories are designed to enhance your overall look while adding a touch of sophistication. At Modest Hijab Store, we are committed to providing you with products that make you feel confident, comfortable, and beautiful.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='sub-aboutdiv'>
                    <h2>Shaam e Roshan</h2>
                        <div className='innerdiv'>
                            <div className='sub-innerdiv'>
                                <div className='headp'>
                                    
                                    <p>
                                        Modest Gallery is not just about fashion; it's about creating experiences that celebrate culture, creativity, and community. This is where Shaam e Roshan comes in. Shaam e Roshan is our signature series of lifestyle, food, and craft exhibitions that bring people together in a vibrant, festive atmosphere. These events are a celebration of the rich cultural heritage that inspires our brand, offering a platform for artisans, chefs, and entrepreneurs to showcase their talents and connect with a wider audience.
                                    </p>
                                    <p>
                                        At Shaam e Roshan, you'll find an array of beautifully crafted items, from traditional handicrafts to contemporary art, all reflecting the creativity and craftsmanship of the artisans. Our food stalls offer a diverse selection of culinary delights, giving visitors the opportunity to taste and savor flavors from different cultures. The lifestyle section of the exhibition features unique products that add a touch of elegance and style to everyday living.
                                    </p>
                                    <p>
                                        Each Shaam e Roshan event is carefully curated to provide a memorable experience for our visitors, whether you're shopping for unique gifts, enjoying delicious food, or simply soaking in the vibrant atmosphere. It's more than just an exhibition; it's a celebration of the values and traditions that we hold dear at Modest Gallery.
                                    </p>
                                </div>
                            </div>
                            <div className='sub-innerdiv'>
                                <img src={Exhibition} alt="" 
                                style={{height:'550px',
                                    width:'500px',
                                    position:'relative',
                                    top:'100px'}} />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='conclude'>
                    <p>
                        Thank you for choosing Modest Gallery as your trusted source for modest fashion and cultural experiences. We look forward to serving you and being a part of your journey.
                    </p>
                </div>
            </div>
        </>
    )
}
