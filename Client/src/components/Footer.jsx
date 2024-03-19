import {useState}from 'react';
import footer from "../image/footer.png";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Footer() {
  const[email,setEmail]=useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!isValidEmail) {
        alert('Please enter a valid email address');
        return;
      }
  
      const response=await fetch('http://localhost:3000/subscribe',{
        method:'POST',
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({email})
      })
      if (response.ok) {
        alert('Email subscribed successfully')
        setEmail('')
      }
    }catch(error){
      console.log("error - ",error)
    }
  }
  return (
    <div className='border-2 bg-[#071A45] p-4'>

      <div className='flex flex-wrap justify-around text-white'>
        <div className='m-2 flex flex-col justify-around p-2 w-full lg:w-[30%]'>
          <h1 className='text-[4vmin] font-medium'><b>XYZ</b> INDUSTRIES</h1>
          <p className='text-[2vmin] my-4'>XYZ Industries: Where real estate dreams meet seamless transactions, transforming aspirations into achievements.</p>
          <button className='border-2 w-[50%] rounded-[20px] my-2 p-2'>EXPLORE
          <ArrowRightAltIcon/> </button>
        </div>

        <div className='m-2 list-none w-full lg:w-[10%]'>
          <h1 className='font-semibold py-4 text-[3vmin]'>Quick Links</h1>
          <ul>
            <li className='py-1'>About Us</li>
            <li className='py-1'>Blog</li>
            <li className='py-1'>Testimonials</li>
            <li className='py-1'>Terms and Conditions</li>
            <li className='py-1'>Privacy Policy</li>
            <li className='py-1'>Site Map</li>
          </ul>
        </div>

        <div className='py-2 my-2 list-none w-full lg:w-[20%]'>
          <h1 className='font-semibold text-[3vmin] mb-4 '>Customer Support</h1>
          <ul>
            <li className='py-1'>Feedback</li>
            <li className='py-1'>Report a Problem</li>
            <li className='py-1'>Request a Callback</li>
          </ul>
        </div>

        <div className='my-2 p-2 list-none w-full lg:w-[30%]'>
          <h1 className='font-semibold text-[3vmin] py-2'>Subscribe Us</h1>
          <ul>
            <li className='py-2'>Subscribe to our weekly newsletter</li>
            <form onSubmit={handleSubmit}>
              <input placeholder='Email id' className='text-black border-2 rounded-[10px] p-1 my-2  w-[35%]'    value={email}
                onChange={(e) => setEmail(e.target.value)}
           />
              <br />
              <button className='p-1 bg-[#3A7DFF] w-[35%] rounded-[10px]'>Subscribe</button>
            </form>
          </ul>
        </div>
      </div>

      <div className='lg:px-8 px-2 my-8 py-2'>
        <img src={footer} alt="Footer" className='w-full h-auto' />
      </div>
    </div>
  );
}

export default Footer;
