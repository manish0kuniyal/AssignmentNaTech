import {motion} from "framer-motion"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
function Discription() {
  return (<>
    <motion.div 
    
    initial={{ y: 100 }} 
    animate={{ y: 0 }}     
    transition={{ duration: 0.5 }} 
    className=' text-center py-4'>
        <div className='font-bold'>
        <h1 className='lg:text-[4rem] text-[5vmin] text-[#071A45]'>CONNECTING DREAMS TO REALITY</h1>
        <h1 className='lg:text-[4rem] text-[5vmin] text-blue-500'>YOUR PREMIER</h1>
        <h1 className='lg:text-[4rem] text-[5vmin] text-[#071A45]'>REAL ESTATE MARKETPLACE</h1>
        <p className='font-normal my-4 lg:text-[1.2rem] text-[3vmin]'>Where every search ends with a home</p>
        </div>

         <motion.div 
         
    initial={{ x: -100,opacity:0 }} 
    animate={{ x: 0 ,opacity:1}}     
    transition={{ duration: 0.5,delay:.5 }} 
         className='py-2  text-white w-[80%] justify-center flex mx-[auto]'>
        <button className='px-4 flex items-center justify-evenly p-2  mx-[5%]  bg-[#3A7DFF] rounded-[20px] '><p className='mr-2 text-[2vmin]'>Find your home</p>
       <ArrowRightAltIcon/>
        </button>
        
        <button className='px-4  flex items-center justify-evenly p-2  mx-[5%]  bg-[#3A7DFF] rounded-[20px] '><p className='mr-2 text-[2vmin]'>List Your Property
        </p>       <ArrowRightAltIcon/>
        </button>    
        </motion.div>   
        </motion.div></>
  )
}

export default Discription