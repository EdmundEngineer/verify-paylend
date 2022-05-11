function Verified() {

  return (
    <>


      <div className='flex items-center flex-col justify-center min-h-screen bg-white sm:bg-gray-100'>
        <div className='px-8 py-6 mt-4 text-left bg-white sm:shadow-lg w-full sm:rounded sm:w-1/3'>
          <div className='mb-7 flex justify-center'>
            <img src={"/assets/images/verified.png"} alt='Logo' className='w-50 h-60' />
    
          </div>
          <h3 className='text-xl mb-4 font-medium font-gotham-rounded-medium text-center text-secondary-900'>
            <p>Your email is successfully verified</p>
          </h3>

                  <button 
                 
                  className='bg-primary rounded-md font-body p-2 text-xs font-semibold ml-8 text-white pl-7 pr-7'
             
                >
                OPEN APP
                </button>

                <button 
                 
                  className='border-2 border-primary border-solid rounded-md font-body p-2 text-xs font-semibold ml-20 text-secondary-900 pl-7 pr-7'
             
                >
                OPEN IN BROWSER
                </button>



        
        </div>
      </div>
    </>
  )
}


export default Verified
