// import React from 'react';
import image199 from "../image/image 199.png";
import image200 from "../image/image 200.png";
import image201 from "../image/image 201.png";
import image202 from "../image/image 202.png";
import {motion} from "framer-motion"
function Work() {
    const data = [
        {
            heading: "Discover Your Perfect Home",
            description: "Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right.",
            imgSrc: image199
        },
        {
            heading: "Showcase Your Property",
            description: "List your property with ease. Fill in detailed forms to highlight every feature, attracting the perfect buyer directly.",
            imgSrc: image200
        },
        {
            heading: "Connect and Communicate",
            description: "Our platform facilitates direct communication between buyer and seller, making negotiations transparent and straightforward.",
            imgSrc: image201
        },
        {
            heading: "Seal the Deal Securely",
            description: "Advance payments made safe. Secure your agreement with confidence, and step closer to your dream property.",
            imgSrc: image202
        }
    ];

    return (
        <div className='mt-8'>
            <motion.div 
            
    initial={{ y: 100,opacity:0 }} 
    animate={{ y: 0 ,opacity:1}}     
    transition={{ duration: 0.5,delay:.5 }} 
            className='text-center'>
                <h1 className='text-[7vmin] font-bold'>HOW IT WORKS ?</h1>
                <p className='text-[1rem] my-2'>Step by Step Guide</p>
            </motion.div>
            <div className=' mt-8  lg:px-[10%] px-[2%] '>
                {data.map((item, index) => (
                    <motion.div 
                    
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 ,delay:1 }}
                    key={item.heading} className={` flex  ${index % 2 === 0 ? 'flex-row pl-2 ' : 'flex-row-reverse pr-1'} py-4 items-center `}>
                        <img className='w-[20%]' src={item.imgSrc} alt={item.heading} />
                        <div className='my-4 w-[60%] mx-6'>
                            <h1 className='text-[3.5vmin] font-semibold text-[#071A45]'>{item.heading}</h1>
                            <p className='text-gray-500 text-[2.5vmin]'>{item.description}</p>
                            <p className='underline text-gray-500 text-[2.5vmin]'>Learn More</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Work;
