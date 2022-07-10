import React from 'react'
import "./home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
         <div className='home_container'>
            <img 
            className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/BAU_Hero_Xbiz2022/Brownie2xpc_3000x1200._CB632422667_.jpg"
            />

            <div class="home_row">

                <Product id="465783"
                         title="Butterfly Smart Glass 3 Burner Gas Stove, Black"
                         price={34.99} 
                         image="./images/products-image/product1.jpg" 
                         rating={3}
                         />

                <Product id="465094"
                         title="ASUS VivoBook 14 (2021), Intel Core i5-1135G7 11th Gen, 14-Inch"
                         price={400.99} 
                         image="./images/products-image/product2.jpg" 
                         rating={5}
                         />
            </div>
            <div class="home_row">
                 <Product id="456783"
                         title="Dell 2in1 Inspiron 7420 Laptop, Intel i7-1255U, 16GB, 512GB, Win"
                         price={59.99} 
                         image="./images/products-image/product3.jpg" 
                         rating={5}
                         />

                <Product id="460003"
                         title="DJI OM 4 SE - Handheld 3-Axis Smartphone Gimbal Stabilizer with"
                         price={79.40} 
                         image="./images/products-image/product4.jpg" 
                         rating={5}
                         />

                <Product id="469883"
                         title="Panasonic LUMIX G7 16.99 MP 4K Mirrorless Interchangeable Lens"
                         price={99.99} 
                         image="./images/products-image/product5.jpg" 
                         rating={5}
                         /> 
            </div>
            <div class="home_row">
                 <Product id="400783"
                         title="Insta360 GO2(32 GB) – Small Action Camera, Weighs 27 g,"
                         price={36.44} 
                         image="./images/products-image/product6.jpg" 
                         rating={5}
                         />  
            </div>
        </div>    
    </div>
  )
}

export default Home;