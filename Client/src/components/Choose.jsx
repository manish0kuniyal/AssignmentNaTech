
function Choose() {
    const data = [
      {
        item: "01",
        heading: "SEARCH AND FILTER",
        description: "Tailored Searches to meet your needs. Find what you’re looking for with precision.",
        property:"mt-[4%]"
      },
      {
        item: "02",
        heading: "DETAILED LISTING",
        description: "Every Detail Matters. Sellers can list, and buyers can explore properties that meet their exact specifications.",
        property:"mt-[7%]"
      },
      {
        item: "03",
        heading: "DIRECT MESSAGING",
        description: "Seamless Communication. Connect directly with sellers or buyers to ask questions, negotiate, and make decisions.",
        property:"mt-[10%]"
      },
      {
        item: "04",
        heading: "SECURE PAYMENT",
        description: "Trust in Every Transaction. Our secure payment system ensures your peace of mind.",
        property:"mt-[7%]"
      }
    ];
  
    const gradientBorderStyle = {
      borderImage: 'linear-gradient(to bottom, transparent, #b3afaf) 1',
    };
  
    return (
      <div className=' bg-[#AFDCEC] mt-6 pb-16 px-4'>
        <div>
          <h1 className='  font-medium text-[#071A45] text-[2rem] text-center pt-10 lg:text-[4rem]'>WHY CHOOSE XYZ?</h1>
        </div>
        <div className=' flex lg:flex-row flex-col'>
          {data.map((it) => (
            <div key={it.item} className={`border-l-2 p-4 mx-4 lg:${it.property}`} style={gradientBorderStyle}>
              <h1 className='text-[10vmin] font-light'>{it.item}</h1>
              <h1 className='font-bold mb-6'>{it.heading}</h1>
              <div className='bg-[#6a9cd2] w-[10px] rounded-[2px] h-[10px]'></div>
              <h1 className='mt-8 text-gray-700'>{it.description}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Choose;
  